import React, { Component } from "react";
import axios from "axios";
import Display from "./components/Display";
import Header from "./components/Header";
import "./App.css";

class App extends Component {

    state = {
      player: {},
      players: []
    }
  

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
      .then( response => {
        console.log(response.data)
        this.setState({ players: [...this.state.players, response.data]})
      })
      .catch(error => console.log( 'axios didn\'t get', error));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {this.state.players.map( player => {
            return(
              <Display player={player} key={player.name}/>
            )
          })}
        </div>
      </div>
    );
  };
}

export default App;