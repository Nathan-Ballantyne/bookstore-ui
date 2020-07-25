import React from 'react';
import styled from 'styled-components';

const BookContainer = styled.div`
    width: 250px;
    height: 340px;
    margin: 20px 0px 20px 200px;
    background-color: ${props => props.dark ? '#29303B' : '#FFFFFF'};
    border-radius: 25px;
    transition: transform .3s, 500ms linear;
    text-align: center;
    position: relative;
    margin-left: 20px;
    box-shadow: 3px 3px 3px 3px ${props => props.dark ? 'black' : 'grey'}; 
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

const P = styled.p`
    font-size: 12px;
    color: #f952ee;
`;


const book = ({id, title, author, releaseYear, pageCount, cover, series, readStatus, rating, dark = false}) => {
    return(
        <BookContainer dark={dark}>
            
                <P>ID:           {id}</P>
                <P>Title:        {title}</P>
                <P>Author:       {author}</P>
                <P>Release Year: {releaseYear}</P>
                <P>Page Count:   {pageCount}</P>
                <P>Cover:        {cover}</P>
                <P>Series:       {series}</P>
                <P>Read Status:  {readStatus}</P>
                <P>Rating:       {rating}</P>
            
        </BookContainer>
    );
};

export default book;