import InputButton from "./InputButton";
import History from "./History";
import React, { Component } from 'react';
import axios from 'axios';

//todo Numeronの判定に変える
//ansがint型の配列　inputがstr型の文字列
let form ="_ _ _ _";
let cursor = 0;
let history = [];//文字列を入れる
function createGuess(room_id,info,eat,bite){
  axios
    .get('http://numeronbackend.azurewebsites.net/createGuess?room_id='+room_id+'&info='+info+'&eat='+eat+'&bite='+bite)

    .then(res => {
        console.log(res)
        
    })
    .catch(err => {
        console.log(err);
    });
}

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
function check(input,room_id) {
  console.log(room_id+" "+input)
  axios
    .get('http://numeronbackend.azurewebsites.net/checkCode?id='+room_id+'&input='+input)

    .then(res => {
        console.log(res.data.data.code)
        createGuess(room_id,input,res.data.data.eat,res.data.data.bite)
        return(res.data.data)
    })
    .catch(err => {
        console.log(err);
    });
  
}
class Form extends Component {
  input = "";
  text = "";
  constructor(props) {
    super(props);
    this.state = {
      form:form,
      cursor:cursor,
      checkCount:0,
      history:history
    };
    this.inputForm = this.inputForm.bind(this);
  }
  // コンポーネントがマウントされた後に実行
  componentDidMount() {
    // ----------- ①
    setInterval(() => {
        axios
      .get('http://numeronbackend.azurewebsites.net/getCount?id='+this.props.room_id)

      .then(res => {
        console.log(res.data.count)
        this.setState({
          checkCount: res.data.count
        });
      })
      .catch(err => {
          console.log(err);
      });
  
      
    }, 3000);
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
    var input = this.state.form.split(" ").join("");
    var r = check(input,this.props.room_id)
    console.log(r);
    this.setState({
      message: "",
      form:form,
      cursor:cursor,
      checkCount:this.state.checkCount+1
    });
    
  }
  render() {
    return (
      <div>
        <h1>{this.state.form}</h1>
        <h1>計{this.state.checkCount}回</h1>

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
        
      </div>
    );
  }
}

export default Form;
