import React from "react";

function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer">
        <div
          className="finalimage"
          style={{ backgroundImage: `url(./bottomwave.svg)` }}
        ></div>

        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div className="div">
              <p>Designed and Developed By</p>
              <hr />
              <div className="colz-icon flex-with-center">
              <a href="https://www.henrikwiener.com/">
              <img
                  src="./danwienerlogo.png"
                  alt=""
                  className="danwienerlogoimg"
                  id='danwienerlogoimgid'
                />
                </a>
                <a href="https://github.com/danwiener">
                  <i className="fa-brands fa-square-github" id='githublogo'></i>
                </a>
                <a href="https://www.linkedin.com/in/henrikwiener/">
                  <i className="fa-brands fa-linkedin" id='linkedinlogo'></i>
                </a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
