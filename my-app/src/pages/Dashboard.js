import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import QuestionList from "../components/QuestionList";
import Question from "../components/Question";

import Container from "../components/Container";
import { connect } from "react-redux";
function Dashboard({ authedUser, questions, users }) {
  const [activeContent, setActiveContent] = useState("content-1");
  const handleContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <Container>
      <QuestionList title="NEW QUESTION">
        {questions.map(
          (question) => console.log(question)
          // <Question question={question} author={users[question.author]} />
        )}
      </QuestionList>
      <QuestionList title="DONE">
        <Question />
      </QuestionList>
    </Container>
  );
}
const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});
export default connect(mapStateToProps)(Dashboard);
