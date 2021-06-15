import React, {useState} from 'react';
import './App.css';
import { Button, Box, RadioGroup, FormControlLabel, Typography, Radio} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
// import { ClassSharp } from '@material-ui/icons';


function App() {

  const useStyles = makeStyles({
    body: {
      backgroundColor: '#eeeeee',
      fontFamily: 'Prompt',
      fontStyle: 'normal',
    },
    divHeader: {
      width: '100%',
      padding: '16px 0 16px 24px',
      backgroundColor: '#FFFFFF',
    },
    divLine: {
      height: '1px',
      width: '100%',
      backgroundColor: '#C2C9D1'
    },
    bgSave: {
      backgroundColor: '#FFFFFF',
    },
    btnSave: {
      backgroundColor: "#FF5C00",
      color:"white",
      padding:"0 72px 0 72px",
      marginLeft:"13px"
    },
    btnCancel: {
      backgroundColor: "white",
      color:"#FF5C00",
      border: "1px solid #FF5C00"
    },
    TextField: {
      width: '100%',
    },
    h6: {
      margin: '0 0 24px 0',
      fontSize: '20px',
    },
    p: {
      // fontSize: '14px',
      // fontWeight: '500',
      // color: '#FF5C00',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '22px',
      color: '#FF5C00',
    },
    p1: {
      // fontSize: '14px',
      // fontWeight: '500',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '22px',
      color: '#00040C',
    },
    btnAddQuestion: {
      backgroundColor: "white",
      color:"#FF5C00",
      border: "1px solid #FF5C00",
      width:"100%"
    },
    elementCursor: {
      cursor: "pointer",
    },
  });
  const classes = useStyles();

  // for radio change
  const [selectedValue, setSelectedValue] = useState('1');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };
  const checkRadio = selectedValue;

  // const questionAllBlog = ['1','2'];
  // const [AddQuestionBlog, setAddQuestionBlog] = useState(questionAllBlog);
  // function handleAdd() {
  //   const newQuestion = AddQuestionBlog.concat(1);
  //   setList(newList);
  // }
  const [inputQuestion, setInputQuestion] = useState([1]);
  const handleChangeClick = () => {
    const array = [...inputQuestion];
    array.push(array.length+1);
    setInputQuestion(array);
    // setInputQuestion([setInputQuestion.length]);
    console.log(array);
  };
  const handleChangeDelete = () => {
    const array = [...inputQuestion];
    array.pop();
    setInputQuestion(array);
  }
  // const [questionAllBlog, setQuestionAllBlog] = useState('');

  return (
    <div>
      <container>
        <form>
          {/* header */}
          <Box className={classes.divHeader}>
            <Box 
            component="h5" 
            fontSize="24px" 
            display="inline" 
            m={1}>
              🦊 Foxbith Questionnaire
            </Box>
          </Box>
          
          {/* btnSave */}
          <Box className={classes.divLine}></Box>
            <Box 
            className={classes.bgSave} 
            display="flex" 
            flexDirection="row-reverse" 
            pt={1.5} pb={1.5} pr={3}>
              <Button 
              type="submit" 
              variant="contained" 
              className={classes.btnSave}>
                SAVE
              </Button>
              <Button 
              variant="contained" 
              className={classes.btnCancel}>
                CANCEL
              </Button>
            </Box>
          <Box className={classes.divLine}></Box>

          {/* question detail */}
            <Box 
            p={3} 
            mt={3} ml={3} mr={3} 
            bgcolor="#FFFFFF">
              <Box 
              component="h6" 
              className={classes.h6}>
                Questionnaire Detail
              </Box>
              <TextField 
              className={classes.TextField} 
              label="Name" 
              variant="outlined" 
              required/>
            </Box>
            <Box 
            ml={3} mr={3} 
            bgcolor="#FFFFFF">
              <Box 
              component="div" 
              className={classes.divLine}>
              </Box>
            </Box>

            {inputQuestion.map((x, index) => (
              <Box 
              ml={3} mr={3} 
              bgcolor="#FFFFFF">
                <Box 
                pt={3} pl={3} pr={3}>
                  <Box>
                    <Box 
                    component="h6"
                    className={classes.h6}>
                      Question {index+1}
                      </Box>
                    <TextField 
                    className="TextField" 
                    label="Question" 
                    variant="outlined" 
                    required/>
                  </Box>

                  <Box 
                  display="flex" 
                  flexDirection="row" 
                  alignItems="center" 
                  mt={3}>
                    <Radio 
                    checked={selectedValue === '1'} 
                    value='1' 
                    color="primary" 
                    name="radio-question" 
                    onChange={handleChange}/>
                    {checkRadio == 1 ? 
                    <TextField 
                    className={classes.TextField} 
                    label="Description" 
                    variant="outlined" 
                    helperText="The answer is correct" 
                    required/>
                    : 
                    <TextField 
                    className={classes.TextField}
                    label="Description" 
                    variant="outlined" 
                    required/>}
                    <DeleteOutlineIcon style={{marginLeft: '24px'}}/>
                  </Box>
                  <Box 
                  display="flex" 
                  flexDirection="row" 
                  alignItems="center" 
                  mt={3}>
                    <Radio 
                    checked={selectedValue === '2'} 
                    value='2'
                    color="primary" 
                    name="radio-question" 
                    onChange={handleChange}/>
                    {checkRadio == 2 ? 
                    <TextField 
                    className={classes.TextField} 
                    label="Description" 
                    variant="outlined" 
                    helperText="The answer is correct" 
                    required/>
                    : 
                    <TextField 
                    className={classes.TextField} 
                    label="Description" 
                    variant="outlined" 
                    required/>}
                    <DeleteOutlineIcon style={{marginLeft: '24px'}}/>
                  </Box>
                </Box>

                {/* add choice */}
                <Box 
                display="flex" 
                alignItems="center" 
                p={3}
                bgcolor="#FFFFFF">
                  <Box 
                  display="flex"
                  alignItems="center"
                  className={classes.elementCursor}>
                    <AddIcon style={{ color: '#FF5C00' }} />
                    <Typography
                    className={classes.p}>
                      ADD CHOICE
                    </Typography>
                  </Box>
                </Box>

                {/* duplicate and delete */}
                <Box 
                component="div" 
                display="flex" 
                alignItems="center" 
                pl={3} pr={3}>

                  <Box 
                  component="div" 
                  className={classes.divLine}>
                  </Box>
                </Box>
                
                <Box
                display="flex" 
                alignItems="center" 
                p={3} 
                bgcolor="#FFFFFF">
                  <Box
                  display="flex" 
                  alignItems="center"
                  mr={3.5}
                  className={classes.elementCursor}>
                    <FileCopyOutlinedIcon />
                    <Typography 
                    className={classes.p1}>
                      DUPLICATE
                    </Typography>
                  </Box>

                  <Box
                  display="flex" 
                  alignItems="center"
                  className={classes.elementCursor}
                  onClick={()=> {
                    // const array = [...inputQuestion]
                    // const Selectindex = inputQuestion.indexOf(index)
                    // array.splice(Selectindex, 1)
                    // setInputQuestion(array)

                    const array = [...inputQuestion];
                    array.pop(index);
                    setInputQuestion(array);
                  }
                    
                  }>
                    <DeleteOutlineIcon />
                    <Typography 
                    className={classes.p1}>
                      DELETE
                    </Typography>
                  </Box>
                </Box>
                <Box 
                bgcolor="#FFFFFF">
                  <Box 
                  className={classes.divLine}>
                  </Box>
                </Box>
              </Box>
            ))}

            {/* Add question */}
              <Box 
              display="flex" 
              alignItems="center" 
              p={3} 
              ml={3} mr={3} 
              bgcolor="#FFFFFF">
                <Button 
                variant="contained" 
                className={classes.btnAddQuestion}
                onClick={handleChangeClick}>
                  <AddIcon style={{ color: '#FF5C00' }}/>
                  ADD QUESTION
                </Button>
              </Box>
        </form>
      </container>
    </div>
  );
}

export default App;
