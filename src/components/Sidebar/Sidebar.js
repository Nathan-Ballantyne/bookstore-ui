import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import SidebarItem from './SidebarItem';
import styled from 'styled-components';


const Sidebar = styled.div` 
  width: 240px;
  height: 100vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: black;
  opacity: 0.8;
  z-index: 1;
  overflow-x: hidden;
  position: fixed;
`;



const sidebar = ({ items, depthStep, depth, expanded }) => {
  return (
    <Sidebar>
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </Sidebar>
  );
}

export default sidebar;
