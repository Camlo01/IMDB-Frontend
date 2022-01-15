import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutus from "./Components/Pages/Aboutus";
import Home from "./Components/Pages/Home";
import Profile from "./Components/Pages/Profile";
import Contactus from "./Components/Pages/Contactus";
import Navbar from "./Components/Navbar/Navbar";
import Movie from "./Components/Movie"
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch> 
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/Contactus" element={<Contactus />} />
          <Route exact path="/Profile" element={<Profile />} />
        </Switch>
        <Movie/>
      </Router>
    </>
  );
}
export default App;
