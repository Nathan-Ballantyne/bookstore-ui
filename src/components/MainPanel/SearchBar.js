import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 25px;
    border: none;
    box-shadow: 3px 3px 3px 3px grey; 
    height: 25px;
    width: 200px;
    margin-bottom: 10px;
    margin-left: 250px;
    text-align: center;
`;

Input.defaultProps = {
    type: 'text',
    placeholder: 'Search'
}

const searchBar = () => {
    return (
        <Input />
    );
};

export default searchBar;