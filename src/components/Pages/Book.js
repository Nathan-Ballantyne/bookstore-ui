import React from 'react';
import styled from 'styled-components';

const BookContainer = styled.div`
width: 250px;
height: 340px;
margin-left: 200px;
margin-top: 20px;
background-color: white;
border-radius: 25px;
text-align: center;
position: relative;
margin-left: 20px;
box-shadow: 3px 3px 3px 3px grey; 
`;

const P = styled.p`
    font-size: 12px;
    color: #f952ee;
`;


const book = ({id, title, author, releaseYear, pageCount, cover, series, readStatus, rating}) => {
    return(
        <BookContainer>
            
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