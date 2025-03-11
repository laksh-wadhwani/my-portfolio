import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./Screens/landingPage";
import Project from "./Screens/project";
import Navbar from "./Components/navbar";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/Project/:id" element={<Project/>}/>
        </Routes>
    </Router>
  );
}

export default App;
