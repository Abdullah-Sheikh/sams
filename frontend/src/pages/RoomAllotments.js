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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('FPS', 5, "22/02/2022 12:00 AM", "18F-XXXX", "18F-XXXX"),
    
  ];

export default function RoomAllotments() {
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
            <Heading>Room Allotment  </Heading>
            <Button>Download Report</Button>
            </RowContainer>

            <ContainerTable>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Society Name</TableCell>
            <TableCell align="center">Room Number</TableCell>
            <TableCell align="center">Date/Time</TableCell>
            <TableCell align="center">Alloted To</TableCell>
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

        <ReminderContainer>
           
           <TextInput>  Select Society</TextInput>
           <TextInput>Date</TextInput>
           <TextInput>Time</TextInput>
           <TextInput>Alloted to</TextInput>
           <TextInput>Purpose</TextInput>

           

           <Reminders>Available Rooms</Reminders>
           <TextInput>Room Number XX</TextInput>
           <TextInput>Room Number XX</TextInput>
           <TextInput>Room Number XX</TextInput>
           <TextInput>Room Number XX</TextInput>
           
           

               <RowContainer>
       
           <NewButton>Allot Room</NewButton>
           
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


const Heading = styled.div`

 margin-top:2rem;
  margin-left:3rem;
  text-align:start;
  color: #174A84;
  font-weight: bold;
  font-size: 36px;

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
padding: 12px 16px; 
cursor: pointer; 


`;


const NewButton = styled.div`

text-align:center;
align:center;
font-size: 11px;
margin-top:2rem;
margin-left:5rem;
margin-right:1rem;
border-radius: 5px;
width:40%;
background-color: #174A84; 
border: none; 
color: white; /* White text */
padding: 12px 16px; 
cursor: pointer; 


`;


const TextInput= styled.div`
 
text-align:start;
font-size: 10px;
margin-top:0.5rem;
margin-right:0.5rem;
margin-left:0.5rem;

width:85%;
font-weight:500;
background-color: #ffffff; 
border-bottom: solid #A5C9FF; 
color: #174A84; /* White text */
padding: 12px 16px; 
cursor: pointer; 
`;
const ReminderContainer = styled.div`


margin-top:6.5rem;
width: 90%;
margin-left: auto;
margin-right:auto;
display: block;
  height: 510px;
  border: solid #A5C9FF;
  box-shadow: -5px -4px 9px -15px #A5C9FF;
  background-color: #ffffff;
  border-radius: 6px;
  
  font-size: 16px; 
  
  `;

  const Reminders= styled.div`
 
  margin-top:1rem;
  text-align:start;
  margin-left:1rem;
  color: #174A84;
  font-weight: 700;
  font-size: 10px;

`;




