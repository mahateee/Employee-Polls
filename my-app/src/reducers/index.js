import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";

export const rootReducer = combineReducers({
  authedUser,
  users,
  questions,
});
