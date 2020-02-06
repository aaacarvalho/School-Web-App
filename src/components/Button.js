import React from 'react';

const Button = props => {    

    const doAction = () => {
        if (props.Action) {
            props.Action();
        }
    };

    return(
        <button className='button button--send' onClick={doAction}>
            {props.text}
        </button>
    );
}

export default Button;
