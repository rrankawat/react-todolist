import React, { useContext, useRef, useEffect } from 'react';
import TodoContext from '../../context/todo/todoContext';

const FilterTodos = () => {
  const todoContext = useContext(TodoContext);
  const { filterTodos, clearFilter, filtered } = todoContext;

  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterTodos(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className="form-group mt-3">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search Todos"
        ref={text}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterTodos;
