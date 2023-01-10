import React from "react";
import Header from "../components/Header";
import { RiFileListLine } from "react-icons/ri";
import aboutmedata from "./aboutmedata";
import Footer from ".././components/Footer";



export default function About() {
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
          <div className="col-md-6 n-box2 px-3 py-5 projpush">
            <div className="proj">
              <h1 className="font-bold">Hi! I'm Dan.</h1>
              <p className="font-bold">
              I am open to work for an inclusive and innovative company where I can help enrich others' lives. Please view or download my resume below, or
                contact me through my contact page!
              </p>
              <div className="buttons">
              <button className="primary-button3">View/Download Resume</button>
              </div>
              <div className="resume-content">
                <iframe id='resumepdf'  src="./Resume.pdf#zoom=100"></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container projects-list">
        <h3 className="font-bold mt-5">More About Me</h3>
        <hr/>
        <div className="row projectsall">

          {aboutmedata.map(aboutme=>{
            return <div className="col-md-4">
              <div className="position-relative project">
                <div className="meimg">
              <img
                  src={aboutme.image}
                  alt=""
                  className="aboutmeimg"
                />
                </div>
                <div className="project-content2" >
                  <h3>ABOUT ME</h3>
                  <hr/>
                  <p>I am a Marine Corps veteran and full stack software engineer with a former
                background in 3D printing/3D engineering.
                <br />
                <br />
                The moment I discovered coding, it ignited a passion within me that has never wavered. Waking up every day to continue my journey as a software engineer is not just a job, it's a blessing. I am truly grateful to have found my calling in life and to have the opportunity to do what I love every day.
                <br />
                <br />
                I'm passionate about making software solutions of all kinds, whether front-end UI or backend REST
                methodologies, am driven by the desire to make a difference, and am always seeking new and challenging projects to work on. If you are looking for a talented, motivated, and results-driven software engineer to help you achieve your goals, I would be thrilled to discuss your needs and how I can help you. I am confident that my skills and experience will be a valuable asset to your organization.
                </p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}


