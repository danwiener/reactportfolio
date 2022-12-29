import React from "react";
import Header from "../components/Header";
import { MdOutlineListAlt } from "react-icons/md";

export default function Resume() {
  return (
    <div className="resumepage">
      <Header />
      <div className="container resume-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 position-relative blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#C76A28"
                d="M52.6,-72.3C67.7,-61.4,79.3,-45.4,84.7,-27.7C90.2,-10,89.7,9.5,83.2,26.4C76.8,43.3,64.5,57.6,49.7,68.9C34.9,80.2,17.4,88.5,-0.5,89.2C-18.4,89.9,-36.9,83,-52.3,71.9C-67.7,60.8,-80.1,45.4,-84.8,28.2C-89.5,11,-86.5,-8.1,-80.7,-26.4C-75,-44.7,-66.6,-62.4,-52.7,-73.7C-38.7,-85.1,-19.4,-90.2,-0.3,-89.7C18.7,-89.3,37.4,-83.3,52.6,-72.3Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
                src="./me.jpg"
                alt=""
                height="350"
                className="position-absolute top-50 start-50 translate-middle"
              />
          </div>
          <div className="col-md-6 n-box2 px-3 py-5 aboutmebox">
            <div className="resume">
              <h1 className="font-bold">Hi! I'm Dan.</h1>
              <hr />
              <p className="aboutmetext font-bold">I am a Marine Corps veteran and software engineer with a background in 3D printing/3D engineering, though I have been around software engineering my whole life.
              <br/><br/>My father was a professor of software engineering (PhD), mother has a Master's degree, and my siblings are successful developers as well, all of whom have influenced my passions.

              <br/><br/> Now I want to make my contribution to the world through software engineering.<br/><br/>

              My goal is to create software solutions that can change the world and impact others' lives through bulletproof engineering and cutting edge innovation.<br/><br/>

              I am immensely driven to learn something new everyday and can't be separated from endless bouts of immersion in problem solving. I love learning how to use new frameworks and libaries, and not much is more fulfilling than putting a tangible product out there that the customer can gain utility from.

              <br/><br/>I am open to work! View or download my resume below, or contact me through my contact page!
              </p>
              <button className="primary-button3">View Resume</button>
              <button className="primary-button4">Download Resume</button>
            </div>
          </div>
         


            </div>
          </div>
        </div>

  );
}
