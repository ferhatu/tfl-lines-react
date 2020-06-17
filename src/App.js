import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [modes, setModes] = useState([]);
  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => {
        setModes(data);
      });
  });
  return (
    <select>
      {modes.map((modes, index) => {
        return <option key={index}>{modes.modeName}</option>;
      })}
    </select>
  );
}

export default App;
