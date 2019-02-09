import React from "react";

function FormBlockOptionItem(props) {
  return (
    <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">
            <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
}

export default FormBlockOptionItem;
