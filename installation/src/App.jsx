import React from "react";

const App = () => {
  let n = 5;
  let b = true;
  let s = "Hello World";
  let a = [1, 2, 3, 4, 5];
  let nu = null;
  let u = undefined;
  let o = { name: "John", age: 30, city: "New York" };
  return (
    <>
      <div className="main">
        <h1>React App</h1>
        <h2>Number: {n}</h2>
        <h2>Boolean: {b}</h2>
        <h2>String: {s}</h2>
        <h2>Array: {a}</h2>
        <h2>Null: {nu}</h2>
        <h2>Undefined: {u}</h2>
        {/* <h2>Object: {o}</h2>  */}
        {/* object can't be rendered directly in JSX, but you can use JSON.stringify to convert it to a string */}
        <h2>Object:{o.name}</h2>
      </div>
    </>
  );
};

export default App;
