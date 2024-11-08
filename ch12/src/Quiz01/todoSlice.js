import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [], //배열형태
   reducers: {
      addTodo: (state, action) => {
         // redux 툴킷에서는 불변성을 유지하므로 push 사용 가능(그냥 redux는 안됨)
         state.push({ id: Date.now(), text: action.payload })
      },

      removeTodo: (state, action) => {
         return state.filter((todo) => todo.id !== action.payload)
      }, // 리턴이 없으면 state값을 바꾸는 것이 아니라서 리턴을 해줘야한다
      // filter 사용시 return을 하지 않으면 그냥 배열 그자체만 만들어 지므로 반드시 리턴
   },
})

export default todoSlice.reducer
//여기서 .reducer를 하면 store에서 reducer: {todos: todoSlice} 에서 reducer를 안붙여도 된다
// export default todoSlice 쓰려면 reducer: {todos: todoSlice.reducer,} 라고 해야한다
export const { addTodo, removeTodo } = todoSlice.actions
