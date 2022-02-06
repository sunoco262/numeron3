
// import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
function joinRoom(num){
    axios
      .get('http://numeronbackend.azurewebsites.net/joinRoom?id='+num)
  
      .then(res => {
          console.log(res)
          
      })
      .catch(err => {
          console.log(err);
      });
  }

  function createRoom(){
    axios
      .get('http://numeronbackend.azurewebsites.net/createRoom')
  
      .then(res => {
        console.log(res)
          
      })
      .catch(err => {
          console.log(err);
      });
  }



 
export default function App() {
    
  
    const [posts,setPosts] = useState([])
    React.useEffect(function() {
      const intervalId = setInterval(function() {
        axios
            .get('http://numeronbackend.azurewebsites.net/getRooms?')
  
            .then(res => {
                // console.log(res.data.room.num)
                setPosts(res.data.room);
                
            })
            .catch(err => {
                console.log(err);
            });
      }, 1000);
      return function(){clearInterval(intervalId)};
    });
    
  
    
    return (
      <div>
        {posts.map(item => (
                     <div key={item.id}>
                        <Link href={"sample/wait?id="+item.id}><a onClick={()=>joinRoom(item.id)}>ルーム{item.id}</a></Link>
                        <p>{item.num}人</p>
                     </div>
                ))}
                <div onClick={createRoom}>部屋作成</div>
      </div>
    )
  }
