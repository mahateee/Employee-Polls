import { getInitialData } from "../utils/api";
import { getQuestions } from "./questions";
import { getUsers } from "./users";
// const AUTHED_ID = "tylermcginnis";
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
