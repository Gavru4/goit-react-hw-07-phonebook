import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./filterAction";

const filterReduser = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

export default filterReduser;
