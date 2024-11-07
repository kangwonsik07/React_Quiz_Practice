const initialState = { todos: [] }

function todoReducer(state = initialState, action) {
   // action = { type: 'addTodo', payload: inputValue }
   switch (action.type) {
      case 'addTodo':
         return { todos: [...state.todos, { id: Date.now(), text: action.payload }] }
      case 'deleteTodo':
         return { todos: [...state.todos.filter((id) => todo.id !== id)] }
      default:
         return state
   }
}

export default todoReducer
