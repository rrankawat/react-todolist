import React, { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  API_URL,
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  FILTER_TODOS,
  CLEAR_FILTER,
  TODO_ERROR,
  CLEAR_ERRORS,
} from '../types';

const TodoState = (props) => {
  const initialState = {
    todos: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Get Todos
  const getTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/todos`);

      dispatch({ type: GET_TODOS, payload: res.data });
    } catch (error) {
      dispatch({ type: TODO_ERROR, payload: error.response.data.msg });
    }
  };

  // Add Todo
  const addTodo = async (todo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(`${API_URL}/todos`, todo, config);

      dispatch({ type: ADD_TODO, payload: res.data });
    } catch (error) {
      dispatch({ type: TODO_ERROR, payload: error.response.data.msg });
    }
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);

      dispatch({ type: DELETE_TODO, payload: id });
    } catch (error) {
      dispatch({ type: TODO_ERROR, payload: error.response.data.msg });
    }
  };

  // Complete Todo
  const completeTodo = async (id, todo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`${API_URL}/todos/${id}`, todo, config);

      dispatch({ type: COMPLETE_TODO, payload: res.data });
    } catch (error) {
      dispatch({ type: TODO_ERROR, payload: error.response.data.msg });
    }
  };

  // Filter Todos
  const filterTodos = (text) => {
    dispatch({ type: FILTER_TODOS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        filtered: state.filtered,
        error: state.error,
        getTodos,
        addTodo,
        deleteTodo,
        completeTodo,
        filterTodos,
        clearFilter,
        clearErrors,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
