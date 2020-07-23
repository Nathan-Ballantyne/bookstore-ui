import React from 'react';
import styled from 'styled-components';
import SmallCardBar from './SmallCard/SmallCardBar';
import Graph from './StatGraphs/StatGraph';

const DashboardLight = styled.div`
    margin-left: 240px;
    margin-top: 100px;
    background-color: #EEEEEE;
    z-index: 1;
    opacity: 1;
    height: 100%;
    width: 100%;
    color: orange;
    font-size: 30px;
    position: absolute;
`;


const DashboardDark = styled.div`
    margin-left: 240px;
    margin-top: 100px;
    background-color: #2D2D2D;
    z-index: 1;
    opacity: 1;
    height: 100%;
    width: 100%;
    color: orange;
    font-size: 30px;
    position: absolute;
`;

const dashboard = ({dark, children}) => {

    let DashboardItem = dark ? DashboardDark : DashboardLight;

    return (
        <DashboardItem>
            <SmallCardBar dark={dark}/>
            <Graph dark={dark}/>
            {children}
        </DashboardItem>
    );
}

export default dashboard;