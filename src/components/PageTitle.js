import React from 'react';
import WhiteCard from './WhiteCard';

const PageTitle = props => {

    return(
        <WhiteCard extraClasses='page-title'>
            <h2>{props.title}</h2>
        </WhiteCard>
    );
};

export default PageTitle;
