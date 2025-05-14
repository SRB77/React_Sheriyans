/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";
const App = () => {
  const [user, setUser] = useState([
    { name: "chandan", age: 20 },
    { name: "soumya", age: 10 },
    { name: "heillo", age: 23 },
  ]);
  return (
   <>
   <Create user={user}/>
   <hr />
   <Read user={user}/>
   </>
  );
};

export default App;
