import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Database from "./components/Database";


function App() {
  document.body.classList.add('body-style');
      return (
        <Tabs defaultActiveKey="about"
        justify
        className="tab-grp nav nav-tabs myClass">
        <Tab eventKey="about" title="About Me" className="nav-item ">
          <AboutMe />
        </Tab>
        <Tab eventKey="projects" title="Projects" className="nav-item">
          <Projects />
        </Tab>
        <Tab eventKey="contact" title="Contact" className="nav-item">
          <Contact />
        </Tab>
        {/* <Tab eventKey="database" title="Database" className="nav-item">
          <Database />
        </Tab> */}
      </Tabs>
      );
}

export default App;
