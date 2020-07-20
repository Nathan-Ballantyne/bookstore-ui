import React from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';
import bookIcon from '../../assets/images/book-icon.png';
import swordIcon from '../../assets/images/sword-icon.png';

const Bar = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    z-index: 1;
    width: 100%
`;

const smallCardBar = () => {
    return (
        <Bar>
            <SmallCard title="Books" details="List of all books" iconPath={bookIcon}/>
           
            <SmallCard title="Fantasy" details="List of all Fantasy books" iconPath={swordIcon}/>
        </Bar>
    );
}

export default smallCardBar;