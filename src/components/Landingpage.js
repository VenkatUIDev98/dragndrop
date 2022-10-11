import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Landingpage.css";
import GoogleIcon from '@mui/icons-material/Google';
import Dropzone from "react-dropzone";
import Dnd from './Dnd';





const theme = createTheme();

export default function Landingpage() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
  setFileNames(acceptedFiles.map(file => file.name));
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box 
          sx={{
            height: 120,
            width: 180,
            border: 1,
            borderColor: 'lightgray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: "20px"
          }}
          >
            <b>Share & Remember</b>
          </Box>
          <Typography component="h1" variant="h4">
            Welcome to the easiest way to
          </Typography>
          <Typography component="h1" variant="h4" fontWeight={800}>
            <h4 style={{margin:"10px"}}>Share & Remember</h4>
          </Typography>
          <p style={{margin:"0", fontSize:"15px", padding: "20px 0px"}}>Upload Photos From</p>
          <Box>  
            <Link href="#" underline="none" >
              <img src="assets/images/fb.png" style={{height:"50px", width:"50px"}} />
            </Link>
            <Link href="#" underline="none" >
              <img src="assets/images/insta.webp" style={{height:"50px", width:"50px", margin:"0px 25px 0px 25px"}} />
            </Link>
            <Link href="#" underline="none" >
              <img src="assets/images/photos.svg" style={{height:"50px", width:"50px"}} />
            </Link>
          </Box>
          <p>or</p>
          
          <Dnd/>
          
          <Link href="#" underline= "none" style={{color:"#000", marginBottom:"50px"}}>
            <Typography style={{fontSize:"20px", fontWeight: "800"}}>Have an account? Login</Typography>
          </Link>
          <Link href="#" style={{fontWeight:"bold"}}>Learn more
          </Link>

        </Box>
      </Container>
    </ThemeProvider>
  );
}


