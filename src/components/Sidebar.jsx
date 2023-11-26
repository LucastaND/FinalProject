import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const SidebarMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <ion-icon name="home-outline"></ion-icon>,
    },
    {
      path: "/newfeed",
      name: "New Feed",
      icon: <ion-icon name="book-outline"></ion-icon>,
    },
    {
      path: "/projecttopic",
      name: "Project Topic",
      icon: <ion-icon name="folder-open-outline"></ion-icon>,
    },
    {
      path: "/projectregistration",
      name: "Project Registration",
      icon: <ion-icon name="add-circle-outline"></ion-icon>,
    },
    {
      path: "/condition",
      name: "Condition",
      icon: <ion-icon name="help-circle-outline"></ion-icon>,
    },
    {
      path: "/concil",
      name: "Concil",
      icon: <ion-icon name="albums-outline"></ion-icon>,
    },
  ];

  return (
    <div className="section-sidebar">
      <div className="container">
        <div
          style={{ width: isOpen ? "220px" : "70px" }}
          className="sidebarmenu"
        >
          <div className="top_section">
            <h2
              style={{ display: isOpen ? "block" : "none" }}
              className="title"
            >
              Menu
            </h2>
            <div
              style={{ marginLeft: isOpen ? "70px" : "0px" }}
              className="logo-sidebar"
            >
              <ion-icon name="grid-outline" onClick={toggle}></ion-icon>
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main> {children}</main>
      </div>
    </div>
  );
};

export default SidebarMenu;
