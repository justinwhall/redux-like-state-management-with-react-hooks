import React, { useContext } from 'react';
import TodoContext from '../todoContext';
import { toggleTodo } from '../todoActions';

const Todo = ({ name, isDone }) => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="todo">
      <div className="todo-name">{name}</div>
      <div onClick={() => toggleTodo(name, dispatch)} className="is-done">
        {isDone ? '✅' : '⭕️'}
      </div>
    </div>
  );
};

export default Todo;
