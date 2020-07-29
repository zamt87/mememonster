import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import HomePage from "./HomePage";
import MakeMeme from "./MakeMeme";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/makememe" component={MakeMeme} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
