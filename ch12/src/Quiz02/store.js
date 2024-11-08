import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

const store = configureStore({
   // 여기에 코드 작성
   reducer: {
      auth: authSlice.reducer,
   },
})

export default store
