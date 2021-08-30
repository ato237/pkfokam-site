import React , {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Program from "./components/Program";

class  App extends Component {
  render() {

    return (
        <Router>
          <Program/>

        </Router>
    );


  }
}

export default App;
