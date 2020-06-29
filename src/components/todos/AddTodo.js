import React, { useContext, useState } from 'react';
import TodoContext from '../../context/todo/todoContext';

const AddTodo = () => {
  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;

  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo({ title: title });
    setTitle('');
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3>
          Add <span className="text-primary">Todo</span>
        </h3>
        <form onSubmit={onSubmit}>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="What you want to do?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add New" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
