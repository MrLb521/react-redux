import React from "react";
import MyButton from "../components/Buttons";
import { increment } from "../start/action/count";
import { connect } from "react-redux";
import { stat } from "fs";
import { Link } from "react-router-dom";
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>niaho</h1>
        <MyButton
          defaultStyle={{ backgroundColor: "red" }}
          text={"+1"}
          count={this.props.count}
          increment={this.props.increment}
        />
        <Link to="/bye">点击次数</Link>
      </div>
    );
  }
}
export default connect(
  state => ({ count: state.count.count }),
  { increment }
)(Hello);
