import * as React from "react";
import Styled from 'styled-components'
import SearchIcon from '../assets/Search_icon.png'
import NotificationsIcon from '../assets/Notifications_icons.png'

  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

  
export default function Header() {
  return (
      <AppBar position="static"  style={{ backgroundColor:"#ffffff" , padding:"15px"}}>
        <Toolbar>
          {/*Inside the IconButton, we 
           can render various icons*/}
           <Image/>

           <UserName>John Doe <br/><span>Student Affair</span></UserName>

           <SearchInput> <Input/> <InputIcon src={SearchIcon}/></SearchInput>
          
          {/* The Typography component applies 
           default font weights and sizes */}
  
         
          <Notifications src={NotificationsIcon}/>
        </Toolbar>
      </AppBar>
  );
}


const Image = Styled.img`
background-color:#174A84;
width:40px;
height:40px;
border-radius:50%;
margin-right:10px;

`;

const UserName = Styled.div`
  margin-left:1rem;
  margin-top:0.5rem;
  text-align:start;
  color: #174A84;
  font-weight: bold;
  font-size: 16px;

  span{
    font-weight: normal;
    font-size: 12px;
  
  }
`;

const SearchInput = Styled.div`

  
  width: 400px;  
  margin-left:auto;
  margin-right:auto;
  display:block;

  height: 38px;
  border: none;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding: 0 1rem;
  font-size: 16px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
  
  `;

  const InputIcon = Styled.img`

  
  width:20px;
  height:20px;
  margin-top:10px;
  float:right;

  `;

  const Input = Styled.input`

  height:100%;
  background-color: #f5f5f5;
  width:80%;
  outline: none;
  align-text:center;
  border:none;

  `;

  const Notifications = Styled.img`

  width:20px;
  height:20px;
  margin-top:10px;
  float:right;
  padding:5px;

  `;