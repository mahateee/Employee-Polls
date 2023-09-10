import Header from "../components/Header";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Poll from "./Poll";
import PollCreation from "./PollCreation";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Header /> */}
      <Dashboard />
      {/* <Poll /> */}
      {/* <PollCreation /> */}
      {/* <Leaderboard /> */}
    </div>
  );
}
export default connect()(App);
