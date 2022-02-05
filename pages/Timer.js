import React, { Component } from "react";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timelag: "",
      nowTime: "",
      timer: 300
    };
  }

  // コンポーネントがマウントされた後に実行
  componentDidMount() {
    // ----------- ①
    setInterval(() => {
      this.setState({
        nowTime: this.getTime(this.state.timelag),
        timer: this.state.timer - 1
      });
    }, 1000);
  }

  // 日付と時刻を取得する（ex. 2020年 3月 14日 12:00:00)
  getTime(timelag = 0) {
    let japanTime = new Date().getTime();
    let nowTime = new Date(japanTime + timelag * 60 * 60 * 1000);
    let year = nowTime.getFullYear();
    let month = nowTime.getMonth() + 1;
    let date = nowTime.getDate();
    let hours = nowTime.getHours();
    let minutes = nowTime.getMinutes();
    let seconds = nowTime.getSeconds();

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    const time = `${year}年 ${month}月 ${date}日 ${hours}:${minutes}:${seconds}`;
    return time;
  }

  doChange = (e) => {
    // ----------- ②
    e.preventDefault();
    this.setState({
      timelag: e.target.value
    });
  };

  render() {
    return (
      <>
        <h1 className="Clock">{this.state.nowTime}</h1>
      </>
    );
  }
}

export default Timer;
