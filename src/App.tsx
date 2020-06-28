import React from "react";

//Styles & Scripts
import "./styles.scss";
import "./scripts/sidebar.script";
import "./scripts/navbar.script";
import "./scripts/myprojects.script";
import "./scripts/splashscreen.script";
import "./scripts/skills.script";

//Section Components
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  return (
    <div data-spy="scroll" data-target="#myScrollSpy" data-offset="0" id="App">
      <div id="UpperParts">
        <Navbar />
        <Introduction />
        <Contact />
      </div>
      <Experiences />
      <MyProjects />
      <Skills />
      <Sidebar />
      <Footer />
      <SplashScreen />
    </div>
  );
}
