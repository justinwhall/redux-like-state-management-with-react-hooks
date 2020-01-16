import React, { useContext, useRef } from 'react';
import TodoContext from '../todoContext';
import { addTodo } from '../todoActions';

const AddTodo = ({ name, isDone }) => {
  const { state, dispatch } = useContext(TodoContext);
  const todoInput = useRef(null);

  const handleAddTodo = e => {
    const { value } = todoInput.current;
    addTodo(value, dispatch);
  };

  return (
    <div className="add-todo container">
      <label className="item" htmlFor="add-todo">
        Add Todo
        <input ref={todoInput} type="text" />
      </label>
      <button onClick={handleAddTodo} className="item">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
