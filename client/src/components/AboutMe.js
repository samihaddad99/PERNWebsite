/**
 * Author: Sami Haddad
 * Date Created: 8/23/2022
 * Last Modified: 8/24/2022
 */

import React from 'react'
import ReactDOM from 'react-dom'

export default function AboutMe() {
    return <div className="AboutSection">
        <h2 className="heading">About Me</h2>
        <p className=" BodyText text-2xl">
          <img className="pfp" width="300" height="300" src={require('./imgs/pfp.png')} alt="Me"></img>
          Hello and Welcome to my PERN (Postgresql/Express/React/Node) stack website!
          Feel free to play around with the Database (from the tabs above).
          My name is Sami Haddad
          I'm an under-graduate student
          currently attending Sheridan College at the Software Development
          and Network Engineer program.
          Some of my hobbies include playing piano, making music,
          and programming.
          I have been learning TensorFlow 2.0 using Python and have finished <a href="https://www.freecodecamp.org/learn/machine-learning-with-python/">a course on Machine-Learning and A.I</a> and would like to be apart of this technological breakthrough.
          I have been applying this knowledge in my Capstone project.
        </p>
        <p>
          I have recently participated in my first hackathon (Hackville 2023), and to my surprise, we won second place.
          You can check out the overview of our project <a href="https://devpost.com/software/tiny-techs">through this link right here</a>.
          We're planning to bring more projects to life at Tiny Tech Studios, and are looking to compete in more hackathons soon.
        </p>
      </div>
}