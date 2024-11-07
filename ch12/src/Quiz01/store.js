import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

const store = configureStore({
   // 여기에 코드 작성
   reducer: {
      todos: todoSlice,
   },
})

export default store
