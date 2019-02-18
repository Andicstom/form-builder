import React from 'react';

function SimpleInputContent(props) {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                >
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                    >
                        <i
                            className={
                                props.type === 'text'
                                    ? 'fas fa-font'
                                    : 'far fa-calendar-alt'
                            }
                        />
                    </span>
                </span>
            </div>
            <input
                type="text"
                id="answer"
                disabled={props.disabled}
                placeholder=""
                className="form-control"
                value="answer"
            />
        </div>
    );
}

export default SimpleInputContent;
