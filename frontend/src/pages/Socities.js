import React from 'react'
import styled from "styled-components";
import Styles from "../style/Styles.scss"
import { Styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Sidebar from '../components/Sidebar'
import Header from '../components/Header';
import SukhanLogo from '../assets/SukhanLogo.png'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Ch. Usman Ghous', 'xxxxxxxx@gmail.com', 'Mentor', '03XX-XXXXXXX', '18X-XXXX'),
    
  ];

export default function Socities() {
  return (
      <>

      <div className="split left">
      
    <Sidebar/>
    </div>

    <div className="split1 right">

        <Header/>
        

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>

            <RowContainer>
            <Heading>Manage Societies</Heading>
            <Button>Select Society</Button>
            <OutlineButton>Add Society</OutlineButton>
            </RowContainer>

            <ContainerTable>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Designation</TableCell>
            <TableCell align="center">Contact Number</TableCell>
            <TableCell align="center">Roll Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              style={ {borderBottom: "#A5C9FF"}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </ContainerTable>
         
        </Grid>
        <Grid item xs={4}>
            <DetailsContainer >

                <LogoWrapper>
                    <img src={SukhanLogo} />
                </LogoWrapper>
            
            </DetailsContainer>


            <ReminderContainer>
            <RowContainer>
                <TextLeft>Total Members</TextLeft>
                <TextRight>60</TextRight>
            </RowContainer>  
            <RowContainer>
                <TextLeft>Ongoing Events</TextLeft>
                <TextRight>03</TextRight>
            </RowContainer>   
            <RowContainer>
                <TextLeft>Budget Alloted</TextLeft>
                <TextRight>Nil</TextRight>
            </RowContainer> 
            <RowContainer>
                <TextLeft>Mentor</TextLeft>
                <TextRight> Usman</TextRight>
            </RowContainer> 
            

                <RowContainer>
        
            <NewButton>Edit</NewButton>
            <UpdateOutlineButton>Download</UpdateOutlineButton>
            </RowContainer>

            </ReminderContainer>



         
        </Grid>
       
      </Grid>
    </Box>

       

        </div>
    

    


   



</>

  )
}

const RowContainer = styled.div`
display: flex;
  flex-direction: row;

`;


const Page = styled.div`
width: 100%;
height: 100vh;
overflow: auto;
background-color:#FAFDFF;

  `;
const Heading = styled.div`
 
 margin-top:2rem;
  margin-left:3rem;
  text-align:start;
  color: #174A84;
  font-weight: bold;
  font-size: 30px;

`;


const ContainerTable = styled.div`


margin-top:2rem;
width: 90%;
margin-left: auto;
margin-right:auto;
display: block;
  height: 470px;
  border: solid #A5C9FF;
  box-shadow: -15px -14px 9px -15px #A5C9FF;
  background-color: #ffffff;
  border-radius: 6px;
  padding-top:1rem;
  font-size: 16px; 
  
  `;


  const Button = styled.div`

text-align:center;
font-size: 11px;
margin-top:2rem;
margin-left:2rem;
border-radius: 5px;
width:20%;
background-color: #174A84; 
border: none; 
color: white; /* White text */
padding: 10px 8px; 
cursor: pointer; 


`;


const OutlineButton = styled.div`

text-align:center;
font-size: 12px;
margin-top:2rem;
margin-left:2rem;
border-radius: 5px;
width:20%;
font-weight:700;
background-color: #ffffff; 
border: solid #174A84; 
color: #174A84; /* White text */
padding: 10px 8px; 
cursor: pointer; 

`;


const DetailsContainer = styled.div`


margin-top:6.75rem;
width: 90%;
margin-left: auto;
margin-right:auto;
display: block;
  height: 200px;
  border: solid #A5C9FF;
  box-shadow: -5px -4px 9px -15px #A5C9FF;
  background-color: #ffffff;
  border-radius: 6px;
  
  font-size: 16px; 
  
  `;


  const TextLeft = styled.div`
  margin-left:1rem;
  width:100%;
  margin-top:1.5rem;
  text-align:start;
  color: #174A84;
  font-weight: bold;
  font-size: 10px;

`;

const TextRight = styled.div`

  margin-right:1rem;
  margin-top:1.5rem;
  text-align:right;
  
  
  color: #174A84;
  font-weight: bold;
  font-size: 10px;

`;


const ReminderContainer = styled.div`


margin-top:1.75rem;
width: 90%;
margin-left: auto;
margin-right:auto;
display: block;
  height: 255px;
  border: solid #A5C9FF;
  box-shadow: -5px -4px 9px -15px #A5C9FF;
  background-color: #ffffff;
  border-radius: 6px;
  
  font-size: 16px; 
  
  `;

  const Reminders= styled.div`
 
  margin-top:1rem;
  text-align:center;
  color: #174A84;
  font-weight: 700;
  font-size: 12px;

`;


const NewButton = styled.div`

text-align:center;
font-size: 11px;
margin-top:3.5rem;
margin-left:1rem;
margin-right:1rem;
border-radius: 5px;
width:40%;
background-color: #174A84; 
border: none; 
color: white; /* White text */
padding: 12px 16px; 
cursor: pointer; 


`;


const UpdateOutlineButton = styled.div`

text-align:center;
font-size: 12px;
margin-top:3.5rem;
margin-right:1rem;
border-radius: 5px;
width:40%;
font-weight:700;
background-color: #ffffff; 
border: solid #174A84; 
color: #174A84; /* White text */
padding: 12px 16px; 
cursor: pointer; 

`;


const LogoWrapper = styled.div`
  img {
   
  width: 90%;
  margin-top:auto;
  margin-bottom:auto;
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






