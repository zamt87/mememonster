import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import HomePage from "./HomePage";
import MakeMemePage from "./MakeMemePage";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/makememe/:id/:name/:url" component={MakeMemePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
