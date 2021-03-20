import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-transparent bg-dark ">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul id="myScrollSpy" class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#introduction">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experiences">
              Experiences
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
