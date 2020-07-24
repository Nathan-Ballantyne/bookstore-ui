import React from 'react';
import styled from 'styled-components';
import SmallCardBar from './SmallCard/SmallCardBar';
import Graph from './StatGraphs/StatGraph';


export const Dashboard = styled.div`
    margin-left: 240px;
    margin-top: 100px;
    background-color: ${props => props.dark ? '#2D2D2D' : '#EEEEEE' };
    z-index: 1;
    opacity: 1;
    height: 100%;
    width: 100%;
    font-size: 30px;
    position: absolute;
`;

const dashboard = ({dark, children}) => {

    return (
        <Dashboard dark={dark}>
            <SmallCardBar dark={dark}/>
            <Graph dark={dark}/>
            {children}
        </Dashboard>
    );
}

export default dashboard;