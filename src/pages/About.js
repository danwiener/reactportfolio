import React from "react";
import Header from "../components/Header";
import { RiFileListLine } from "react-icons/ri";
import aboutmedata from "./aboutmedata";


export default function Resume() {
  return (
    <div className="projectsback">
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
        <div className="col-md-6 position-relative">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#B49BB6"
                d="M56.4,-65.1C72.3,-54,83.6,-35.4,87.2,-15.3C90.8,4.7,86.7,26.2,76.6,44.6C66.5,63.1,50.3,78.5,31.5,84.3C12.7,90.1,-8.7,86.5,-28.1,78.7C-47.4,71,-64.8,59.2,-75.6,42.6C-86.4,26,-90.8,4.6,-87.6,-15.8C-84.4,-36.2,-73.7,-55.7,-57.9,-66.8C-42,-78,-21,-80.8,-0.4,-80.4C20.3,-79.9,40.6,-76.3,56.4,-65.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <RiFileListLine 
            color="white"
            size='180'
            className="position-absolute top-50 start-50 translate-middle"/>
          </div>
          <div className="col-md-6 n-box2 px-3 py-5">
            <div className="proj">
              <h1 className="font-bold">Hi! I'm Dan.</h1>
              <p className="font-bold">
              I am open to work. Please view or download my resume below, or
                contact me through the contact page!
              </p>
              <div className="buttons">
              <button className="primary-button3">View Resume</button>
              <button className="primary-button4">Download Resume</button>
              <div className="resume-content">
                
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container projects-list">
        <h3 className="font-bold">More about me</h3>
        <hr/>

        <div className="row">

          {aboutmedata.map(aboutme=>{
            return <div className="col-md-4">
              <div className="position-relative project">
                <div className="ok">
              <img
                  src={aboutme.image}
                  alt=""
                  className="aboutmeimg"
                />
                </div>
                <div className="project-content">
                  <h3>ABOUT ME</h3>
                  <hr/>
                  <p>I am a Marine Corps veteran and software engineer with a
                background in 3D printing/3D engineering, though I have been
                around software engineering my whole life.
                <br />
                <br />
                My father was a professor of software engineering (PhD), mother
                has a Master's degree, and my siblings are successful developers
                as well, all of whom have influenced my passions.
                <br />
                <br /> Now I want to make my contribution to the world through
                software engineering.
                <br />
                <br />
                My goal is to create software solutions that can change the
                world and impact others' lives through bulletproof engineering
                and cutting edge innovation.
                <br />
                <br />
                I am immensely driven to learn something new everyday and can't
                be separated from endless bouts of immersion in problem solving.
                I love learning how to use new frameworks and libaries, and not
                much is more fulfilling than putting a tangible product out
                there that the customer can gain utility from.
                <br /></p>
                </div>
              </div>
            </div>
          })}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}


