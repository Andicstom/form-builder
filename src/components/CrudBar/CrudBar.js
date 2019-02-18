import React from 'react';

function CrudBar(props) {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => props.moveOptionUp(props.parentId, props.index)}
                disabled={props.index === 0}
            >
                <i className="fas fa-angle-up" />
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                    props.moveOptionDown(props.parentId, props.index)
                }
                disabled={props.index === props.optionsSize - 1}
            >
                <i className="fas fa-angle-down" />
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                    props.deleteOption(props.parentId, props.optionId)
                }
            >
                <i className="fas fa-times" />
            </button>
        </div>
    );
}

export default CrudBar;
