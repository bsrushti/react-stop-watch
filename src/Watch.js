import React, { Component } from "react";

class Watch extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.value.minutes}
        <span style={{ fontSize: 50 }}>m</span> : {this.props.value.seconds}
        <span style={{ fontSize: 50 }}>s</span>
      </div>
    );
  }
}

export default Watch;
