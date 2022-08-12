import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';


import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";

import backgroundImage from "./pattern.png";

class App extends React.Component{
  render() { 
    return (
      <div className="App" style={{background: `url(${backgroundImage})`}}>
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
