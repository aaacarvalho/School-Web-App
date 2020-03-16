import React from 'react';

const List = props => {
    
    const extraClasses = props.extraClasses ? props.extraClasses : '';
    
    return(
        <ul className={`list ${extraClasses}`}>
            {props.children}
        </ul>
    );
};

export default List;
