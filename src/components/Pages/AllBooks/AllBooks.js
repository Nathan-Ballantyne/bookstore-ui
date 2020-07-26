import React, { Component } from "react";
//import styled from 'styled-components';
import Book from "../../Books/Book";
import { Dashboard } from "../Dashboard/Dashboard";

// const book = {
//   id: 1,
//   title: "The Name of the Wind",
//   author: "Patrick Rothfuss",
//   releaseYear: "2008",
//   pageCount: 672,
//   cover: "location",
//   series: "Kingkiller Chronicle",
//   readStatus: "read",
//   rating: 10,
// };

// const fetchAllBooks = async () => {
//   const response = await fetch("/allBooks");
//   const body = await response.json();
//   return body;
// };

class AllBooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookRes: [],
    };
  }

  componentDidMount() {
    fetch("/api/allBooks")
      .then((res) => res.json())
      .then((res) => this.setState({ bookRes: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Dashboard dark={this.props.dark}>
        {this.state.bookRes !== [] ? this.state.bookRes.map((book) => {
          return (
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              releaseYear={book.releaseYear}
              pageCount={book.pageCount}
              cover={book.cover}
              series={book.series}
              readStatus={book.readStatus}
              rating={book.rating}
              dark={this.props.dark}
              key={book.id}
            />
          );
        }) : null}
      </Dashboard>
    );
  }
}

export default AllBooksPage;
