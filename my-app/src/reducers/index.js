import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
export const rootReducer = combineReducers({
  users,
  questions,
});
