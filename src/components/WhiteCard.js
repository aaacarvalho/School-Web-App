import React from 'react';

const WhiteCard = props => {
    
    const classes = props.extraClasses ? props.extraClasses : '';

    return(
        <div className = {'white-card ' + classes}>
            {props.children}
        </div>
    );
}
export default WhiteCard;
