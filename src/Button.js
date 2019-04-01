import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        stop
      </button>
    );
  }
}

export default Button;
