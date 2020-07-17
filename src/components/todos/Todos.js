import React, { Fragment, useEffect, useContext } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos';
import { Spinner } from 'reactstrap';

import TodoContext from '../../context/todo/todoContext';

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos, getTodos, filtered } = todoContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <AddTodo />

      <div className="card my-3">
        <div className="card-body">
          <h3>
            Todos <span className="text-primary">List</span>
          </h3>
          <FilterTodos />

          <ul className="list-group mt-5">
            {todos ? (
              filtered ? (
                filtered.map((todo) => <TodoItem key={todo._id} todo={todo} />)
              ) : (
                todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)
              )
            ) : (
              <div className="text-center">
                <Spinner
                  color="primary"
                  style={{ height: '2rem', width: '2rem', borderWidth: '3px' }}
                />
              </div>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Todos;
