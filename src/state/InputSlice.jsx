import { createSlice } from "@reduxjs/toolkit";

const input = createSlice({
  name: 'input',
  initialState: {
    value: ''
  },
  reducers: {
    handleInputValue: (state, action) => {
      state.value = action.payload
    },
    resetInput: (state) => {
      state.value = ''
    }
  }
})

export const { handleInputValue, resetInput } = input.actions

export default input.reducer