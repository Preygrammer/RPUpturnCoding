import { createReducer } from "@reduxjs/toolkit";
import { FETCH_PROBLEMS } from "../actions";

export default createReducer(null, (builder) => {
  builder
    .addCase(FETCH_PROBLEMS, (state, action) => {
      console.log(action.payload);
      return action.payload;
    })
    .addCase("DECREMENT", (state, action) => {
      state.value--;
    })
    .addCase("INCREMENT_BY_AMOUNT", (state, action) => {
      state.value += Number(action.payload.value);
    });
});
