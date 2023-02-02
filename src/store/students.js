import { createSlice } from '@reduxjs/toolkit'

const studentSlice = createSlice({
  name: 'student',
  initialState: { students: [] },
  reducers: {
    load (state, payload) {
      state.students = payload.payload.students
    },
  }
})

export const studentActions = studentSlice.actions
export default studentSlice.reducer