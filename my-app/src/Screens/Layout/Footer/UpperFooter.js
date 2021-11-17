import React from "react";
import { Container } from "react-bootstrap";

function UpperFooter() {
  return (
    <Container>
      <div className="container-fluid upper-footer-container">
        <div className="logo-div">
          <img
            className="footer-logo"
            src="http://multitude.io/frontend/images/logo.png"
            alt="multimedia"
          />
        </div>

        <div>
          <ul>
            <li className="list-items-left">List</li>
            <li className="list-items-left">Horror</li>
            <li className="list-items-left">Drama</li>
            <li className="list-items-left">List</li>
            <li className="list-items-left">Horror</li>
            <li className="list-items-left">Drama</li>
          </ul>
        </div>

        <div className="list-items-right">
          <li className="list-items-right">List</li>
          <li className="list-items-right">Horror</li>
          <li className="list-items-right">Drama</li>
          <li className="list-items-right">List</li>
          <li className="list-items-right">Horror</li>
          <li className="list-items-right">Drama</li>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div class="text-left">
            <div class="textwidget">
              <h6 class="footer-link-title">Multitude App</h6>
              <div class="footer-buttons">
               <button type="button" className="btns-footer"> App Store</button>
                <br />
                <button type="button" className="btns-footer"> App Store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </Container>
  );
}

export default UpperFooter;
