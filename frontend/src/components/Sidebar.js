import React from 'react'
import styled from "styled-components";

import { ProSidebar, Menu, MenuItem, SubMenu ,SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

export default function Sidebar() {


  return (
    <ProSidebar style={{height: '100vh',
        overflow: 'auto'}}>
        <SidebarHeader>
            <Header>Student Affair<br/> Management System</Header>
   
  </SidebarHeader >
    <Menu iconShape="square">
      <MenuItem > <ItemText>Societies </ItemText></MenuItem>
      <MenuItem > <ItemText>Room Allotement </ItemText></MenuItem>
      <MenuItem > <ItemText>Magazine </ItemText></MenuItem>
      <MenuItem > <ItemText>Budget </ItemText></MenuItem>
      <MenuItem > <ItemText>Events </ItemText></MenuItem>
      <MenuItem > <ItemText>Announcements</ItemText></MenuItem>
      
    </Menu>

    <SidebarFooter>
    <Button>Sign Out</Button>
  </SidebarFooter>
  </ProSidebar>
  )
}



const Header = styled.div`
  
    margin-top:1.8rem;
    margin-bottom:1.8rem;
    text-align:center;
    color: #ffffff;
    margin-left: auto;
    margin-right:auto;
    width:100%;
    font-weight: 900;

    font-size: 14px;
 
  
`;

const ItemText = styled.div`
  
    margin-top:0.6rem;
    margin-bottom:0.6rem;
    text-align:center;
    color: #ffffff;
    margin-left: auto;
    margin-right:auto;
    width:100%;
    font-weight: bold;

    font-size: 13px;
 
  
`;


const Button = styled.div`

margin-top:15rem;
text-align:center;
font-size: 11px;
margin-left: auto;
margin-right:auto; 
border-radius: 5px;
width:20%;
background-color: #174A84; 
border: solid #ffffff; 
color: white; /* White text */
padding: 12px 36px 12px 36px; 
cursor: pointer; 
&:hover {
  background-color: #174A84;
}

`;
