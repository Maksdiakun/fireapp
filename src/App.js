import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetails from "./component/projects/ProjectDetails";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateProject from "./component/projects/CreateProject";

import "./App.css";
import history from "./history";
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/Project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createproject" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
