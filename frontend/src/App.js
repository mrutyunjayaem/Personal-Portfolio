import React from "react";
import HomePage from "./HomePage"
import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/skills" element = {<Skills/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </>;
}

export default App;
