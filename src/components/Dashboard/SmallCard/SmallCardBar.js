import React from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';
import bookIcon from '../../../assets/images/book-icon.png';
import swordIcon from '../../../assets/images/sword-icon.png';
import scienceIcon from '../../../assets/images/science-icon.png';

const Bar = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    z-index: 1;
    width: 100%
`;

const cardList = [
    {title: 'Books', details: 'List of all books', icon: bookIcon},
    {title: 'Fantasy', details: 'List of all Fantasy books', icon: swordIcon},
    {title: 'Science', details: 'List of all Science books', icon: scienceIcon},
];

const smallCardBar = ({dark}) => {
    return (
        <Bar>
            {cardList.map(card =>{
                return <SmallCard key={card.title} title={card.title} details={card.details} icon={card.icon} dark={dark} />
            })}
        </Bar>
    );
};

export default smallCardBar;