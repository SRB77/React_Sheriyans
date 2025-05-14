/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
const Create = (props) => {

    const [fullName, setFullname] = useState("");
    const [age, setAge] = useState("");

    const user = props.user;
    
    const submitHandler = (e) => {
      e.preventDefault();
      let newUser = { fullName, age };
      console.log(newUser);
    };
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
    </div>
  );
}

export default Create