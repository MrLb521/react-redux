import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, settimeoutAdd } from "../src/start/action/count";
import { Router, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Hello from "./Page/Hello.1";
import Bye from "./Page/Bye";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Hello} />
          <Route path="/bye" exact component={Bye} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
