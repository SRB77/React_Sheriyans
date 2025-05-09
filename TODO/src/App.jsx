import React from 'react'
import './App.css'
const App = () => {
  return (
    <div className="main">
      <div className="todo">
        <div className="input_area">
          <input type="text" placeholder='ENTER YOUR TASK HERE' className='input_box'/>
          <button className='addBtn'>ADD</button>
        </div>
        <div className="tasks_area">

        </div>
      </div>
    </div>
  )
}

export default App