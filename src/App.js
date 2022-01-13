import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar/>
          </Switch>
      </Router>
    </div>
  );
}
export default App;
