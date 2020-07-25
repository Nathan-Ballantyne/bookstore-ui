import React from 'react';
//import styled from 'styled-components';
import Book from '../../Books/Book';
import { Dashboard } from '../Dashboard/Dashboard';



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

const AllBooksPage = ({ dark }) => {
    return (
        <Dashboard dark={dark}>
            <Book id={book.id}
                title={book.title}
                author={book.author}
                releaseYear={book.releaseYear}
                pageCount={book.pageCount}
                cover={book.cover}
                series={book.series}
                readStatus={book.readStatus}
                rating={book.rating}
                dark={dark}
            />
        </Dashboard>
    );
};

export default AllBooksPage;