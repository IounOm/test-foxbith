import React, {useState} from 'react';
import './App.css';
import { Button, Box, Typography, Radio} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import zIndex from '@material-ui/core/styles/zIndex';
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
    console.log(selectedValue.value);
  };
  const checkRadio = selectedValue;

  // // Add question
  // const [inputQuestion, setInputQuestion] = useState([1]);
  // const handleChangeClick = () => {
  //   const array = [...inputQuestion];
  //   array.push(array.length+1);
  //   setInputQuestion(array);
  //   // setInputQuestion([setInputQuestion.length]);
  //   console.log(array);
  // };
  // // Delete question
  // const handleChangeDelete = () => {
  //   const array = [...inputQuestion];
  //   array.pop();
  //   setInputQuestion(array);
  // }


  const [inputChoice, setInputChoice] = useState([
    {
      questionBlog: 1,
      choice: ''
    },
    {
      questionBlog: 2,
      choice: ''
    }
  ]);

  const [inputQuestion, setInputQuestion] = useState([{
    Qid: 1,
    questionHeader: '',
    allChoice: [inputChoice]
  }]);
  const handleChangeClick = () => {
    const array = [...inputQuestion];
    // const choiceArray = [...inputChoice];
    // choiceArray.push({
    //   choice: choiceArray.length+1
    // })
    array.push({
      Qid: array.length+1,
      questionHeader: '',
      allChoice: [inputChoice]
    });
    setInputQuestion(array);
    // setInputChoice(choiceArray);

    // console.log(choiceArray);
    console.log(array);
  };
  // Delete question // เอา fuction ไปเขียนใน return เเทน
  // const handleChangeDelete = () => {
  //   const array = [...inputQuestion];
  //   array.pop();
  //   setInputQuestion(array);
  // }

  // const handleAddChoice = () => {
  //   const array = [...inputQuestion];
  //   const choiceArray = [...inputChoice];
  //   choiceArray.push({
  //     choice: choiceArray.length+1
  //   })
  //   setInputChoice(choiceArray);
  //   array.push({
  //     Qid: array.length,
  //     values: choiceArray
  //   })

  //   setInputQuestion(array);
  //   console.log(array);
  // }

//   const handleChangeQuestionHeader = (e) => {
//     const Qid = e.target.name - 1;
//     const questionHeader = e.target.value;
//     setInputQuestion({...inputQuestion ,Qid: Qid,  questionHeader: questionHeader});
//     console.log(inputQuestion);
//  };

  const handleChangeQuestionHeader = (e) => {
    const array = [...inputQuestion];
    const indexValue = e.target.name -1;
    array.splice(indexValue, 1,{Qid: indexValue + 1, questionHeader: e.target.value, allChoice: [inputChoice]})
    setInputQuestion(array);
    console.log(array);
  }

  const handleAddChoice = (e) => {
    const choiceArray = [...inputChoice];
    choiceArray.push({
      questionBlog: '',
      choice: ''
    })
    setInputChoice(choiceArray);
    console.log(choiceArray);

  }
  
  const handleChangeValue = (e) => {
    const choiceArray = [...inputChoice];
    const indexValue = e.target.id -1;
    choiceArray.splice(indexValue,1 ,{questionBlog: indexValue+1, choice: e.target.value});
    // setInputChoice(choiceArray);
    // console.log(choiceArray);

    const array = [...inputQuestion];
    array.splice(indexValue, 1,{Qid: indexValue + 1, questionHeader: e.target.value, allChoice: [choiceArray]})
    setInputQuestion(array);
    console.log(array);
  }

  return (
    <div>
      <div>
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
                      Question {x.Qid}
                      </Box>
                    <TextField 
                    className={classes.TextField} 
                    label="Question" 
                    variant="outlined"
                    name={index+1}
                    onChange={handleChangeQuestionHeader}
                    // value={x.values[{index}]}
                    required/> 
                  </Box>

                  {inputChoice.map((y, index) => (
                  <Box 
                  display="flex" 
                  flexDirection="row" 
                  alignItems="center"
                  mt={3}>
                    <Radio 
                    checked={selectedValue == index+1} 
                    value={index+1}
                    color="primary" 
                    name="radio-question" 
                    onChange={handleChange}/>
                    {checkRadio == index+1 ? 
                    <TextField 
                    className={classes.TextField} 
                    label={"Description"} 
                    variant="outlined" 
                    helperText="The answer is correct"
                    id={index+1}
                    value={x.choice}
                    onChange={handleChangeValue}
                    required/>
                    : 
                    <TextField 
                    className={classes.TextField}
                    label="Description" 
                    variant="outlined"
                    id={index+1}
                    value={x.choice}
                    onChange={handleChangeValue}
                    required/>}
                    <DeleteOutlineIcon style={{marginLeft: '24px'}}
                    onClick={()=> {
                      const choiceArray = [...inputChoice];
                      choiceArray.splice(index, 1);
                      setInputChoice(choiceArray);
                      console.log(choiceArray);
                    } 
                    }/>
                  </Box>
                  ))}

                  {/* <Box 
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
                  </Box> */}
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
                    className={classes.p}
                    id={x.Qid}
                    onClick={handleAddChoice}>
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
                    array.splice(index, 1);
                    setInputQuestion(array);
                    console.log(array);
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
      </div>
    </div>
  );
}

export default App;
