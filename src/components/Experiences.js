import React, { useState, useEffect } from "react";

import axios from "axios";

import ExpModal from "./Experiences.modal";

const server_domain = "https://MyProjectPage.chikarau.repl.co";


export default function Experiences() {
  const [exps, setExps] = useState([]);

  const _getExps = async () => {
    try {
      let { data } = await fetchMySkills();
      setExps(data.exps);
    } catch (e) {
      console.log("_getRoomsList ERROR");
      console.log(e);
    }
  };

  useEffect(() => {
    _getExps();
  }, []);

  let displayExps = exps.map((e) => <ExpModal key={e.id} data={e} />);

  return (
    <div id="experiences">
      <hr class="hr-text p-3" data-content="Experiences" />
      <div id="list-item-3" className="container">
        <div class="d-flex flex-row flex-wrap justify-content-center">
          {displayExps}
        </div>
      </div>
      <div class="placeholder3" />
    </div>
  );
}

function fetchMySkills() {
  return axios.get(server_domain + "/api/getExps").then((res) => res.data);
}
