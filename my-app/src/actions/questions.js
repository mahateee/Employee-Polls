import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { saveQuestionAnswer } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { addAnswerUser } from "./users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export function getQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
function addAnswerQuestion(author, qid, answer) {
  return {
    type: ADD_ANSWER_QUESTION,
    author,
    qid,
    answer,
  };
}

export function handleAddAnswer(questionId, answer) {
  return (dispatch, getState) => {
    let { authedUser } = getState();
    authedUser = authedUser.id;
    return saveQuestionAnswer(authedUser, questionId, answer).then(() => {
      dispatch(addAnswerQuestion(authedUser, questionId, answer));
      dispatch(addAnswerUser(authedUser, questionId, answer));
    });
  };
}
