import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  solved: 0,
  pending: 0,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase("GET_PROBLEMS_STATUS", (state, action) => {
      return action.payload.data;
    })
    .addCase("SHOW_ME", (state, action) => {
      console.log(action.payload);
    })
    .addCase("INCREMENT_BY_AMOUNT", (state, action) => {
      state.value += Number(action.payload.value);
    });
});
