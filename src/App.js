import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';


import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";

class App extends React.Component{
  render() { 
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
