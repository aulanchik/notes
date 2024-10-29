import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./notes";

const rootReducer = combineReducers({
  notes: notesReducer,
});

export default rootReducer;
