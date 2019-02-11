import React from "react";

function CrudBar(props) {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">
        <i class="fas fa-angle-up" />
      </button>
      <button type="button" className="btn btn-secondary">
        <i class="fas fa-angle-down" />
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => props.deleteOption(props.parentId, props.optionId)}
      >
        <i class="fas fa-times" />
      </button>
    </div>
  );
}

export default CrudBar;
