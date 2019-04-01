import React, { Component } from "react";
import "./App.css";
import Watch from "./Watch";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { minutes: 0, seconds: 0 };
  }
  updateMinutes() {
    this.setState(state => ({
      minutes: state.minutes + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ seconds: state.seconds + 1 }));
      if (this.state.seconds > 60) {
        this.updateMinutes();
        this.state.seconds = 0;
      }
    }, 100);
  }

  renderWatch() {
    return <Watch value={this.state} className="watch" />;
  }

  stop() {
    clearInterval(this.interval);
  }

  renderstopButton() {
    return <Button onClick={this.stop.bind(this)} className="stopButton" />;
  }

  render() {
    return (
      <div className="container">
        <div>{this.renderWatch()}</div>
        <div>{this.renderstopButton()}</div>
      </div>
    );
  }
}

export default App;
