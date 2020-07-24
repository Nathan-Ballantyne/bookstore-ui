import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.button`
    background-color: ${props => props.dark ? '#29303B' : '#FFFFFF'};
    border: none;
    height: 150px;
    width: 350px;
    font-size: 25px;
    color: ${props => props.dark ? 'white' : 'grey'};
    z-index: 3;
    border-radius: 25px;
    text-align: center;
    position: relative;
    margin-left: 20px;
    box-shadow: 3px 3px 3px 3px ${props => props.dark ? 'black' : 'grey'}; 
    float:left;
    transition: transform .3s;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`;


const Detail = styled.p`
    color: grey;
    font-family: Roboto;
    font-weight: normal;
    text-align: left;
    padding-left: 20px;
    padding-top: 15px;
    font-size: 15px;
`;

const Icon = styled.img`
    margin-top: 30px;
    margin-left: 10px;
    box-shadow: 3px 3px 3px 3px ${props => props.dark ? 'black' : '#EEEEEE'}; 
    border-radius: 30px;
    height: 32px;
    width: 32px;
`;



const SmallCard = ({ title = "title", details = "details", icon, dark, link = '/' }) => {

    Icon.defaultProps = {
        src: icon,
    };

    return (
        <Link to={link}>
            <Card dark={dark}>
                {title}
                <Icon dark={dark}/>
                <Detail>
                    {details}
                </Detail>
            </Card>
        </Link>
    );
}

export default SmallCard;