import React from 'react';

function AddFormBlockOptionItem(props) {
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.addFormBlockOption(props.parentId)}
        >
            <i className="fas fa-plus" /> option
        </button>
    );
}

export default AddFormBlockOptionItem;
