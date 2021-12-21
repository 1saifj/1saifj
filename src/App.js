import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/projects";
import Courses from "./Pages/courses";
import Contacts from "./Pages/contacts";
import "./stylesheets/home.css";
import "./stylesheets/header.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
