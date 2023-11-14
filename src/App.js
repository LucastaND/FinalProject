import { Component, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Home from "./page/Home";
import ForgetForm from "./components/ForgetForm";
import ProjectTopic from "./page/ProjectTopic";
import Condition from "./page/Condition";
import ProjectRegistration from "./page/ProjectRegistration";
import SidebarMenu from "./components/Sidebar";
import NewFeed from "./page/NewFeed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <SidebarMenu>
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/forget" element={<ForgetForm />} />
            <Route path="/projecttopic" element={<ProjectTopic />} />
            <Route path="/condition" element={<Condition />} />
            <Route
              path="/projectregistration"
              element={<ProjectRegistration />}
            />
            <Route path="/newfeed" element={<NewFeed />} />
          </Routes>
        </SidebarMenu>
      </BrowserRouter>
    </div>
  );
}

export default App;
