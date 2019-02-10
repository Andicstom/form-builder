import React from "react";

function CrudBar(props) {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">
        Up
      </button>
      <button type="button" className="btn btn-secondary">
        Down
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => (props.deleteOption(props.parentId, props.optionId))}>
        Delete
      </button>
    </div>
  );
}

export default CrudBar;
