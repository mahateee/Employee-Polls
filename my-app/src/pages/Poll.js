import React from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";

function Poll(props) {
  const navigate = useNavigate();
  console.log(props);
  // let { dispatch } = props;
  const { author, optionOne, optionTwo, id } = props.question;
  const handleOptionOne = (e) => {
    e.preventDefault();
    props.dispatch(handleAddAnswer(id, "optionOne"));
    // console.log("option 1", props.question.id);
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    console.log("option 2");
    // console.log(question.id);
    // dispatch(handleAddAnswer(question.id, "optionTwo"));
    // navigate("/");
  };
  return (
    <section class="bg-white dark:bg-gray-900">
      <Header />
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Poll by {author}
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            would you rether
          </p>
        </div>
        <div class="grid grid-cols-2 gap-1 justify-items-center">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                "OPTION 1"
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {optionOne.text}
            </p>
            <button
              onClick={handleOptionOne}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Click
            </button>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                "OPTION 2"
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {/* {question.optionTwo.text} */}
              {optionTwo.text}
            </p>
            <button
              onClick={handleOptionTwo}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = ({ authedUser, questions, users }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const question_id = useParams().id;
  // console.log(question_id);
  const question = questions[question_id];
  return {
    authedUser,
    question,
    user: Object.values(users).find((user) => user.id === question.author),
  };
};
export default connect(mapStateToProps)(Poll);
