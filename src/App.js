import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { isCompositeComponent } from "react-dom/test-utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      //look into scraping from wikipedia roster page
      players: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { players: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search players"
          onChange={(event) => {
            console.log(event.target.value);
            const filteredPlayers = this.state.players.filter((player) => {
              return player.name.includes(event.target.value);
            });
          }}
        ></input>
        {this.state.players.map((player) => {
          return (
            <div key={player.id}>
              <h1>{player.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
