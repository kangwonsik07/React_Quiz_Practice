import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => [...state, (state = { id: Date.now(), text: action.payload })],

      removeTodo: (state, action) => [...state.filter((todo) => todo.id !== action.id)],
      //여기에 코드 작성
   },
})

export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions
