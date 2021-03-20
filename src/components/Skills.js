import React, { useState, useEffect } from "react";

import axios from "axios";

const server_domain = "https://MyProjectPage.chikarau.repl.co";

export default function Skills() {
  const [programming_languages, setProgramming_languages] = useState([]);
  const [libraries, setLibraries] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [databases, setDatabases] = useState([]);
  const [tools, setTools] = useState([]);
  const [knowledges, setKnowledges] = useState([]);

  const _getMySkills = async () => {
    try {
      let { data } = await fetchMySkills();
      setProgramming_languages(data.programming_languages);
      setLibraries(data.libraries);
      setFrameworks(data.frameworks);
      setDatabases(data.databases);
      setTools(data.tools);
      setKnowledges(data.knowledges);
    } catch (e) {
      console.log("_getRoomsList ERROR");
      console.log(e);
    }
  };

  useEffect(() => {
    _getMySkills();
  }, []);

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

function fetchMySkills() {
  return axios
    .get(server_domain + "/api/getMySkillsData")
    .then((res) => res.data);
}
