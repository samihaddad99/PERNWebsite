/**
 * Author: Sami Haddad
 * Date Created: 8/23/2022
 * Last Modified: 8/24/2022
 */

import React from 'react'
import ReactDOM from 'react-dom'

export default function AboutMe() {
    return <div className="AboutSection">
<p className="BodyText">
  <img className="pfp" width="300" height="300" src={require('./imgs/pfp.png')} alt="Me"></img>
  Hello and Welcome to my PERN (Postgresql/Express/React/Node) stack website!
  Feel free to play around with the Database (from the tabs above).<br></br><br></br>
  My name is Sami Haddad
  I'm an under-graduate student
  currently attending Sheridan College for a Computer Science degree in Data Analytics. <br></br><br></br>
  Some of my hobbies include playing piano, making music,
  and programming.
  I have been learning TensorFlow 2.0 using Python and have finished <a href="https://www.freecodecamp.org/learn/machine-learning-with-python/">a course on Machine-Learning and A.I</a> and I would like to be apart of this technological breakthrough.<br></br><br></br>
  I have won second place in my <a href="https://devpost.com/software/tiny-techs">first Hackathon (Hackville 2023)</a>.
  I have also won a Google Award at the <a href="https://devpost.com/software/maplebridge">last hackathon I competed in</a>,
    where I mainly worked on implementing A.I features in our mobile application called MapleBridge.<br></br><br></br>

  While attending school, I am also working on a continuation of my team's <a href="https://www.youtube.com/watch?v=Y8fani3ousg&t=19s&ab_channel=JacobBullock">Capstone project</a>, where we made it to the top 10 projects
  for the 2023-2024 year at Sheridan. We are expecting completion of our MVP by the 3rd quarter of 2025.
</p>
</div>
}