import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import studentReducer from './students'


const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
  }
})

export default store