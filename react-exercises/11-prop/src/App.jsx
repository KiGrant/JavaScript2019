import React, { Component } from "react";
import IsUserLoggedIn from "./components/IsUserLoggedIn";

// Import IsUserLoggedIn here

class App extends Component {
  render() {
    const Users = [
      {
        name: "Matina",
        isUserLoggedIn: false
      },
      {
        name: "Joe",
        isUserLoggedIn: true
      },
      {
        name: "Tom",
        isUserLoggedIn: true
      }
    ];
    // Complete me
    return (
      <div className="App">
        {
          <IsUserLoggedIn Users={Users} />
          /* Add IsUserLoggedIn component here with props */
        }
      </div>
    );
  }
}

export default App;
