import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import TopPanel from './components/MainPanel/TopPanel';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import AllBooksPage from './components/Pages/AllBooks/AllBooks';
import styled from 'styled-components';
import items from './components/Sidebar/Items';

const Background = styled.div`
    /* background-image: url('https://images.unsplash.com/photo-1594794031248-c58cbc04fd13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'); */
    background-image: url('https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');   
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    &::after {
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      background: black;
      opacity: 0;
    }
`;


class App extends Component {

  state = {
    dark: false,
  };

  toggleDarkMode = async () => {
    this.setState({ dark: !this.state.dark });
  }

  render() {

    return (
      <Router>
        <Background />
        <Sidebar items={items} />
        <TopPanel dark={this.state.dark} click={this.toggleDarkMode}/>
        <Switch>
          <Route path="/all">
            <AllBooksPage dark={this.state.dark} />
          </Route>
          <Route path="/">
            <Dashboard 
            dark={this.state.dark} 
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App