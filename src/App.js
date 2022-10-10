import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Conor", lastName: "Doyle" },
      company: "Kennedy Catholic",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}. I work at{" "}
            {this.state.company}, which is okay I guess.
          </p>
          <button
            onClick={() => {
              this.setState(() => {
                return {
                  name: { firstName: "Zog", lastName: "Wog" }
                }
              }, 
              () => {
                console.log(this.state);
              });
              // console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
