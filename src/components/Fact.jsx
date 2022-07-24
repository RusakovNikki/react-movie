import React from 'react';

const Fact = (props) => {

    return (
        <div className="fact__wrapper">
            <p className="fact__item">{props.facts}</p>
        </div>
    );
}

export default Fact;

