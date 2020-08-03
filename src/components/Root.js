import React from "react";
import { Router } from "react-router-dom";
import history from "./history";

class Root extends React.Component {
  render() {
    return <Router history={history}>{this.props.children}</Router>;
  }
}

export default Root;
