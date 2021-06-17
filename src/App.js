import React, {useState} from 'react';
import './App.css';
import { Button, Box, Typography, Radio} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
// import zIndex from '@material-ui/core/styles/zIndex';
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

  // // Add question
  // const [inputQuestion, setInputQuestion] = useState([1]);
  // const handleAddQuestion = () => {
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


  // const [inputChoice, setInputChoice] = useState([
  //   {
  //     choice: ''
  //   }
  // ]);

  const [inputQuestion, setInputQuestion] = useState([{
    Qid: 1,
    questionHeader: '',
    allChoice: [{choice: '', answer: 'true'}]
  }]);
  const handleAddQuestion = () => {
    const array = [...inputQuestion];
    // const choiceArray = [...inputChoice];
    // choiceArray.push({
    //   choice: choiceArray.length+1
    // })
    array.push({
      Qid: array.length+1,
      questionHeader: '',
      allChoice: [{choice: '', answer: 'true'}]
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

  const handleChangeQuestionHeader = (e, i) => {
    const array = [...inputQuestion];
    const indexValue = e.target.id -1;
    array.splice(indexValue, 1,{Qid: indexValue + 1, questionHeader: e.target.value, allChoice: inputQuestion[i].allChoice})
    setInputQuestion(array);
    // console.log(array);
  }

  const handleAddChoice = (e, i) => {
    const array = [...inputQuestion];
    array[i].allChoice.push({choice: '', answer:'false'});
    setInputQuestion(array);

    // setInputQuestion(prev => { //ถ้าใช้อันนี้จะเกิดบัค add choice & delete choice เเละเมื่อ add ใหม่จะ add ซ้ำกัน 2 รอบ
    //   const inputPrev = [...prev];
    //   // newPrev.allChoice.push(newPrev[Qid].allChoice[{choice: ''}]); // โครตผิด คิดได้ไง push อะไรก็ไม่รู้
    //   inputPrev[i].allChoice.push({choice: ''});
    //   console.log("inputPrev",inputPrev);
    //   return inputPrev;
    // })
    
    // const choiceArray = [...inputChoice];
    // const Qid = e.target.id-1;
    // console.log("Qid",Qid);

    // console.log("New Question1",array)
    // array[Qid].allChoice.push(choiceArray[0]);
    // console.log("New Question2",array)
    // choiceArray.push({choice: ''});
    // setInputQuestion(array);

    // console.log(choiceArray)
    // array[Qid].allChoice.push(choiceArray[0]);
    // console.log("New Question10",array)

    // setInputQuestion(prev => {
    //   const newPrev = [...prev];
    //   console.log(choiceArray)
    //   newPrev[Qid].allChoice.push(choiceArray[0]);
    //   console.log("New Question10",newPrev)
    //   return newPrev;
    // })

    // setInputQuestion(prev => {
    //   const newPrev = [...prev];
    //   const NewArray = newPrev[Qid].allChoice.push(choiceArray[0]);
    //   console.log(newPrev);
    //   return newPrev;
    // })
    // setInputChoice(choiceArray);
    // console.log(array);
    // console.log(inputChoice);
  }
  
  const handleChangeValue = (e, j) => {
    const Qid = e.target.id-1;
    // inputChoice.push({choice: e.target.value})
    
    // const array = [...inputQuestion];
    // array[Qid].allChoice[j].splice(j,1 ,{choice: e.target.value});
    // setInputQuestion(array);

    // choiceArray[0]

    // console.log("indexvalue",j);

    // setInputQuestion[i].allChoice[j].splice(j,1 ,{choice: e.target.value});

    // console.log(Qid);
    setInputQuestion(prev => {
      const newInputChoice = [...prev]; //newInputChoice[Qid].allChoice[j].
      newInputChoice[Qid].allChoice.splice(j,1 ,{choice: e.target.value});
      // console.log(newInputChoice);
      // newInputChoice.splice(j,1 ,{choice: e.target.value});
      console.log("index",j, prev);
      return newInputChoice;
    });


    // inputChoice.splice(i,1 ,{choice: e.target.value});
    
    // console.log(e.target.value, i);
    // console.log(inputChoice)
  
    // choiceArray.push('a')
    // setInputChoice(choiceArray);
    // console.log(choiceArray);

    // const array = [...inputQuestion];
    // array[e.target.id-1].allChoice.splice(indexValue, 1,choiceArray)
    // setInputQuestion(array);
    // console.log(array);
  }

  // for radio change
  const [selectedValue, setSelectedValue] = useState(1);
  const handleChangeRadio = (e, j) => {
    setSelectedValue(e.target.value);
    console.log(selectedValue);

    // const Qid = e.target.id -1;
    // const array = [...inputQuestion];
    // array[Qid].allChoice.splice(j,1 ,{choice: e.target.value, answer: 'true'});
    // setInputQuestion(array);
  };
  const checkRadio = selectedValue;


  return (
    <div>
      <div>
        <form>
          {/* header */}
          <Box className={classes.divHeader}>
            <Box component="h5" fontSize="24px" display="inline" m={1}>🦊 Foxbith Questionnaire</Box>
          </Box>
          
          {/* btnSave */}
          <Box className={classes.divLine}></Box>
            <Box className={classes.bgSave} display="flex" flexDirection="row-reverse" pt={1.5} pb={1.5} pr={3}>
              <Button type="submit" variant="contained" className={classes.btnSave}>
                SAVE
              </Button>
              <Button variant="contained" className={classes.btnCancel}>
                CANCEL
              </Button>
            </Box>
          <Box className={classes.divLine}></Box>

          {/* question detail */}
            <Box p={3} mt={3} ml={3} mr={3} bgcolor="#FFFFFF">
              <Box component="h6" className={classes.h6}>
                Questionnaire Detail
              </Box>
              <TextField className={classes.TextField} label="Name" variant="outlined" required/>
            </Box>
            <Box ml={3} mr={3} bgcolor="#FFFFFF">
              <Box component="div" className={classes.divLine}></Box>
            </Box>

            {console.log("inputQuestion",inputQuestion)}
            {inputQuestion.map((x, i) =>
            { 
              const allChoice = x.allChoice;
              {console.log("allChoice",allChoice)}
              return (
              <Box ml={3} mr={3} bgcolor="#FFFFFF"key={x.Qid}>
                <Box pt={3} pl={3} pr={3}>
                  <Box>
                    <Box component="h6" className={classes.h6}>
                      Question {x.Qid}
                      </Box>
                    <TextField 
                    className={classes.TextField} 
                    label="Question" 
                    variant="outlined"
                    id={i+1}
                    onChange={(e) => handleChangeQuestionHeader(e, i)}
                    value={x.questionHeader}
                    required/> 
                  </Box>
                  {/* {console.log(inputQuestion[i].allChoice)} */}

                  {allChoice.map((y, j) => (
                  <Box display="flex" flexDirection="row" alignItems="center"key={j} mt={3}>
                    {console.log("y",allChoice[j].choice)}
                    {console.log("answer",allChoice[j].answer)}
                    {console.log("selectedValue",x.Qid+''+j)}
                    <Radio 
                    // checked={allChoice[j].answer === 'true'} 
                    checked={selectedValue === x.Qid+''+j} 
                    color="primary" 
                    name="radio-question"
                    value={x.Qid+''+j}
                    id={x.Qid}
                    onChange={(e) => handleChangeRadio(e, j)}/>
                    <TextField 
                    className={classes.TextField}
                    label={"Description"} 
                    variant="outlined" 
                    helperText="The answer is correct"
                    id={x.Qid}
                    value={allChoice[j].choice}
                    onChange={(e) => handleChangeValue(e, j)}
                    required/>
                    <DeleteOutlineIcon style={{marginLeft: '24px'}}
                    onClick={()=> {
                      // const array = [...inputQuestion];
                      // array[i].allChoice.splice(j,1);
                      // setInputQuestion(array);
                      // console.log("delete",array);
                      
                      setInputQuestion(prev =>{
                        const newPrev = [...prev]
                        newPrev[i].allChoice.splice(j,1);
                        console.log("deletePrev",newPrev)
                        return newPrev;
                      })
                    }
                    }/>
                  </Box>
                  ))}
                </Box>

                {/* add choice */}
                <Box display="flex" alignItems="center" p={3}bgcolor="#FFFFFF">
                  <Box display="flex"alignItems="center"className={classes.elementCursor}>
                    <AddIcon style={{ color: '#FF5C00' }} />
                    <Typography
                    className={classes.p}
                    id={x.Qid}
                    onClick={(e) => handleAddChoice(e, i)}>
                      ADD CHOICE
                    </Typography>
                  </Box>
                </Box>

                {/* duplicate and delete */}
                <Box component="div" display="flex" alignItems="center" pl={3} pr={3}>
                  <Box component="div" className={classes.divLine}></Box>
                </Box>
                
                <Box display="flex" alignItems="center" p={3} bgcolor="#FFFFFF">
                  <Box display="flex" alignItems="center"mr={3.5}className={classes.elementCursor}>
                    <FileCopyOutlinedIcon />
                    <Typography className={classes.p1}>
                      DUPLICATE
                    </Typography>
                  </Box>

                  <Box
                  display="flex" 
                  alignItems="center"
                  className={classes.elementCursor}
                  onClick={()=> {
                    // const array = [...inputQuestion]
                    // const Selectindex = inputQuestion.indexOf(i)
                    // array.splice(Selectindex, 1)
                    // setInputQuestion(array)

                    const array = [...inputQuestion];
                    array.splice(i, 1);
                    setInputQuestion(array);
                    // console.log(array);
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
            )})}

            {/* Add question */}
              <Box display="flex" alignItems="center" p={3} ml={3} mr={3} bgcolor="#FFFFFF">
                <Button 
                variant="contained" 
                className={classes.btnAddQuestion}
                onClick={handleAddQuestion}>
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
