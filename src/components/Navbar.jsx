import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/home">
        <h2 className="navbar-logo">
          <ion-icon name="folder"></ion-icon> Final Project Management
        </h2>
      </Link>

      <Nav className="navbar-2">
        <Link to="/login">
          <div className="icon-user">
            <h4>
              <ion-icon name="person-add-sharp"></ion-icon>
            </h4>
          </div>
        </Link>
      </Nav>

      <Dropdown className="navbar-2-login">
        <Dropdown.Toggle>
          <div className="icon-user">
            <ion-icon name="people-circle-outline"></ion-icon>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/profile">
              Profile <ion-icon name="person-circle-outline"></ion-icon>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            Logout<ion-icon name="log-out-outline"></ion-icon>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};
export default NavBar;
