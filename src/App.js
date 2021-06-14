import React from 'react';
import './App.css';
import { Button, Box , container, styled, spacing, RadioGroup, FormControlLabel, Typography, Radio} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function App() {

  const MyTextField = styled(TextField)({
    width: '100%',
  });

  const useStyles = makeStyles({
    container: {
      backgroundColor: '#FE6B8B',
    },
    divHeader: {
      width: '100%',
      padding: '16px 0 16px 24px'
    },
    divLine: {
      height: '1px',
      width: '100%',
      backgroundColor: '#C2C9D1'
    },
    h3: {
      margin: '0 0 24px 0',
    },
    p: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#FF5C00',
    },
    p1: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#00040C',
    },


    // textField: {
    //   width: '100%',
    // },
  });
  const classes = useStyles();
  return (
    <div>
      <container className={classes.container}>
        <from>
          <div className={classes.divHeader}>
            <Box component="h3" display="inline" m={1}>🦊 Foxbith Questionnaire</Box>
          </div>
          
          <div className={classes.divLine}></div>
            <Box display="flex" flexDirection="row-reverse" mt={1.5} mb={1.5} mr={3}>
              <Button variant="contained" style={{backgroundColor: "#FF5C00", color:"white", padding:"0 72px 0 72px", marginLeft:"13px"}}>SAVE</Button>
              <Button variant="contained" style={{backgroundColor: "white", color:"#FF5C00", border: "1px solid #FF5C00"}}>CANCEL</Button>
            </Box>
          <div className={classes.divLine}></div>

          {/* question detail */}
          <Box component="div" display="block" mt={3} ml={3} mr={3} bgcolor="primary.main">
            <Box component="div" display="block" p={3} bgcolor="warning.main">
              <h3 className={classes.h3}>Questionnaire Detail</h3>
              <MyTextField className="TextField" id="outlined-basic" label="Name*" variant="outlined"/>
            </Box>
          </Box>

          {/* question */}
            <Box component="div" display="block" ml={3} mr={3} bgcolor="primary.main">
              <Box component="div" display="block" pt={3} pl={3} pr={3} bgcolor="primary.main">
                <Box component="div" display="block">
                  <h3 className={classes.h3}>Question 1</h3>
                  <MyTextField className="TextField" id="outlined-basic" label="Name*" variant="outlined"/>
                </Box>

                <Box component="div" display="flex" flexDirection="row" alignItems="center" marginTop="24px">
                  <Radio value="" color="primary"/>
                  <MyTextField className="TextField" id="outlined-basic" label="Question*" variant="outlined" helperText="The answer is correct"/>
                  <svg width="50" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#00040C"/>
                  </svg>
                </Box>
                <Box component="div" display="flex" flexDirection="row" alignItems="center" marginTop="24px">
                  <Radio value="" color="primary"/>
                  <MyTextField className="TextField" id="outlined-basic" label="Question*" variant="outlined"/>
                  <svg width="50" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#00040C"/>
                  </svg>
                </Box>
              </Box>

              <Box component="div" display="flex" flexDirection="row" alignItems="center" pl={3} pr={3} bgcolor="secondary.main">
              <svg width="45" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#FF5C00"/>
              </svg>
              <p className={classes.p}>ADD CHOICE</p>

              </Box>
              <Box component="div" display="flex" alignItems="center" pl={3} pr={3}>
                <div className={classes.divLine}></div>
              </Box>
              <Box component="div" display="flex" alignItems="center" pl={3} pr={3} bgcolor="secondary.main">
              <svg width="45" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#00040C"/>
              </svg>
              <p className={classes.p1}>DUPLICATE</p>

              <svg width="45" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#00040C"/>
              </svg>
              <p className={classes.p1}>DELETE</p>
              </Box>
            </Box>

            {/* Add question */}
            <Box component="div" display="block" ml={3} mr={3} bgcolor="#FF5C00">
              <Box component="div" display="flex" alignItems="center" p={3}>
                <Button variant="contained" style={{backgroundColor: "white", color:"#FF5C00", border: "1px solid #FF5C00", width:"100%"}}>
                <svg width="45" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#FF5C00"/>
                </svg>ADD QUESTION</Button>
              </Box>
            </Box>
        </from>
      </container>
    </div>
  );
}

export default App;
