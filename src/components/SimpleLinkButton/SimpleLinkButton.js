import React from 'react';
import { Link } from 'react-router-dom';

const SimpleLinkButton = props => {
    const className = props.className || 'btn btn-primary';
    const title = props.title || 'Click here!';
    const toLink = props.toLink || '/';
    const style = props.style || {};

    return (
        <Link className={className} style={style} to={toLink}>
            {title}
        </Link>
    );
};

export default SimpleLinkButton;
