/**
 * Author: Sami Haddad
 * Date Created: 8/23/2022
 * Last Modified: 8/24/2022
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

import tinytech from "./imgs/TinyTechsPreview.png";
import calculator from "./imgs/CalculatorAppPreview.png";
import pong from "./imgs/PongApplicationPreview.png";
import webcam from "./imgs/WebcamTrackingPreview.png";

function component(){

}

export default function Projects() {
  const projectsData = [
    {
      title: "Tiny Tech Game Preview",
      badge: "Unity/C#",
      description: "A 2D Game in Unity (Hackville 2nd Place Winner)",
      imageUrl: tinytech,
      link: "https://devpost.com/software/tiny-techs"
    },
    {
      title: "Calculator Application",
      badge: "C#/UWP",
      description: "A fully-functional simple calculator made with C# and UWP",
      imageUrl: calculator,
      link: "https://github.com/samihaddad99/CalculatorApplication"
    },
    {
      title: "Pong Application",
      badge: "Python/Turtle",
      description: "A re-creation of the classic game Pong, with 2 players",
      imageUrl: pong,
      link: "https://github.com/samihaddad99/Pong"
    },
    {
      title: "Webcam Tracking Application",
      badge: "C#/WPF",
      description: "An application that tracks movement",
      imageUrl: webcam,
      link: "https://github.com/samihaddad99/WebcamTracking"
    },
  ];
  const renderCarouselItem = (project, index) => (
    <Carousel.Item key={index} className={index === 1 ? "lastName" : ""}>
      <a href={project.link}>
        <img 
          alt={`${project.title} Preview`} 
          src={project.imageUrl}
          className={index === 2 ? "d-block w-100" : ""}
        />
      </a>
      <Carousel.Caption>
        <div className="cap-text-cont">
          <h3>{project.title} <Badge>{project.badge}</Badge></h3>
          <p>{project.description}</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  );
  return (
  <div>
    <p className='BodyText2 center body'>
      This is a list of some of the projects that I've worked on
    </p>
    <div className="hint center">you can click on any of the previews for the GitHub links!</div>

    <div id='carousel'>
      <Carousel className="crsl-cont">
        {projectsData.map(renderCarouselItem)}
      </Carousel>
    </div>
  </div>);
}