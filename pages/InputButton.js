import React, { Component } from "react";

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.x = this.props.x;
    this.y = this.props.y;
    this.style = {
      backgroundColor: "gray",
      position: "absolute",
      width: "10vh",
      height: "10vh",
      top: this.y + "vh",
      left: this.x + "vw",
      borderRadius: "5vh",
      color: "white",
      textAlign: "center",
      fontSize:"5vh",
    };
  }
  render() {
    return <button style={this.style}>{this.props.text}</button>;
  }
}

export default InputButton;
