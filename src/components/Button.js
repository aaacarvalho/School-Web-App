import React from 'react';
import InputContainer from './InputContainer';

const Button = props => {    

    const doAction = () => {
        if (props.Action) {
            props.Action();
        }
    };

    return(
        <InputContainer>
            <button className='button button--send' onClick={doAction}>
                {props.text}
            </button>
        </InputContainer>
    );
}

export default Button;
