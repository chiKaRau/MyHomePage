import React from "react";

export default function Sidebar() {
  return (
    <div id="myScrollSpy" class="list-group sidebar">
      <a class="list-group-item list-group-item-action" href="#introduction">
        <i class="fa fa-user fa-1x" aria-hidden="true" />
      </a>
      <a class="list-group-item list-group-item-action" href="#contact">
        <i class="fa fa-phone fa-1x" aria-hidden="true" />
      </a>
      <a class="list-group-item list-group-item-action" href="#experiences">
        <i class="fa fa-briefcase fa-1x" aria-hidden="true" />
      </a>
      <a class="list-group-item list-group-item-action" href="#projects">
        <i class="fa fa-file fa-1x" aria-hidden="true" />
      </a>
      <div id="skillIcon">
        <a class="list-group-item list-group-item-action" href="#skills">
          <i class="fa fa-align-left fa-1x" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
