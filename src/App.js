import React from "react";
import './App.css';

function App() {
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  function handleClick() {
      setMessage("my new message");
  }

  return (
    <div className="app">
      <div>
          <h1>{message}</h1>
          <button onClick={handleClick}>Update the message!</button>
      </div>
      </div>
  );
}
export default App;


<div className="component">
<div>
    <h2>Numbers</h2>
    <button> onClick={handleClick}Increment</button>
</div>
</div>



    // <div id="numberbuttons" class="componentB">
    // <h2>Numbers</h2>
    // <form>
    //     <input type="button" onclick="incrementValue()" value="Increment Value" /> 
    //     <input type="text" id="number" value="0" size="10" />
    //     <input type="button" onclick="decrementValue()" value="Decrement Value" /> 
    // </form>
    // <p id="greeting-text"></p>
    // </div>
