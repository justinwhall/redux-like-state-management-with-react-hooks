import React, { useReducer, useContext } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import Todos from './components/Todos';
import './app.css';
import AddTodo from './components/AddTodo';

const App = () => {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <AddTodo />
      <Todos />
    </TodoContext.Provider>
  );
};

export default App;
