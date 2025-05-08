import React from "react";

const App = () => {
  // This function is non parameterized function so we can use it directly in the onClick event
  const handleClick = () => {
    alert("Button clicked!");
  };
  // This function is parameterized function so we need to use an arrow function to call it in the onClick event
    const handleClickWithParam = (param) => {
      alert(`Button clicked with param: ${param}`);
    };
  const wrapper = () => {
    handleClickWithParam("Hello World");
  };


  return (
    <>
      <h1>Hello World </h1>
      <button onClick={handleClick}>Click here</button>
      <button onClick={wrapper}>clickParam</button>
      {/* onClick asks for callback so we will provide a callback and inside that you throw whatever you want just for example , click here button also had a onClick ,and handleClick function is acting like a callback function , but in case of clickParam we are passing a parameter to the function so we need to wrap it , so we first create an callback fuction and then call the function inside that callback function */}
    </>
  );
};

export default App;
