import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const HeaderPanel = styled.div`
    display: inline-block;
    margin-left: 240px;
    color:  ${props => props.dark ? 'white' : '#818181' };
    font-size: 30px;
    background-color: ${props => props.dark ? '#2D2D2D' : '#EEEEEE' };
    height: 100px;
    position: absolute;
    width: 100%;
    text-align: left;
    padding-left: 30px;
    text-decoration: none;
    transition: 500ms linear;
    z-index: 1;
`;

const PanelText = styled.p`
    text-align: center;
    display: inline-block;
    color: #818181;
    z-index: 1;
    &:hover{
        color: #4AC694;
        cursor: pointer;
    }
`;

const DarkModeButton = styled.button`
    margin-left: 100px;
    margin-bottom: 100px;
    border-radius: 25px;
    background-color: ${props => props.dark ? '#818181' : 'black' };
    color: ${props => props.dark ? 'aqua' : '#4AC694' };
    padding: 5px 5px 5px 5px;
    border: none;
    box-shadow: 2px 2px 2px 2px ${props => props.dark ? 'black' : 'grey' };
  `;

const topPanel = ({ dark, click }) => {

    let mode = dark ? 'Light Mode' : 'Dark Mode'

    return (
        <HeaderPanel dark={dark}>
            <Link to='/'>
                <PanelText>
                    Bookstore
                </PanelText>
            </Link>
            <SearchBar dark={dark} />
            <DarkModeButton dark={dark} onClick={click}>
                {mode}
            </DarkModeButton>
        </HeaderPanel>
    );
}

export default topPanel;