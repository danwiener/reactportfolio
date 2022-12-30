import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div
          className="finalimage"
          style={{ backgroundImage: `url(./bottomwave.svg)` }}
        ></div>

        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div className="div">
                <p>Designed and Developed By</p>
                <hr/>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
