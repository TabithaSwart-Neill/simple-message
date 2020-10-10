import React from "react";

function App() {
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  function handleClick() {
      setMessage("my new message");
  }

  return (
      <div>
          <h1>{message}</h1>
          <button onClick={handleClick}>Update the message!</button>
      </div>
  );
}

export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
