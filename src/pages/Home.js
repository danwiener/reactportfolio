import React from "react";
import { json } from "react-router-dom";
import Header from ".././components/Header";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="parent-container">
      <Header />

      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url(./low-poly-grid-haikei.svg)` }}
      >
        <div>
          <h1>DAN WIENER</h1>

          <div className="intro-content d-flex justify-content-between">
            <p id="intro-p">
              .NET Stack <br /> Dedicated , Software Engineer
            </p>
            <button className="primary-button font-bold">GET STARTED</button>
          </div>
        </div>
      </div>

      <Carousel />

      <div
        className="bgtechstack"
        id="techstackpage justify-content-start"
        style={{ backgroundImage: `url(./wave2.svg)` }}
      >
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
              <div className="n-box2 p-5 font-bold">
                <p>
                  C# is one of the highest-ranked programming langauges because
                  of its speed, ease of use, multi-purpose versatility, and
                  seamless integration among the powerful .NET framework. Main
                  Use Cases: Any Kind of Software Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="devstack container my-5 n-box2 pt-5 pb-5">
          <div className="text-center">
            <h3 className="font-bold text-center">My Development Stack</h3>
            <hr/>
            <img src="./two.png" height="200" alt="" />
          </div>
          <div className="row">
            <div className="col-md-4 text-start">
              <div className="font-bold">
                <h3 className="font-bold">Front End</h3>
                <hr/>
                <p>ASP.NET CORE/C#</p>
                <p>Java</p>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Python</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="font-bold">
                <h3 className="font-bold">UI/Styling</h3>
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
                <h3 className="font-bold">Backend/DB</h3>
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
        <h3 id='whodan' className="font-bold text-center">Who is dan</h3>
      <div className="who-is-dan flex-with-center" style={{ backgroundImage: `url(./blob.svg)`}}>
        <div className="textinblob">
          <h3>Hi, Hello, Namaste</h3>
          <hr/>
          <p><pre>{JSON.stringify({
            name:"Henrik D. Wiener",
            from: "Colorado Springs, CO",
            age: null,
            gender:"Male"
          }, null, 2)}</pre></p>
        </div>
      </div>
      </div>
      <div className="finalimage" style={{ backgroundImage: `url(./bottomwave.svg)`}}></div>
      </div>
    </div>
  );
}

{
  /* <i className="fa-solid fa-lightbulb"></i> */
}

{
  /* <div className="colz-icon flex-with-center">
<a href="https://github.com/danwiener">
  <i className="fa-brands fa-square-github"></i>
</a>
<a href="https://www.linkedin.com/in/henrikwiener/">
<i className="fa-brands fa-linkedin"></i>
</a>
</div> */
}
