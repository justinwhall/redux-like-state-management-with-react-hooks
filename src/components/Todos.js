import React, { useContext } from 'react';
import TodoContext from '../todoContext';
import Todo from './Todo';

const Todos = () => {
  const { state } = useContext(TodoContext);

  return (
    <div className="container">
      <h1>My Todos</h1>
      {state.map(todo => (
        <Todo {...todo} key={todo.name} />
      ))}
    </div>
  );
};

export default Todos;
