import React from 'react'
import logo from "../assets/logo.jpeg";
import styled from "styled-components";
import { Link } from 'react-router-dom';



export default function Splash() {
  return (
      
    <Container>
      <LogoWrapper>
        <img src={logo}/>

        <h3>Student Affair Management System</h3>


        <Link to="/signin" >
        <Button ><i class="fa fa-arrow-right"></i></Button>
        </Link>


      </LogoWrapper>

    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items: center;
  
  `

  const LogoWrapper = styled.div`
  img {
   
  width: 20%;
  margin-top:6rem;
  margin-left: auto;
  margin-right:auto;
  display: block;
  
  }
  h3 {
    text-align:center;
    color: #000000;
    margin-left: auto;
    margin-right:auto;
    width:18%;
    font-size: 22px;
  }
  
`;


const Button = styled.div`
margin-left: auto;
margin-right:auto; 
width:15%;
background-color: #174A84; 
border: none; 
color: white; /* White text */
padding: 12px 16px; 
cursor: pointer; 
&:hover {
  background-color: #174A80;
}
i {
  text-align:center;
  display: block;
  margin-left: auto;
  margin-right:auto;
}

`
