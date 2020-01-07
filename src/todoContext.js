import React from 'react';

const initialState = [
  {
    name: 'Feed Dog',
    isDone: false
  },
  {
    name: 'Clean room',
    isDone: true
  },
  {
    name: 'Buy Food',
    isDone: false
  },
  {
    name: 'Go to Gym',
    isDone: false
  }
];

const TodoContenxt = React.createContext(initialState);

export default TodoContenxt;
