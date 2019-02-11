import React from "react";

function AddFormBlockOptionItem(props) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => props.addFormBlockOption(props.parentId)}
    >
      <i class="fas fa-plus" /> option
    </button>
  );
}

export default AddFormBlockOptionItem;
