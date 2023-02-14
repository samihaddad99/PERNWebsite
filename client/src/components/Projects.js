/**
 * Author: Sami Haddad
 * Date Created: 8/23/2022
 * Last Modified: 8/24/2022
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

export default function Projects() {
    return <div>
      <h2>My Projects</h2>
      <p className='BodyText center'>
        This is a list of some of the projects I have made
      </p>
      <div className="hint center">you can click on any of the previews for the GitHub links!</div>
      <div id='carousel'>
      <Carousel className="crsl-cont">
        {/* Tiny Tech */}
      <Carousel.Item>
        <a id="imgLink" href="https://devpost.com/software/tiny-techs"><img alt="Tiny Tech Game Preview" src={require("./imgs/TinyTechsPreview.png")} /></a>
        <Carousel.Caption >
          <div className="cap-text-cont">
          <h3>Tiny Tech Game Preview<Badge>Unity/C#</Badge></h3>
          <p>A 2D Game in Unity (Hackville 2nd Place Winner)</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Calculator App */}
      <Carousel.Item className="lastName">
        <a href="https://github.com/samihaddad99/CalculatorApplication"><img alt="Calculator Application Preview" src={require("./imgs/CalculatorAppPreview.png")} /></a>
        <Carousel.Caption >
          <div className="cap-text-cont">
          <h3>Calculator Application <Badge>C#/UWP</Badge></h3>
          <p>A fully-functional simple calculator made with C# and UWP</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Pong App */}
      <Carousel.Item>
        <a href="https://github.com/samihaddad99/Pong"><img className="d-block w-100" alt="Pong Application Preview" src={require("./imgs/PongApplicationPreview.png")} /></a>
        <Carousel.Caption >
          <div className="cap-text-cont">
          <h3>Pong Application <Badge>Python/Turtle</Badge></h3>
          <p>A re-creation of the classic game Pong, with 2 players</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Backend App */}
      <Carousel.Item>
        <a href="https://github.com/samihaddad99/ShopifyCrud"><img  alt="Backend Application Preview" src={require("./imgs/BackendChallengePreview.png")} /></a>
        <Carousel.Caption >
          <div className="cap-text-cont">
          <h3>Backend Application <Badge>Java/SpringBoot</Badge></h3>
          <p>A Backend Application with full CRUD capabilities</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Webcam Tracking */}
      <Carousel.Item>
        <a id="imgLink" href="https://github.com/samihaddad99/WebcamTracking"><img alt="Webcam Application Preview" src={require("./imgs/WebcamTrackingPreview.png")} /></a>
        <Carousel.Caption >
          <div className="cap-text-cont">
          <h3>Webcam Tracking Application <Badge>C#/WPF</Badge></h3>
          <p>An application that tracks movement (in red)</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    
  </Carousel>
  </div>
      </div>
  }