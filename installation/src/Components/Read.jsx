/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
const Read = (props) => {

    const user = props.user
    
    const renderUser = user.map((obj, index) => {
      return <li key={index}>{obj.name}</li>;
    });
    
  return (
    <>
      <div>
        <h1>USER DATA : </h1>
        <ol>{renderUser}</ol>
      </div>
    </>
  );
}

export default Read