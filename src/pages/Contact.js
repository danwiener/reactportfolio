import React from "react";
import Header from ".././components/Header";
export default function Contact() {
  return (
    <div>
      <Header/>
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5 contactimg">
            <img src="./contactme.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <div id='dotnetbot' className="contact-form m-2 p-5">
              <h3>Contact US</h3>
              <input type="text" className="form-control" placeholder="Name"/>
              <input type="text" className="form-control" placeholder="Email"/>
              <textarea className="form-control" rows={3} defaultValue={""}/>
              <a href="mailto:henrik.d.wiener@gmail.com">
              <button className="primary-button2 mt-3">SUBMIT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
