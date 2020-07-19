import React from 'react';
import styled from 'styled-components';

const DashboardItem = styled.div`
    margin-left: 240px;
    margin-top: 100px;
    background-color: #EEEEEE;
    z-index: 2;
    opacity: 1;
    height: 100%;
    width: 100%;
    color: orange;
    font-size: 30px;
    position: absolute;
`;

function Dashboard() {
    return (
        <DashboardItem>test</DashboardItem>
    );
}

export default Dashboard;