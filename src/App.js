import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormPage from "./Form";
import APIPage from "./APIPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/api">
          <APIPage />
        </Route>
        <Route path="/">
          <FormPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
