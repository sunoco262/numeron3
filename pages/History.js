import React, { Component } from "react";

class History extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
     
    };
  }
  
  
  render() {
    return (
      <div className="box">
        <p onClick={()=>test}>{this.props.history}</p>
        
      </div>
    );
  }
}

export default History;
