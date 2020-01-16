export const toggleTodo = (name, dispatch) =>
  dispatch({
    type: 'TOGGLE_TODO',
    payload: { name }
  });

export const addTodo = (todo, dispatch) =>
  dispatch({
    type: 'ADD_TODO',
    payload: todo
  });
