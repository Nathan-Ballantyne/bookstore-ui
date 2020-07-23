import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const HeaderPanelLight = styled.div`
    display: inline-block;
    margin-left: 240px;
    color:  #818181;
    font-size: 30px;
    background-color: #EEEEEE;
    height: 100px;
    position: absolute;
    width: 100%;
    text-align: left;
    padding-left: 30px;
    text-decoration: none;
    z-index: 1;
`;

const HeaderPanelDark = styled.div`
    display: inline-block;
    margin-left: 240px;
    color:  white;
    font-size: 30px;
    background-color: #2D2D2D;
    height: 100px;
    position: absolute;
    width: 100%;
    text-align: left;
    padding-left: 30px;
    text-decoration: none;
    z-index: 1;
`;

const PanelText = styled.p`
    text-align: center;
    display: inline-block;
    color: #818181;
    z-index: 1;
    &:hover{
        color: blueviolet;
        cursor: pointer;
    }
`;

const topPanel = ({ dark, children }) => {

    let HeaderPanel = dark ? HeaderPanelDark : HeaderPanelLight;

    return (
        <HeaderPanel>
            <Link to='/'>
                <PanelText>
                    Bookstore
                </PanelText>
            </Link>
            <SearchBar />
            {children}
        </HeaderPanel>
    );
}

export default topPanel;