function todoReducer(state, action) {
  // const newState = [...state];
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.name === action.payload.name ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'ADD_TODO':
      return [...state, { name: action.payload, isDone: false }];
    default:
      return state;
  }
}

export default todoReducer;
