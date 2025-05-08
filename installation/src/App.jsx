import React from 'react'
import { useState } from 'react';
const App = () => {
  let [username,setUserName] = useState("Chandan");
  // let username = "chandan";
  // console.log(username);
  // const changeHandler = ()=>{
  //   username = "Soumyaranjan"
  //   console.log(username);
  // }
  const changeHandler = ()=>{
    setUserName("Soumyaranjan")
  }
  // console.log(username)  this is working sync and setUserName is working async . 

  return (
    <div>
      <h1>Username is : </h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>Click to Change</button>
    </div>
  )
}

export default App