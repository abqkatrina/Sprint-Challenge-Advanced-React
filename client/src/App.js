import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./components/Display";
import Header from "./components/Header";

import "./App.css";

 export default function App() {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/players"
      )
      .then(response => setPlayerData(response.data))
      .catch(error => console.log( 'axios didn\'t get', error));
  }, []);
  return (
    <div className="App">
      <Header />
      <Display playerData={playerData} />
    </div>
  );
}

