import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import TopPanel from './components/MainPanel/TopPanel';
import Dashboard from './components/Dashboard/Dashboard';
import styled from 'styled-components';
import items from './components/Sidebar/Items';

const Background = styled.div`
    background-image: url('https://images.unsplash.com/photo-1594794031248-c58cbc04fd13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80');
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
      opacity: 0.6;
    }
`;


function App() {
  return (
    <>
      <Background/>
      <Sidebar items={items} />
      <TopPanel />
      <Dashboard/>
    </>
  )
}

export default App