
// import Link from 'next/link'
import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link'
function joinRoom(num){
    axios
      .get('http://localhost:8000/joinRoom?id='+num)
  
      .then(res => {
          console.log(res)
          
      })
      .catch(err => {
          console.log(err);
      });
  }

  function createRoom(){
    axios
      .get('http://localhost:8000/createRoom')
  
      .then(res => {
          console.log(res)
          
      })
      .catch(err => {
          console.log(err);
      });
  }
class App extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios

            .get('http://localhost:8000/getRooms')

            .then(res => {
                console.log(res.data.room)
                this.setState({ posts: res.data.room });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                     <div key={item.id}>
                        <Link href={"sample/wait?id="+item.id}><a onClick={()=>joinRoom(item.id)}>ルーム{item.id}</a></Link>
                        <p>{item.num}人</p>
                     </div>
                ))}
                <Link href="#"><a onClick={createRoom}>部屋作成</a></Link>
            </div>
        );
    }
}

export default App;
