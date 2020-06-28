import React from "react";
import {
  programming_languages,
  libraries,
  frameworks,
  databases,
  tools,
  knowledges
} from "../data/skills";

export default function Skills() {
  let displayProgramming_language = programming_languages.map((e, index) => (
    <div class="skillBox p-2 m-2 border" key={index++}>
      #{e}
    </div>
  ));

  let displayLibraries = libraries.map((e, index) => (
    <div class="skillBox p-2 m-2 border" key={index++}>
      #{e}
    </div>
  ));

  let displayFrameworks = frameworks.map((e, index) => (
    <div class="skillBox p-2 m-2 border" key={index++}>
      #{e}
    </div>
  ));

  let displayDatabases = databases.map((e, index) => (
    <div class="skillBox p-2 m-2 border" key={index++}>
      #{e}
    </div>
  ));

  let displayKnowledges = knowledges.map((e, index) => (
    <div class="skillBox p-2 m-2 border" key={index++}>
      #{e}
    </div>
  ));

  let displayTools = tools.map((e, index) => (
    <div class="skillBox p-2 m-2 border" key={index++}>
      #{e}
    </div>
  ));

  return (
    <div id="skills">
      <hr class="hr-text p-3" data-content="Skills" />
      <div id="list-item-5" class="container p-3">
        <div class="d-flex flex-row flex-wrap justify-content-start">
          <div class="skillTitles">
            <h6>Programming Language</h6>
          </div>
          {displayProgramming_language}

          <div class="skillTitles">
            <h6>Libraries</h6>
          </div>
          {displayLibraries}

          <div class="skillTitles">
            <h6>Frameworks</h6>
          </div>
          {displayFrameworks}

          <div class="skillTitles">
            <h6>Databases</h6>
          </div>
          {displayDatabases}

          <div class="skillTitles">
            <h6>Knowledges</h6>
          </div>
          {displayKnowledges}

          <div class="skillTitles">
            <h6>Tools</h6>
          </div>
          {displayTools}
        </div>
      </div>
    </div>
  );
}
