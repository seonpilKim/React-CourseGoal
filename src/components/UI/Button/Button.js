import React from 'react';

import './Button.css';

const Button = (props) => {

    const {insertGoal} = props;
    return (
        <button type={props.type} className="button" onClick={insertGoal}>
            {props.children}
        </button>
    );
};

export default Button;
