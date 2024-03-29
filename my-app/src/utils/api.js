import { _getQuestions, _getUsers, _saveQuestionAnswer } from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}
export function saveQuestionAnswer(authedUserId, qid, answer) {
  return _saveQuestionAnswer({
    authedUser: authedUserId,
    qid,
    answer,
  });
}
