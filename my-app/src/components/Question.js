import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Question(props) {
  console.log(props);
  if (props.question === null) {
    return <p>This Tweet doesn't existd</p>;
  }
  const { id, author, timestamp } = { ...props.question };
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {author}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {new Date(timestamp).toDateString()}
              </p>
            </div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sm rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Link to={"questions/" + id}>Show</Link>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

// const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
//   const question = questions[id];
//   return {
//     authedUser,
//     question: question,
//   };
// };
// const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
//   const question = questions[id];
//   // const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

//   return {
//     authedUser,
//     question: question,
//   };
// };

export default connect()(Question);
