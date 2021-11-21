import React from "react";
import {Card} from 'react-bootstrap';

function New() {
  return (
<>
    <div className="container new-heading">
        <h3 className="this-month">This Month</h3>
    </div>
    <div className="container new-container">

      <Card style={{ width: "18rem" , color: "white", backgroundColor: "black"}}>
        <Card.Img variant="top" src="https://data.whicdn.com/images/341417835/original.jpg" />
        <Card.Body>
          <Card.Title>Dwight with Pumpkinhead</Card.Title>
          <Card.Text>
            <ul className="card-text-list">
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>

            </ul>
          </Card.Text>
       
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" , color: "white", backgroundColor: "black"}}>
        <Card.Img variant="top" src="https://data.whicdn.com/images/341417835/original.jpg" />
        <Card.Body>
          <Card.Title>Dwight with Pumpkinhead</Card.Title>
          <Card.Text>
            <ul className="card-text-list">
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>

            </ul>
          </Card.Text>
       
        </Card.Body>
      </Card>



      <Card style={{ width: "18rem" , color: "white", backgroundColor: "black"}}>
        <Card.Img variant="top" src="https://data.whicdn.com/images/341417835/original.jpg" />
        <Card.Body>
          <Card.Title>Dwight with Pumpkinhead</Card.Title>
          <Card.Text>
            <ul className="card-text-list">
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>

            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" , color: "white", backgroundColor: "black"}}>
        <Card.Img variant="top" src="https://data.whicdn.com/images/341417835/original.jpg" />
        <Card.Body>
          <Card.Title className="card-title">Dwight with Pumpkinhead</Card.Title>
          <Card.Text>
            <ul className="card-text-list">
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>
                <li>Action</li>
                <li>Thriller</li>
                <li>Suspense</li>

            </ul>
          </Card.Text>

        </Card.Body>
      </Card>
    </div>

    </>
  );
}

export default New;
