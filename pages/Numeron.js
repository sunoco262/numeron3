import React, { Component } from "react";
import Form from "./Form.js";
let card = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = [0, 1, 2, 3];
function shuffle() {
  var a = 0;
  var b = 0;
  var tmp = 0;
  for (var i = 0; i <= 10; i++) {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    tmp = card[a];
    card[a] = card[b];
    card[b] = tmp;
  }
  for (var j = 0; j <= 3; j++) {
    ans[j] = card[j];
  }
}

class Numeron extends Component {
  constructor(props) {
    super(props);
    shuffle();
    this.state = {
      data: ans
    };
  }
  shuffle = () => {
    shuffle();
    this.setState({
      data: ans
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <button onClick={this.shuffle}>シャッフル</button>
        <Form keyword={this.state.data} />
      </>
    );
  }
}
export default Numeron;
