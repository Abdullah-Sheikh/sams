import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


export default function signin() {
  return (
    <>
    <Page >

        <Container>
            <Heading>Sign Up To SAMS</Heading>

            <PlaceHolder>Name</PlaceHolder>
            <Input ></Input>

            <PlaceHolder>Username</PlaceHolder>
            <Input ></Input>

            <PlaceHolder>Password</PlaceHolder>
            <Input ></Input>

            <PlaceHolder>Confirm Password</PlaceHolder>
            <Input ></Input>


            <Link to="/signin" >
            <Button >Sign Up</Button>
            </Link>


            <Already><Link to="/signin" >Already have an Account? </Link></Already>
        </Container>

        


    </Page>
    </>
  )
}

const Page = styled.div`
width: 100%;
height: 100vh;
overflow: auto;
background-color:#174A84;

  `;

const Container = styled.div`


margin-top:3.5rem;
width: 35%;
margin-left: auto;
margin-right:auto;
display: block;
  height: 530px;
  border: none;
 
  background-color: #f5f5f5;
  border-radius: 40px;
  padding-top:5rem;
  font-size: 16px; 
  
  `;


  const Heading = styled.div`

  text-align:center;
  color: #000000;
  font-weight: bold;
  font-size: 36px;



`;

const PlaceHolder = styled.div`
  margin-left:6rem;
  margin-top:1.75rem;
  text-align:start;
  color: #000000;
  font-weight: bold;
  font-size: 12px;



`;

const Input = styled.input`

width: 55%;
  
  margin:0.5rem 6rem 0rem 6rem;
  
  height: 40px;
  border: solid #174A84;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  font-size: 16px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
  
  `;


const Button = styled.div`
margin-top:2rem;
text-align:center;
font-size: 12px;
margin-left: auto;
margin-right:auto; 
border-radius: 5px;
width:20%;
background-color: #174A84; 
border: none; 
color: white; /* White text */
padding: 12px 16px; 
cursor: pointer; 
&:hover {
  background-color: #777FAD;
}

`;

const Already= styled.div`
 
  margin-top:0.65rem;
  text-align:center;
  color: #000000;
  font-weight: normal;
  font-size: 11px;

`;