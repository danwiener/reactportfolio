import React from "react";
import Header from ".././components/Header";
import { FaLaptopCode } from "react-icons/fa";
import projectsdata from "./projectsdata";
import Footer from ".././components/Footer";


export default function Projects() {
  const handleClickScroll = () => {
    const element = document.getElementById('projectsid');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };



  return (
    <div className="projectsback">
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5 projpush">
            <div className="proj">
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
              "The best work happens when you know that it's not just work, but something that will improve other people's lives." - Satya Nadella
              </p>
              <button className="primary-button2" onClick={handleClickScroll}>Get Started</button>
            </div>
          </div>

          <div className="col-md-6 position-relative">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#2885C7" d="M54.3,-65.1C69.7,-51.9,80.8,-34.1,84.5,-14.7C88.1,4.6,84.2,25.5,74.3,43C64.3,60.5,48.3,74.6,29.6,81.4C10.9,88.2,-10.4,87.8,-28.5,80.3C-46.5,72.8,-61.2,58.3,-71.4,41C-81.5,23.8,-87.2,3.7,-85.2,-16.3C-83.2,-36.4,-73.7,-56.4,-58.2,-69.5C-42.7,-82.7,-21.4,-89,-0.9,-87.9C19.5,-86.8,39,-78.3,54.3,-65.1Z" transform="translate(100 100)" />
</svg>
            <FaLaptopCode 
            color="white"
            size='180'
            className="position-absolute top-50 start-50 translate-middle"/>
          </div>
        </div>
      </div>

      <div className="container projects-list">
        <h3 className="font-bold">Take a Look At My Projects</h3>
        <hr/>

        <div className="row" id='projectsid'>

          {projectsdata.map(project=>{
            return <div className="col-md-4">
              <div className="position-relative project">
              <img
                  src={project.image}
                  alt=""
                  className="projectimg"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr/>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="primary-button5">VIEW/DOWNLOAD</button>
                  </a>
                  <hr/>
                  <p>{project.futurechanges}</p>
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
