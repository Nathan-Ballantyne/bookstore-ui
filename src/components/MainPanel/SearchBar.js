import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: ${props => props.dark ? '#29303B' : '#FFFFFF'};
    color: ${props => props.dark ? 'white' : 'grey'};
    border-radius: 25px;
    border: none;
    box-shadow: 3px 3px 3px 3px ${props => props.dark ? 'black' : 'grey'}; 
    height: 25px;
    width: 200px;
    margin-bottom: 10px;
    margin-left: 250px;
    text-align: center;
    &::placeholder {
        color: ${props => props.dark ? 'white' : 'grey'};
    }
`;

Input.defaultProps = {
    type: 'text',
    placeholder: 'Search'
}

const searchBar = ({dark = false}) => {
    return (
        <Input dark={dark} />
    );
};

export default searchBar;