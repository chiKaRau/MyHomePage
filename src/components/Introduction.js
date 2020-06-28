import React from "react";

export default function Introduction() {
  return (
    <div id="introduction">
      <div id="list-item-1" class="container">
        <div class="row">
          <div class="placeholder1" />
          <div class="col-sm-12">
            <h1 id="myName">KaChiLau</h1>

            <div class="d-flex flex-row flex-wrap justify-content-start">
              <div class="titleBox border p-2 m-2">#Web Developer</div>
              <div class="titleBox border p-2 m-2">#Frontend Developer</div>
              <div class="titleBox border p-2 m-2"> #Backend Developer</div>
            </div>

            <p class="p-2" id="myIntro">
              I am passionate to create different kind of great applications for
              web and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
