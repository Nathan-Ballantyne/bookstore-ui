import React from 'react';
import styled from 'styled-components';

const BookCover = styled.img`
    width: 250px;
    height: 340px;
    margin: 20px 0px 20px 200px;
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
    color: ${props => props.dark ? 'grey' : "black"};
`;


const book = ({id, title, author, releaseYear, pageCount, cover, series, readStatus, rating, dark = false}) => {

    BookCover.defaultProps = {
        src: cover
    };

    return(
        <div style={{textAlign: "center", fontSize: "20px"}}>
            <BookCover dark={dark} />
            <P dark={dark}>{title}</P>
            <P dark={dark}>{author}</P>
        </div>
    );
};

export default book;