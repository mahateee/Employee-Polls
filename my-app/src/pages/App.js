import Header from "../components/Header";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Poll from "./Poll";
import PollCreation from "./PollCreation";

import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <BrowserRouter>
      {props.loading === true ? null : (
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          {/* <Route path="/Dashbord" exact element={<Dashboard />} /> */}

          <Route path="/questions/:id" element={<Poll />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});
export default connect(mapStateToProps)(App);
