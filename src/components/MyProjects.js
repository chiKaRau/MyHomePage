import React from "react";

import projectImages from "../data/projectImages";

export default function MyProjects() {
  let displayImage = projectImages.map(e => (
    <div key={e.id}>
      <img id={`p${e.id}`} src={e.image} alt={e.alt} />
    </div>
  ));

  return (
    <div id="projects">
      <hr class="hr-text p-3" data-content="Projects" />
      <div id="list-item-4" class="container">
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div class="p-5">{displayImage}</div>
          <div id="ptextContainer">
            <div id="ptextBackground" />
            <a id="ptext" href="http://chikarau.github.io/MyProjectPage">
              Check out my latest Projects!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
