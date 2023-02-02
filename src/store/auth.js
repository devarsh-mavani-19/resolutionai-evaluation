import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuth: false, email: '', password: ''},
  reducers: {
    login (state, payload) {
      state.isAuth = true
      state.email = payload.payload.email
      state.password = payload.payload.password
    },
    logout (state) {
      state.isAuth = false
      state.email = ''
      state.password = ''
    },
  }
})

export const authAction = authSlice.actions
export default authSlice.reducer