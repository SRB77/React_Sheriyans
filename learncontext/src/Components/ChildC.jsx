import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'
import "./ChildC.css"

const ChildC = () => {
    const user = useContext(userContext)
    // console.log(user)
  return (
    <>
      <div className="card">
        <div className="card-main-info">
          <h1 className="cardheading">{user.name}</h1>
          <span className="cardAge">{user.age}</span>
        </div>
        <p className="description">{user.description}</p>
      </div>
    </>
  );
}

export default ChildC