import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [answer, setAnswer] = useState("");

  function checkPalindrome(string) {
    if (string.length === 0) {
      setAnswer("Please enter a word to check if it is a palindrome");
      return;
    }
    let returnString = "";
    let newString = string.toLowerCase().substring();
    newString = newString.replace(/\s+/g, "");
    for (let i = newString.length - 1; i >= 0; i--) {
      returnString = returnString + newString[i];
    }
    if (returnString === newString) {
      setAnswer('"' + string + '"' + " is a palindrom");
    } else setAnswer('"' + string + '"' + " is not a palindrom");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPalindrome(string);
  };

  return (
    <div className="App">
      <h1>Palindrome Check</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        ></input>
        <button className="bttn">Check</button>
      </form>
      <div className="answer">{answer}</div>
    </div>
  );
}

export default App;
