/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useState([
    { name: "chandan", age: 20 },
    { name: "soumya", age: 10 },
    { name: "heillo", age: 23 },
  ]);
  const [fullName, setFullname] = useState("");
  const [age, setAge] = useState("");

  const renderUser = user.map((obj, index) => {
    return <li key={index}>{obj.name}</li>;
  });
  const submitHandler =  (e)=>{
    e.preventDefault();
    let newUser = {fullName,age}
    console.log(newUser);
  }
  return (
    <div>
      <div className="registerform">
        <h1>Register USER</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="fullName"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            value={fullName}
          />
          <input
            type="number"
            placeholder="phone Number"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
          />
          <button>submit</button>
        </form>
        <hr />
      </div>
      <h1>USER DATA : </h1>
      <ol>{renderUser}</ol>
    </div>
  );
};

export default App;
