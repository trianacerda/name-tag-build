/* eslint-disable quotes */
import React, { Component } from "react";
import Controls from "../components/name-tag/Controls";
import Display from "../components/name-tag/Display";

class NameTag extends Component {
  state = {
    submitName: "",
    submitGreeting: "",
  };

  handleNameChange = (e) => {
    this.setState({ submitName: e.target.value });
  };

  handleGreetingChange = (e) => {
    this.setState({ submitGreeting: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitName: this.state.submitName,
      submitGreeting: this.state.submitGreeting,
    });
  };

  render() {
    const { submitName, submitGreeting } = this.state;
    return (
      <>
        <Controls
          onNameChange={this.handleNameChange}
          onGreetingChange={this.handleGreetingChange}
          onSubmit={this.handleSubmit}
        />
        <Display submitName={submitName} submitGreeting={submitGreeting} />
      </>
    );
  }
}

export default NameTag;
