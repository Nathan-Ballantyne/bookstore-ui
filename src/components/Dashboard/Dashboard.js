import React from 'react';
import styled from 'styled-components';
import SmallCardBar from './SmallCard/SmallCardBar';
import Graph from './StatGraphs/StatGraph';

const DashboardItem = styled.div`
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

const dashboard = () => {
    return (
        <DashboardItem>
            <SmallCardBar/>
            <Graph/>
        </DashboardItem>
    );
}

export default dashboard;