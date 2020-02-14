import React, { Component } from "react";
import axios from "axios";
import Display from "./components/Display";
import Header from "./components/Header";
import "./App.css";

class App extends Component {

    state = {
      players: [],
      playersData: [],
      player: {}
    }
  

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
      .then( response => {
        // console.log(response.data)
        this.setState({ playersData: [...this.state.playersData, response.data]})
          console.log(this.state.playersData)
          this.state.playersData.map( players => {
            this.setState({players: players })
            console.log(players)
      })})
      .catch(error => console.log( 'axios didn\'t get', error));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {this.state.players.map( player => {
            return <Display player={player} key={player.id}/>
          })}
        </div>
      </div>
    );
  };
}

export default App;