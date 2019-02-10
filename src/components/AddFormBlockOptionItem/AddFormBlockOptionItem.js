import React from "react";

function AddFormBlockOptionItem(props) {
    return (
        <button type="button" className="btn btn-primary" onClick={() => (props.addFormBlockOption(props.parentId))}>Add new item</button>
    );
}

export default AddFormBlockOptionItem;