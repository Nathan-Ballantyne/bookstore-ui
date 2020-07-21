import React from 'react';
import styled from 'styled-components';

const Graph = styled.div`
    background-color: #FFFFFF;
    height: 300px;
    width: 500px;
    font-size: 25px;
    color: grey;
    z-index: 1;
    border-radius: 25px;
    text-align: center;
    position: relative;
    margin-left: -1100px;
    margin-top: 200px;
    box-shadow: 3px 3px 3px 3px grey; 
    float:left;
`;

const statGraph = () => {
    return (
        <Graph>
            Graph showing amount of books read over a year 
            -------------------------------------
            Another to show what genre
            amount of pages maybe? 
            just interesting stats
        </Graph>
    );
};

export default statGraph;