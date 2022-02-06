
// import Link from 'next/link'
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';

function leftRoom(num){
  axios
    .get('http://numeronbackend.azurewebsites.net/leftRoom?id='+num)

    .then(res => {
        console.log(res)
        
    })
    .catch(err => {
        console.log(err);
    });
}
function setCode(num){
  axios
    .get('http://numeronbackend.azurewebsites.net/setCode?id='+num)

    .then(res => {
        console.log(res)
        
    })
    .catch(err => {
        console.log(err);
    });
}

export default function Wait() {
  const router = useRouter();
  const query = router.query;

  const [now, setNow] = useState(new Date());
  const [num,setNum] = useState(0)
  React.useEffect(function() {
    const intervalId = setInterval(function() {
      console.log(router.query.id)
      axios
          .get('http://numeronbackend.azurewebsites.net/getRoom?id='+query.id)

          .then(res => {
              // console.log(res.data.room.num)
              setNum(res.data.room.num);
              
          })
          .catch(err => {
              console.log(err);
          });
    }, 3000);
    return function(){clearInterval(intervalId)};
  }, [query]);
  

  useEffect(()=> {
      axios

          .get('http://numeronbackend.azurewebsites.net/getRoom?id='+query.id)

          .then(res => {
              console.log(res.data.room.num)
              setNum(res.data.room.num);
          })
          .catch(err => {
              console.log(err);
          });
  },[query])
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      {/* パラメータの表示 */}
      <p>{num}人が待機しています</p>
      <p>ルーム {query.id}</p>
      <Link href={"game?id="+query.id}><a onClick={()=>setCode(query.id)}>ゲーム開始</a></Link><br/>
      <Link href="/"><a onClick={()=>leftRoom(query.id)}>退室</a></Link>
    </div>
  )
}