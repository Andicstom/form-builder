import React from 'react';

function CrudBar(props) {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => props.moveItemUp(props.id)}
                disabled={props.index === 0}
            >
                <i className="fas fa-angle-up" />
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                    props.moveItemDown(props.id)
                }
                disabled={props.index === props.listSize - 1}
            >
                <i className="fas fa-angle-down" />
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                    props.deleteItem(props.id)
                }
            >
                <i className="fas fa-times" />
            </button>
        </div>
    );
}

export default CrudBar;
