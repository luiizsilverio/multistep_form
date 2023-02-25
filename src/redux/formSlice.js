import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'data',
    initialState: {
      name: "",
      email: "",
      review: "",
      comment: "",
    },
    reducers: {
        changeData(state, { payload }) {
          const newState = {
            ...state,
            ...payload,
          }
          return newState;
        },
    }
})

export const { changeData } = formSlice.actions;

export default formSlice.reducer;
