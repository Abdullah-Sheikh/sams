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
    createData('Sukhan-Fast Literary Society', '22/02/2022 12:00 AM', '18X-XXXX'),
    
  ];

export default function Announcements() {
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
            <Heading>Announcements</Heading>
            <Button>New Announcement</Button>
          
            </RowContainer>

            <ContainerTable>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Detail</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">By</TableCell>
            
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
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </ContainerTable>
         
        </Grid>
        <Grid item xs={4}>
           


            <ReminderContainer>
           
            <TextInput>To</TextInput>
            <TextInput>cc/bc</TextInput>
            <TextInput>Subject</TextInput>
            <TextInput>Attachment</TextInput>
            <TextInput>Description</TextInput>
            

                <RowContainer>
        
            <NewButton>Announce</NewButton>
            
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


margin-top:6.5rem;
width: 90%;
margin-left: auto;
margin-right:auto;
display: block;
  height: 495px;
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
align:right;
font-size: 11px;
margin-top:12.5rem;
margin-left:10rem;
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
font-size: 12px;
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








