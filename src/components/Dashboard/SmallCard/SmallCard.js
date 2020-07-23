import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardDark = styled.button`
    background-color: #29303B;
    border: none;
    height: 150px;
    width: 350px;
    font-size: 25px;
    color: white;
    z-index: 1;
    border-radius: 25px;
    text-align: center;
    position: relative;
    margin-left: 20px;
    box-shadow: 3px 3px 3px 3px black; 
    float:left;
    transition: top ease 0.5s;
    &:hover{
        top: -6px;
        left: -2px;
        cursor: pointer;
    }
`;

const CardLight = styled.button`
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


const Detail = styled.p`
    color: grey;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    text-align: left;
    padding-left: 20px;
    padding-top: 15px;
    font-size: 15px;
`;

const IconLight = styled.img`
    margin-top: 30px;
    margin-left: 10px;
    box-shadow: 3px 3px 3px 3px #EEEEEE; 
    border-radius: 30px;
    height: 32px;
    width: 32px;
`;

const IconDark = styled.img`
    margin-top: 30px;
    margin-left: 10px;
    box-shadow: 3px 3px 3px 3px black; 
    border-radius: 30px;
    height: 32px;
    width: 32px;
`;



const SmallCard = ({ title = "title", details = "details", icon, dark, link = '/' }) => {

    let CardMode = dark ? CardDark : CardLight;
    let IconMode = dark ? IconDark : IconLight;

    IconMode.defaultProps = {
        src: icon,
    };

    return (
        <Link to={link}>
            <CardMode>
                {title}
                <IconMode />
                <Detail>
                    {details}
                </Detail>
            </CardMode>
        </Link>
    );
}

export default SmallCard;