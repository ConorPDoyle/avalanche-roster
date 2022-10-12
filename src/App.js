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
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response))
      // .then((users) =>
      //   this.setState(
      //     () => {
      //       return { players: users };
      //     },
      //     () => {
      //       console.log(this.state);
      //     }
      //   )
      // );
  }

  render() {
    return (
      <div className="App">
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
