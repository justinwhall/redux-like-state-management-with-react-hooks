function todoReducer(state, action) {
  // const newState = [...state];
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.name === action.payload.name ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
}

export default todoReducer;
