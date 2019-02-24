import React from 'react';
import { Link } from 'react-router-dom';

const SimpleLinkButton = props => {
    const className = props.className || 'btn btn-primary';
    const title = props.title || 'Click here!';
    const toLink = props.toLink || '/';

    return (
        <Link className={className} to={toLink}>
            {title}
        </Link>
    );
};

export default SimpleLinkButton;
