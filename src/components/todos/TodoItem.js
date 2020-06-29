import React, { useContext, useState } from 'react';
import { MdDelete, MdRadioButtonUnchecked } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Spinner } from 'reactstrap';

import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo: { _id, title, completed } }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTodo, completeTodo } = todoContext;

  const [loading, setLoading] = useState(false);

  const onComplete = () => {
    onLoading();
    completeTodo(_id, { completed: !completed });
  };

  const onDelete = () => {
    onLoading();
    deleteTodo(_id);
  };

  const onLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        {loading ? (
          <Spinner
            color="primary"
            style={{ height: '1rem', width: '1rem', borderWidth: '2px' }}
          />
        ) : completed ? (
          <IoIosCheckmarkCircle
            color="#007bff"
            size="20"
            style={{ cursor: 'pointer' }}
            onClick={onComplete}
          />
        ) : (
          <MdRadioButtonUnchecked
            color="#007bff"
            size="20"
            style={{ cursor: 'pointer' }}
            onClick={onComplete}
          />
        )}

        <span className={`ml-1 ${completed ? 'completed' : ''}`}>{title}</span>
      </div>
      <span>
        <MdDelete
          color="#db4c3f"
          size="20"
          style={{ cursor: 'pointer' }}
          onClick={onDelete}
        />
      </span>
    </li>
  );
};

export default TodoItem;
