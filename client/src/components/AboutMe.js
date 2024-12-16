/**
 * Author: Sami Haddad
 * Date Created: 8/23/2022
 * Last Modified: 8/24/2022
 */

import React from 'react'
import ReactDOM from 'react-dom'

export default function AboutMe() {
  const img = require('./imgs/pfp.png');
    return <div className="AboutSection body">
      <img src={img} alt="Profile Picture" className="pfp" />
<p className="BodyText">
  <div>My name is Sami Haddad
  I'm an under-graduate student
  currently attending Sheridan College for a Computer Science degree in Data Analytics. </div>
  <div>Some of my hobbies include playing piano, making music,
  and programming, as well as tinkering with my Arduino.</div>
  <div>I have been learning TensorFlow 2.0 using Python and have finished <a href="https://www.freecodecamp.org/learn/machine-learning-with-python/">a course on Machine-Learning and A.I</a> and I would like to be apart of this technological breakthrough.</div>
  <div>I have won second place in my <a href="https://devpost.com/software/tiny-techs">first Hackathon (Hackville 2023)</a>.
  I have also won a Google Award at the <a href="https://devpost.com/software/maplebridge">last hackathon I competed in</a>,
    where I mainly worked on implementing A.I features in our mobile application called MapleBridge.</div>

  <div>While attending school, I am also working on a continuation of my team's <a href="https://www.youtube.com/watch?v=Y8fani3ousg&t=19s&ab_channel=JacobBullock">Capstone project</a>, where we made it to the top 10 projects
  for the 2023-2024 year at Sheridan. We are expecting completion of our MVP by the 3rd quarter of 2025.</div>
</p>
</div>
}