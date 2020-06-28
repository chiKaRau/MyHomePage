import React from "react";
import data from "../data/experiences";
import ExpModal from "./Experiences.modal";

export default function Experiences() {
  let displayExps = data.map(e => <ExpModal key={e.id} data={e} />);

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
