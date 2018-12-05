import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, settimeoutAdd } from "../src/start/action/count";

class App extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count.count} </div>
        <button onClick={this.props.increment}>+1</button>
        <button onClick={this.props.decrement}>-1</button>
        <button onClick={this.props.settimeoutAdd}>1s加1</button>
      </div>
    );
  }
}

const mapStateToProps = start => {
  return {
    count: start.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    settimeoutAdd: () => dispatch(settimeoutAdd())
    // reactsettime:()=>dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
