import React from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';
import bookIcon from '../../../../assets/icons/book-icon.png';
import swordIcon from '../../../../assets/icons/sword-icon.png';
import scienceIcon from '../../../../assets/icons/science-icon.png';

const Bar = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    z-index: 2;
    width: 100%
`;

const cardList = [
    {title: 'Books', details: 'List of all books', icon: bookIcon, link: '/all'},
    {title: 'Fantasy', details: 'List of all Fantasy books', icon: swordIcon, link: '/fantasy'},
    {title: 'Science', details: 'List of all Science books', icon: scienceIcon, link: '/science'},
];

const smallCardBar = ({dark}) => {
    return (
        <Bar>
            {cardList.map(card =>{
                return (
                    <SmallCard 
                    key={card.title} 
                    title={card.title} 
                    details={card.details} 
                    icon={card.icon} 
                    dark={dark} 
                    link={card.link}
                    />
                    );
            })}
        </Bar>
    );
};

export default smallCardBar;