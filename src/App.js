import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import TopPanel from './components/MainPanel/TopPanel';
import Dashboard from './components/Dashboard/Dashboard';
import styled from 'styled-components';
import items from './components/Sidebar/Items';

const Background = styled.div`
    background-image: url('https://images.unsplash.com/photo-1594794031248-c58cbc04fd13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80');
    /* background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e090c796-b870-437e-93ec-bc3ea196a4d9/d94ihvm-b4faaed4-df78-44d5-8995-5849dd6edc99.jpg/v1/fill/w_1000,h_800,q_70,strp/secluded_cave_by_ferdinandladera_d94ihvm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjAwIiwicGF0aCI6IlwvZlwvZTA5MGM3OTYtYjg3MC00MzdlLTkzZWMtYmMzZWExOTZhNGQ5XC9kOTRpaHZtLWI0ZmFhZWQ0LWRmNzgtNDRkNS04OTk1LTU4NDlkZDZlZGM5OS5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1IN406J3QjQlqYUSw9zaLfN47npfGKtboKduxLrlMz8');    */
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