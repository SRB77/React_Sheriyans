/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
{
  /* http://localhost:5173/ */
}
import React, { useState } from "react";
import ChildA from "./Components/ChildA";

const userContext = React.createContext({});

const App = () => {
  const [user, setUser] = useState({
    name: "chandan",
    Email: "something@goggle.com",
    age: 20,
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quam! Earum atque aspernatur molestiae excepturi eius animi odio corrupti totam voluptas in necessitatibus est delectus unde deserunt, vero adipisci aliquam."
  });
  return (
    <div className="App">
      <h1 className="heading">LEARN CONTEXT API</h1>
      <userContext.Provider value={user}>
        <ChildA />
      </userContext.Provider>
    </div>
  );
};

export default App;
export { userContext };
