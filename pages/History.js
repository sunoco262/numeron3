import axios from 'axios';
import React, { useState,useEffect } from 'react';

import { useRouter } from 'next/router';


export default function History() {
  const router = useRouter();
  const query = router.query;
  const [history,setHistory] = useState([])

  React.useEffect(function() {
    const intervalId = setInterval(function() {
      console.log(router.query.id)
      axios
          .get('http://numeronbackend.azurewebsites.net/getGuess?id='+query.id)

          .then(res => {
              // console.log(res.data.room.num)
              setHistory(res.data.guess);
              
          })
          .catch(err => {
              console.log(err);
          });
    }, 3000);
    return function(){clearInterval(intervalId)};
  }, [query]);
  

  useEffect(()=> {
      axios

          .get('http://numeronbackend.azurewebsites.net/getGuess?id='+query.id)

          .then(res => {
              setHistory(res.data.guess);
          })
          .catch(err => {
              console.log(err);
          });
  },[query])
  return (
    <div className="box">
        {history.map(item => (
          <div key={item.id}>
            <p>{item.info} {item.eat}eat {item.bite}bite</p>
          </div>
        ))}
        
      </div>
  )
}