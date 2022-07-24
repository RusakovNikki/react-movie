import React from 'react';

const Award = (props) => {

    return (
        <div className="award__wrapper">
            <p className="award__item">{props.awards}</p>
        </div>
    );
}

export default Award;
