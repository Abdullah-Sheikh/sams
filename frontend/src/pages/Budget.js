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
    createData('FPS', "PKR 8,5034", "22/02/2022 12:00 AM", "V3422R2", "Approved"),
    
  ];

export default function Budget() {
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
            <Heading>Budget</Heading>
            <Button>Budget Requests</Button>
            <OutlineButton>New Request</OutlineButton>
            </RowContainer>

            <ContainerTable>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Budget</TableCell>
            <TableCell align="center">Date/Time</TableCell>
            <TableCell align="center">Innovice</TableCell>
            <TableCell align="center">Status</TableCell>
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
            <RowContainer>
                <TextLeft>Total</TextLeft>
                <TextRight>15</TextRight>
            </RowContainer>  
            <RowContainer>
                <TextLeft>Approved</TextLeft>
                <TextRight>10</TextRight>
            </RowContainer>   
            <RowContainer>
                <TextLeft>Pending</TextLeft>
                <TextRight>05</TextRight>
            </RowContainer> 
            <RowContainer>
                <TextLeft>Allocated Budget</TextLeft>
                <TextRight> 60,000/-</TextRight>
            </RowContainer> 
            <RowContainer>
                <TextLeft>Remaining Budget</TextLeft>
                <TextRight>40,000/-</TextRight>
            </RowContainer>    
            </DetailsContainer>


            <ReminderContainer>
                <Reminders>Important Reminders</Reminders>

                <RowContainer>
        
            <NewButton>New</NewButton>
            <UpdateOutlineButton>Update</UpdateOutlineButton>
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
padding: 12px 16px; 
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
margin-top:10rem;
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
margin-top:10rem;
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





