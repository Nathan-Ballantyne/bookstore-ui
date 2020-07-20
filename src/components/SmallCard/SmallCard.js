import React from 'react';
import styled from 'styled-components';

const Card = styled.button`
    background-color: #FFFFFF;
    border: none;
    height: 150px;
    width: 350px;
    font-size: 25px;
    color: grey;
    z-index: 1;
    border-radius: 25px;
    text-align: center;
    position: relative;
    margin-left: 20px;
    box-shadow: 3px 3px 3px 3px grey; 
    float:left;
    transition: top ease 0.5s;
    &:hover{
        top: -6px;
        left: -2px;
        cursor: pointer;
    }
`;

const test = () => alert('test');

Card.defaultProps = {
    onClick: test
}

const Detail = styled.p`
    color: grey;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    text-align: left;
    padding-left: 20px;
    padding-top: 15px;
    font-size: 15px;
`;

const Icon = styled.img`
    margin-top: 30px;
    margin-left: 10px;
    box-shadow: 3px 3px 3px 3px #EEEEEE; 
    border-radius: 30px;
    height: 32px;
    width: 32px;
`;


const smallCard = ({title = "title", details = "details", icon}) => {
    Icon.defaultProps = {
        src: icon,
    };
    return (
        <Card>
            {title}
            <Icon></Icon>
            <Detail>
                {details}
            </Detail>
        </Card>
    );
}

export default smallCard;