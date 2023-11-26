import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Home from "./page/Home";
import ForgetForm from "./components/ForgetForm";
import ProjectTopic from "./page/ProjectTopic";
import ConditionProject from "./page/ConditionoProject";
import ProjectRegistration from "./page/ProjectRegistration";
import SidebarMenu from "./components/Sidebar";
import NewFeed from "./page/NewFeed";
import SignupForm from "./components/SignupForm";
import Profile from "./page/Profile";
import Council from "./page/Council";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <SidebarMenu>
            <header>
              <Navbar />
            </header>

            <Routes>
              <Route path="/home" element={<Home />} />

              <Route path="/login" element={<LoginForm />} />
              <Route path="/forget" element={<ForgetForm />} />

              <Route path="/projecttopic" element={<ProjectTopic />} />
              <Route path="/condition" element={<ConditionProject />} />
              <Route
                path="/projectregistration"
                element={<ProjectRegistration />}
              />
              <Route path="/newfeed" element={<NewFeed />} />
              <Route path="/createaccount" element={<SignupForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/council" element={<Council />} />
            </Routes>
          </SidebarMenu>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
