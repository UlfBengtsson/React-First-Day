import React, { Component } from "react";

export default class TextInput extends Component {
  state = {
    userText: this.props.name
  };

  changeText = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h3>{this.state.userText}</h3>
        <input
          name="userText"
          value={this.state.userText}
          onChange={this.changeText}
        />
      </div>
    );
  }
}
