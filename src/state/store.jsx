import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './CounterSlice'
import InputReducer from './InputSlice'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    input: InputReducer
  }
})

export default store;