/* eslint-disable no-unused-vars */

import React, { useState } from 'react'

const App = () => {
  const [todos,setTodos]  = useState([
      {id:1, title:"kam karle bhai",isCompleted:false}
  ])
  // const someting = [1,2,3,4,5]
  return (
    <>
      <div className="main">
        <h1>Application</h1>
        <li>{todos.map((elem) => elem.title)}</li>
        {/* <h1>{someting}</h1> */}
      </div>
    </>
  );
}

export default App

