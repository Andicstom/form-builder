import React from 'react';

const SimpleButton = props => {
    const className = props.className || 'btn btn-primary';
    const title = props.title || 'Click here!';
    const style = props.style || {};
    const buttonProps = props.buttonProps || {};

    return (
        <button
            type="button"
            className={className}
            style={style}
            onClick={() => props.onClick("resetFormModal")}
            {...buttonProps}
        >
            {title}
        </button>
    );
};

export default SimpleButton;
