import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: inline-block;
    margin-left: 240px;
    color:  #818181;
    font-size: 30px;
    background-color: black;
    height: 100px;
    position: absolute;
    width: 100%;
    opacity: 0.9;
    text-align: center;
    text-decoration: none;
    z-index: 1;
    &:hover{
        color: blueviolet;
    }
`;

function TopPanel() {
    return (
        <Main>
            Bookstore
        </Main>
    );
}

export default TopPanel;