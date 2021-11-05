import React, { Component } from 'react';
import Controls from '../Controls';
import Display from '../Display';

class NameTag extends Component {
  state = {
    greeting: '',
    tagName: '',
    submitName: '',
    submitGreeting: '',
  };

  handleNameChange = (e) => {
    this.setState({ tagName: e.target.value });
  };

  handleGreetingChange = (e) => {
    this.setState({ greeting: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitName: this.state.tagName,
      submitGreeting: this.state.greeting,
    });
  };

  render() {
    const { tagName, greeting, submitName, submitGreeting } = this.state;
    return (
      <>
        <Controls
          greeting={greeting}
          onNameChange={this.handleNameChange}
          tagName={tagName}
          onGreetingChange={this.handleGreetingChange}
          onSubmit={this.handleSubmit}
        />
        <Display submitName={submitName} submitGreeting={submitGreeting} />
      </>
    );
  }
}

export default NameTag;
