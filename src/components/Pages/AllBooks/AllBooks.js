import React, { Component } from "react";
//import styled from 'styled-components';
import Book from "../../Books/Book";
import { Dashboard } from "../Dashboard/Dashboard";
import NOTW from "../../../assets/images/name_of_the_wind_cover.jpg";
import Oathbringer from "../../../assets/images/oathbringer_cover.jpg";
import SlowRegard from "../../../assets/images/the_slow_regard_of_silent_things_cover.jpg";
import WayOfKings from "../../../assets/images/the_way_of_kings_cover.png";
import WiseMan from "../../../assets/images/the_wise_mans_fear_cover.jpg";
import Words from "../../../assets/images/words_of_radiance_cover.jpg";

class AllBooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookRes: [],
      coverArt: [
          {cover: NOTW},
          {cover: WiseMan},
          {cover: SlowRegard},
          {cover: WayOfKings},
          {cover: Words},
          {cover: Oathbringer},
      ]
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
              releaseYear={book.release_year}
              pageCount={book.page_count}
              cover={this.state.coverArt[book.id-1].cover}
              series={book.series}
              readStatus={book.read_status}
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
