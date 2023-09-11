import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import QuestionList from "../components/QuestionList";
import Question from "../components/Question";

import Container from "../components/Container";
import { connect } from "react-redux";
function Dashboard(props) {
  // const unanswered = (question) =>
  //   !question.optionOne.votes.includes(props.authedUser.id) &&
  //   !question.optionTwo.votes.includes(props.authedUser.id);

  // const answered = (question) =>
  //   question.optionOne.votes.includes(props.authedUser.id) ||
  //   question.optionTwo.votes.includes(props.authedUser.id);
  const { authedUser, questionIds, questions } = props;

  let questionsArr = [];
  for (let i = 0; i < questionIds.length; i++) {
    questionsArr.push(questions[questionIds[i]]);
  }

  const answeredQuestions = questionsArr.filter(
    (q) =>
      q.optionOne.votes.includes(authedUser) ||
      q.optionTwo.votes.includes(authedUser)
  );
  // console.log(answeredQuestions);

  const unansweredQuestions = questionsArr.filter(
    (q) =>
      !q.optionOne.votes.includes(authedUser) &&
      !q.optionTwo.votes.includes(authedUser)
  );
  // console.log("unansweredQuestions", unansweredQuestions);
  return (
    <Container>
      <QuestionList title="NEW QUESTION">
        {unansweredQuestions.map((question) => (
          // console.log(id)
          <Question question={question} author={props.users[question.author]} />
        ))}
      </QuestionList>
      <QuestionList title="DONE">
        {answeredQuestions.map((question) => (
          // console.log(id)
          <Question question={question} author={props.users[question.author]} />
        ))}
      </QuestionList>
    </Container>
  );
}

const mapStateToProps = ({ questions, authedUser, users }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  authedUser,
  questions,
  users,
});
export default connect(mapStateToProps)(Dashboard);
