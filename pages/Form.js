import React, { Component } from "react";
import InputButton from "./InputButton";
import History from "./History";

//todo Numeronの判定に変える
//ansがint型の配列　inputがstr型の文字列
let form ="_ _ _ _";
let cursor = 0;
let history = [];//文字列を入れる
function initializeForm(num){
  form ="_ _ _ _";
  cursor = 0;
}
function editform(num){
  if(cursor>3)return;
  let ary = form.split(" ");
  ary[cursor]=num;
  cursor++;
  console.log(ary)
  form = ary.join(" ");
}
function check(ans, input) {
  var eat, bite;
  var num = [0, 0, 0, 0];
  var a, b;
  var str;

  num[0] = parseInt(input / 1000, 10);
  num[1] = parseInt((input - num[0] * 1000) / 100, 10);
  num[2] = parseInt((input - num[0] * 1000 - num[1] * 100) / 10, 10);
  num[3] = parseInt(input - num[0] * 1000 - num[1] * 100 - num[2] * 10, 10);

  eat = 0;
  bite = 0;
  for (a = 0; a < 4; a++) {
    if (num[a] === ans[a]) {
      eat++;
    }
    for (b = 0; b < 4; b++) {
      if (a !== b && num[a] === ans[b]) {
        bite++;
      }
    }
    str = "eat" + eat + " bite" + bite;
  }
  history.push(input+" "+str)
  console.log(history)
  return str;
}
class Form extends Component {
  input = "";
  text = "";
  constructor(props) {
    super(props);
    this.state = {
      message: "4桁の数字を入力してください",
      form:form,
      cursor:cursor,
      checkCount:0,
      history:history
    };
    this.inputForm = this.inputForm.bind(this);
  }

  
  
  inputForm(num){
    editform(num)
    this.setState({
      form:form,
      cursor:cursor
    })
  };
  deleteForm(){
    let ary = form.split(" ");
    console.log(cursor)
    if(cursor > 0)cursor--;
    console.log(cursor)
    ary[cursor]="_";
    form = ary.join(" ");
    this.setState({
      form:form,
      cursor:cursor
    })
  }
  submitForm() {
    console.log(parseInt(this.state.form.split(" ").join("")))
    initializeForm();
    this.setState({
      message: check(this.props.keyword,parseInt(this.state.form.split(" ").join(""))) + "!!",
      form:form,
      cursor:cursor,
      checkCount:this.state.checkCount+1
    });
    
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.form}</h1>
        <h1>{this.state.checkCount}回</h1>

        <div onClick={()=>this.inputForm("1")}><InputButton x="10" y="50" text="1"  /></div>
        <div onClick={()=>this.inputForm("2")}><InputButton x="40" y="50" text="2"  /></div>
        <div onClick={()=>this.inputForm("3")}><InputButton x="70" y="50" text="3"  /></div>
        <div onClick={()=>this.inputForm("4")}><InputButton x="10" y="62" text="4"  /></div>
        <div onClick={()=>this.inputForm("5")}><InputButton x="40" y="62" text="5"  /></div>
        <div onClick={()=>this.inputForm("6")}><InputButton x="70" y="62" text="6"  /></div>
        <div onClick={()=>this.inputForm("7")}><InputButton x="10" y="74" text="7"  /></div>
        <div onClick={()=>this.inputForm("8")}><InputButton x="40" y="74" text="8"  /></div>
        <div onClick={()=>this.inputForm("9")}><InputButton x="70" y="74" text="9"  /></div>
        <div onClick={()=>this.deleteForm()}><InputButton x="10" y="86" text="←"  /></div>
        <div onClick={()=>this.inputForm("0")}><InputButton x="40" y="86" text="0"  /></div>
        <div onClick={()=>this.submitForm()}><InputButton x="70" y="86" text="✔"  /></div>

        <History history={this.state.history.join("\n")}/>
        
      </div>
    );
  }
}

export default Form;
