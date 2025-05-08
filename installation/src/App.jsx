import React from 'react'

const App = () => {
  let profiles = [
    { name: 'John Doe', age: 30 }, 
    { name: 'Jane Smith', age: 25 }, 
    { name: 'Alice Johnson', age: 28 }
  ]
   const updatedProfile = profiles.map((profile,index) => {
    return (
      <li key={index}>
        <h3>Name : {profile.name}</h3>  
        <small>Age : {profile.age}</small>
      </li>
    )
   });
  return (
    <>
      <h1>React App</h1>
     <ol>
      {updatedProfile}
     </ol>
    </>
  )
}

export default App