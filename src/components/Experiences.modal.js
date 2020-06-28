import React from "react";

export default function modal_button(props) {
  return (
    <div>
      <div class="border exp-box m-2">
        <img src={props.data.logo} alt={props.data.company} />
        <div class="p-2">
          <i
            data-toggle="modal"
            data-target={`#myModal-${props.data.id}`}
            class="fa fa-search fa-2x"
            aria-hidden="true"
          />
        </div>
      </div>
      <ModalContent data={props.data} />
    </div>
  );
}

function ModalContent(props) {
  let displayDuties = props.data.responsibilities.map((e, index) => (
    <li key={index++}>{e}</li>
  ));

  let displaySkills = props.data.skills.map((e, index) => (
    <div key={index++} class="p-2 m-2 border">
      <p>#{e}</p>
    </div>
  ));

  return (
    <div class="modal fade" id={`myModal-${props.data.id}`}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{props.data.company}</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div class="modal-body">
            <h5>
              {props.data.job_title} ({props.data.date.start} -{" "}
              {props.data.date.end})
            </h5>
            <h5>My Duties</h5>
            <ul>{displayDuties}</ul>
            <h5>Used Skills</h5>
            <div class="d-flex flex-wrap flex-row justify-content-start">
              {displaySkills}
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
