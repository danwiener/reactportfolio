import React from "react";
import Header from ".././components/Header";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {name, email, message} = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://buttonhookfantasyfootballapi.azurewebsites.net/api/sendresumeemail", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details),
    });
    setStatus("SUBMIT");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contactclass">
      <Header/>
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5 contactimg">
            <img src="./contactme.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
            <div id='dotnetbot' className="contact-form m-2 p-5">
              <h3>Contact US</h3>
              <input type="text" id='name' className="form-control" placeholder="Name"/>
              <input type="text" id='email' className="form-control" placeholder="Email"/>
              <textarea className="form-control" id='message' rows={3} defaultValue={""}/>
              <a href="mailto:henrik.d.wiener@gmail.com">
              <button type="submit" className="primary-button2 mt-3">{status}</button>
              </a>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
