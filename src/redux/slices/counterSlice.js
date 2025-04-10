import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'booksCounter',
  initialState: {
    bookCount: 0,
  },
  reducers: {
    increamentCount: (state) => {
        state.bookCount = state.bookCount + 1;
    },
    decreamentCount: (state) => {
        state.bookCount = state.bookCount - 1;
    },
    setCount: (state, action) => {
        state.bookCount = action.payload;
    }
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})
export const { increamentCount, decreamentCount, setCount } = counterSlice.actions

export default counterSlice.reducer 