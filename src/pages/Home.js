import React from "react";
import { json } from "react-router-dom";
import Header from ".././components/Header";
import Carousel from "../components/Carousel";
import Footer from ".././components/Footer";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById('carouselscroll');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <div className="parent-container">
      <Header />

      <div
        className="introduction flex-with-center"
      >
        <div>
          <h1 className="titlehover">DAN WIENER</h1>

          <div className="intro-content d-flex justify-content-between">
            <p id="intro-p">
              I Am A <span>Software Engineer</span> ,<br /><p id='nexttitle'> Dedicated, <span><b>Bold</b></span>.</p>
            </p>
            <button className="primary-button font-bold" onClick={handleClickScroll}>GET STARTED</button>
          </div>
        </div>
      </div>

    <div id='carouselscroll'>
      <Carousel />
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#204967" fill-opacity="1" d="M0,192L30,202.7C60,213,120,235,180,245.3C240,256,300,256,360,261.3C420,267,480,277,540,240C600,203,660,117,720,101.3C780,85,840,139,900,154.7C960,171,1020,149,1080,144C1140,139,1200,149,1260,170.7C1320,192,1380,224,1410,240L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#204967" fill-opacity="1" d="M0,320L24,309.3C48,299,96,277,144,272C192,267,240,277,288,245.3C336,213,384,139,432,122.7C480,107,528,149,576,149.3C624,149,672,107,720,85.3C768,64,816,64,864,85.3C912,107,960,149,1008,160C1056,171,1104,149,1152,144C1200,139,1248,149,1296,138.7C1344,128,1392,96,1416,80L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
<div className="container">
          <div className="row justify-content-start">
            <div className="col-md-4">
              <div className="n-box2 p-5 font-bold" id="pushdown">
                <h1>Yes you are right...</h1>
                <br />
                <p>I am a .NET Buff...</p>
              </div>
            </div>
          </div>

          <div className="row pt-5 justify-content-center">
            <div className="col-md-4">
              <div>
                <img
                  src="./dotnetbot.svg"
                  alt=""
                  height="300"
                  className="w-100 px-3 py-4"
                />
              </div>
            </div>
          </div>

          <div className="row pt-5 justify-content-end">
            <div className="col-md-4">
              <div className="n-box2 p-5 font-bold" id='pushdown2'>
                <p>
                  I absolutely love C#; C# is one of the most powerful languages in the world because of its speed and multi-purpose versatility. I love how everything in the .NET framework packages together and integrates seamlessly into Visual Studio and my goal is to make software with it that contributes to people's lives or to something meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="devstack container my-5 n-box2 pt-5 pb-5">
          <div className="text-center">
            <h3 className="font-bold text-center">string[] techstack = JObject.Parse(httpResult)["<span>my_development_stack</span>"].ToObject&lt;string[]&gt;();</h3>
            <hr/>
            <img src="./two.png" height="200" alt="" />
          </div>
          <div className="row techstackitems">
            <div className="col-md-4 text-start">
              <div className="font-bold">
                <h3 className="font-bold" id='titles'>Front End</h3>
                <hr/>
                <p>.NET/C#</p>
                <p>Java</p>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
                <p>React.js</p>
                <p>Python</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="font-bold">
                <h3 className="font-bold" id='titles'>UI/Styling</h3>
                <hr/>
                <p>.NET MAUI</p>
                <p>XAML</p>
                <p>Bootstrap</p>
                <p>Font Awesome</p>
                <p>React-Icons</p>
                <p>JavaFx</p>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="font-bold">
                <h3 className="font-bold" id='titles'>Backend/DB</h3>
                <hr/>
                <p>.NET Web API/REST</p>
                <p>ASP.NET CORE/C#</p>
                <p>Entity Framework</p>
                <p>SQL/T-SQL DB</p>
                <p>Microsoft Azure</p>
                <p>Node.js/Puppeteer.js</p>
              </div>
            </div>
          </div>
        </div>
        
      <div>
        <br/>
        <h3 id='whodan' className="font-bold text-center">Who is Dan?</h3>
      <div className="who-is-dan flex-with-center" style={{ backgroundImage: `url(./newblob.svg)` }}>
        <div className="textinblob">
          <h3>Hi, Hello, Namaste</h3>
          <hr/>
          <p id='json'><pre>{JSON.stringify({
            name:"Henrik D. Wiener",
            from: "Colorado Springs, CO",
            age: null,
            gender:"Male",
          }, null, 2)}</pre></p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

{
  /* <i className="fa-solid fa-lightbulb"></i> */
}

