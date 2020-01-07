export const toggleTodo = (name, dispatch) =>
  dispatch({
    type: 'TOGGLE_TODO',
    payload: { name }
  });

export const resetPackage = (category, dispatch) =>
  dispatch({
    type: 'RESET_PACKAGE',
    payload: category
  });
