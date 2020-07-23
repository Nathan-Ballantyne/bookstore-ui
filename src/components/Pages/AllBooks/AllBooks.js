import React from 'react';
import styled from 'styled-components';
import Book from '../Book';

const AllBooksBoard = styled.div`
    margin-left: 240px;
    margin-top: 100px;
    background-color: #EEEEEE;
    z-index: 1;
    opacity: 1;
    height: 100%;
    width: 100%;
    color: orange;
    font-size: 30px;
    position: absolute;
`;



const book = {
    id: 1,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    releaseYear: '2008',
    pageCount: 672,
    cover: 'location',
    series: 'Kingkiller Chronicle',
    readStatus: 'read',
    rating: 10,
};

const AllBooksPage = () => {
    return (
        <AllBooksBoard>
            <Book id={book.id}
                title={book.title}
                author={book.author}
                releaseYear={book.releaseYear}
                pageCount={book.pageCount}
                cover={book.cover}
                series={book.series}
                readStatus={book.readStatus}
                rating={book.rating}
            />
        </AllBooksBoard>
    );
};

export default AllBooksPage;