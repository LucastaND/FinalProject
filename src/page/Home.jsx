import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./home.css";

const Home = () => {
  const [action, setAction] = useState("Overview");

  return (
    <div className="wrapper-home">
      <div className="header-home">
        <div className="overview-inforlecturer">
          <button
            className={action === "Lecturer" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Overview");
            }}
          >
            <p> OverView</p>
          </button>
          <button
            className={action === "Overview" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Lecturer");
            }}
          >
            <p> Lecturer</p>
          </button>
        </div>
      </div>
      <h2 className="title-page">{action}</h2>
      {action === "Lecturer" ? (
        <div></div>
      ) : (
        <div className="orview-container">
          <CardGroup className="oviewcard-container">
            <div className="orview-card">
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>
                    <p className="card-title">Card title</p>
                  </Card.Title>
                  <Card.Text>overview</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
            <div className="orview-card">
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>
                    <p className="card-title">Card title </p>
                  </Card.Title>
                  <Card.Text>overview</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>

            <div className="orview-card">
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>
                    <p className="card-title">Card title </p>
                  </Card.Title>
                  <Card.Text>overview</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
          </CardGroup>
        </div>
      )}

      {action === "Overview" ? (
        <div></div>
      ) : (
        <div className="inforlect-container">
          <CardGroup className="lectcard-container">
            <div className="lect-card">
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>
                    <p className="card-title">Card title </p>
                  </Card.Title>
                  <Card.Text>overview</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
            <div className="lect-card">
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>
                    <p className="card-title">Card title </p>
                  </Card.Title>
                  <Card.Text>overview</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
            <div className="lect-card">
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>
                    <p className="card-title">Card title </p>
                  </Card.Title>
                  <Card.Text>overview</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
          </CardGroup>
        </div>
      )}
    </div>
  );
};
export default Home;
