import React from "react";

import { Form } from "react-bootstrap";



function CreateChannel() {
  return (
    <div className="create-channel-container">
      <h3 className="create-channel-heading"> Create Channel</h3>
      <div className="create-channel-inner">
        <div className="user-details">
          <div className="avatar"></div>
          <div className="user-details-button">
            <div
              className="d-flex align-items-center r-mb-23"
              data-animation-in="fadeInUp"
              data-delay-in="1.2"
            >
              <a href="show-details.html" className="btn btn-hover iq-button">
                Upload Image
              </a>
            </div>
          </div>
        </div>
      <div className="channel-hr"></div>
        <div className="user-details-input">
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Channel Name</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
      </div>
           
    </div>
  );
}

export default CreateChannel;
