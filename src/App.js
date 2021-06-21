import React, {useState} from 'react';
// import { useForm, useFieldArray } from "react-hook-form";
import './App.css';
import { Button, Box, Radio, IconButton, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
// import zIndex from '@material-ui/core/styles/zIndex';
// import { ClassSharp } from '@material-ui/icons';


function App() {
  // สำหรับใช้เช็ค validate อีกเเบบ โดยใช้ react hook
  // const { register, handleSubmit, control, formState: { errors } } = useForm();
  // const onSubmit = data => console.log("data",data);
  // console.log("errors",errors);

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
    // divLine: {
    //   height: '1px',
    //   width: '100%',
    //   backgroundColor: '#C2C9D1'
    // },
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
  //     Description: ''
  //   }
  // ]);

  const [inputQuestion, setInputQuestion] = useState([{
    qId: 1,
    questionHeader: '',
    allChoice: [{Description: '', radioCheck: true, choiceError: false}],
    questionError : false
  }]);
  const [questionDetail, setQuestionDetail] = useState([{detail: '', headerError: false}]);

  const handleAddQuestion = () => {
    const array = [...inputQuestion];
    // const choiceArray = [...inputChoice];
    // choiceArray.push({
    //   Description: choiceArray.length+1
    // })
    array.push({
      qId: array.length+1,
      questionHeader: '',
      allChoice: [{Description: '', radioCheck: true, choiceError: false}],
      questionError : false
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
  //     Description: choiceArray.length+1
  //   })
  //   setInputChoice(choiceArray);
  //   array.push({
  //     qId: array.length,
  //     values: choiceArray
  //   })

  //   setInputQuestion(array);
  //   console.log(array);
  // }

//   const handleChangeQuestionHeader = (e) => {
//     const qId = e.target.name - 1;
//     const questionHeader = e.target.value;
//     setInputQuestion({...inputQuestion ,qId: qId,  questionHeader: questionHeader});
//     console.log(inputQuestion);
//  };

  const handleChangeQuestionHeader = (e, i) => {
    const array = [...inputQuestion];
    const indexValue = e.target.id -1;
    array.splice(indexValue, 1,{qId: indexValue + 1, questionHeader: e.target.value, allChoice: inputQuestion[i].allChoice, questionError : false})
    setInputQuestion(array);
    // console.log(array);
  }

  const handleAddChoice = (e, i) => {
    const array = [...inputQuestion];
    array[i].allChoice.push({Description: '', radioCheck:false, choiceError: false});
    setInputQuestion(array);

    array[i].allChoice.find((element, indexI) => {
      const find = array[i].allChoice[indexI].radioCheck;
      console.log("find",find);
      if(indexI <= 0){
        array[i].allChoice[0].radioCheck = true;
        setInputQuestion(array);
      }
    })

    // setInputQuestion(prev => { //ถ้าใช้อันนี้จะเกิดบัค add Description & delete Description เเละเมื่อ add ใหม่จะ add ซ้ำกัน 2 รอบ
    //   const inputPrev = [...prev];
    //   // newPrev.allChoice.push(newPrev[qId].allChoice[{Description: ''}]); // โครตผิด คิดได้ไง push อะไรก็ไม่รู้
    //   inputPrev[i].allChoice.push({Description: ''});
    //   console.log("inputPrev",inputPrev);
    //   return inputPrev;
    // })
    
    // const choiceArray = [...inputChoice];
    // const qId = e.target.id-1;
    // console.log("qId",qId);

    // console.log("New Question1",array)
    // array[qId].allChoice.push(choiceArray[0]);
    // console.log("New Question2",array)
    // choiceArray.push({Description: ''});
    // setInputQuestion(array);

    // console.log(choiceArray)
    // array[qId].allChoice.push(choiceArray[0]);
    // console.log("New Question10",array)

    // setInputQuestion(prev => {
    //   const newPrev = [...prev];
    //   console.log(choiceArray)
    //   newPrev[qId].allChoice.push(choiceArray[0]);
    //   console.log("New Question10",newPrev)
    //   return newPrev;
    // })

    // setInputQuestion(prev => {
    //   const newPrev = [...prev];
    //   const NewArray = newPrev[qId].allChoice.push(choiceArray[0]);
    //   console.log(newPrev);
    //   return newPrev;
    // })
    // setInputChoice(choiceArray);
    // console.log(array);
    // console.log(inputChoice);
  }
  
  const handleChangeValue = (e, j) => {
    const qId = e.target.id-1;
    // inputChoice.push({Description: e.target.value})
    
    // const array = [...inputQuestion];
    // array[qId].allChoice[j].splice(j,1 ,{Description: e.target.value});
    // setInputQuestion(array);

    // choiceArray[0]

    // console.log("indexvalue",j);

    // setInputQuestion[i].allChoice[j].splice(j,1 ,{Description: e.target.value});

    // console.log(qId);
    setInputQuestion(prev => {
      const newInputChoice = [...prev]; //newInputChoice[qId].allChoice[j].
      // console.log("ans", newInputChoice[qId].allChoice[j].radioCheck)
      newInputChoice[qId].allChoice.splice(j,1 ,{Description: e.target.value, radioCheck: newInputChoice[qId].allChoice[j].radioCheck, choiceError: false});
      // console.log(newInputChoice);
      // newInputChoice.splice(j,1 ,{Description: e.target.value});
      console.log("index",j, prev);
      return newInputChoice;
    });


    // inputChoice.splice(i,1 ,{Description: e.target.value});
    
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
  const handleChangeRadio = (e, j) => {
    
    const array = [...inputQuestion];
    const qId = e.target.id -1;
    // console.log("index", +e.target.value);
    // console.log("indexJ", j);
    array[qId].allChoice.map((item, k) => {
      if(item.radioCheck === true) {
       item.radioCheck = false
      }
      else {
        console.log("indexK", k);
        if(k === +e.target.value) {
       item.radioCheck = true
        }
      }
    })

    setInputQuestion(array);
    console.log("map", array[qId].allChoice);
    // setSelectedValue(e.target.value);
    
    // array[qId].allChoice.splice(0,j ,{Description: e.target.value, radioCheck: qId+1+""+j});
    // console.log("selectedValueArray", array);
    // setInputQuestion(array)

    // const array = [...inputQuestion];
    // array[qId].allChoice.splice(j,1 ,{Description: e.target.value, radioCheck: 'true'});
    // setInputQuestion(array);
  };
  const handleCheckErrorHeader = () => {
    const header = [...questionDetail];
    console.log('header=',header[0],'=',header[0].detail);
    if(header[0].detail === ''){
      console.log("5555", header);
      header[0].headerError = true;
      // header[0].headerError.splice(0,1,true);
      setQuestionDetail(header);
      // alert('please enter header value');
    }
    else{
      header[0].headerError = false;
      // header[0].headerError.splice(0,1,false);
      // header[0].headerError.splice(0,1,false);
      setQuestionDetail(header);
    }
  }

  const handleCheckErrorQuestion = () => {
    const array = [...inputQuestion];
    for(let i=0; i<array.length; i++){
      const questionHeader = array[i].questionHeader;
      // console.log('question',array[i],'=',questionHeader);
      if(questionHeader === ''){
        // alert('please enter question value');
        // array[i].questionError.splice(i,1,true);
        array[i].questionError = true;
        setInputQuestion(array);
      }
      else{
        array[i].questionError = false;
        setInputQuestion(array);
      }
    }
  }
  // const error = false;
  const handleCheckErrorChoice = () => {
    const array = [...inputQuestion];

    for(let i=0; i<array.length; i++){
      // const questionHeader = array[i].questionHeader;
      // console.log('question',array[i],'=',questionHeader);
      for(let j=0; j<array[i].allChoice.length; j++){
        const choice = array[i].allChoice[j].Description;
        // console.log('choice=',array[i].allChoice.length,'=',choice);
        if(choice === ''){
          // alert('please enter choice value');
          array[i].allChoice[j].choiceError = true;
          setInputQuestion(array);
        }
        else{
          array[i].allChoice[j].choiceError = false;
          setInputQuestion(array);
        }
      }
    }
  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    handleCheckErrorHeader();
    handleCheckErrorQuestion();
    handleCheckErrorChoice();
    // const payload = inputQuestion;
    // console.log("submit",payload);
    const payload = {
      questionDetail,
      inputQuestion
    }
    console.log('submit value', payload)
  }

  const handleOnChangeHeader = (e) =>{
    const header = [...questionDetail];
    console.log("header",header[0].detail);
    header.splice(0,1,{detail: e.target.value, headerError: false});
    setQuestionDetail(header);
    console.log(header);
  }

  function clearArray() {
    const array = [{
      qId: 1,
      questionHeader: '',
      allChoice: [{Description: '', radioCheck: true, choiceError: false}],
      questionError : false
    }]
    const questionDetail = [{detail: '', headerError: false}];
    setInputQuestion(array);
    setQuestionDetail(questionDetail);
    return array,questionDetail;
  }

  return (
    <div>
      <div>
        <form 
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={handleSubmit}
        noValidate>
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
              <Button type="reset" variant="contained" className={classes.btnCancel} onClick={clearArray}>
                CANCEL
              </Button>
            </Box>
          <Box className={classes.divLine}></Box>
          {/* question detail */}
            <Box p={3} mt={3} ml={3} mr={3} bgcolor="#FFFFFF">
              <Box component="h6" className={classes.h6}>
                Questionnaire Detail
              </Box>
              <TextField 
              className={classes.TextField} 
              label="Name" 
              variant="outlined"
              value={questionDetail.detail}
              onChange={handleOnChangeHeader}
              // {...register("questionDetail", { required: true })} // สำหรับใช้เช็ค validate อีกเเบบ โดยใช้ react hook
              // error={errors.questionDetail}
              // helperText={errors.questionDetail && "Question detail is required"}
              error={questionDetail[0].headerError === true ? true : false}
              helperText={questionDetail[0].headerError === true ? 'Question Header is required' : ''}
              required/>
            </Box>
            <Box ml={3} mr={3} bgcolor="#FFFFFF">
              {/* <Box component="div" className={classes.divLine}></Box> */}
              <Divider />
            </Box>

            {console.log("inputQuestion",inputQuestion)}
            {inputQuestion.map((x, i) =>
            { 
              const allChoice = x.allChoice;
              // {console.log("allChoice",allChoice)}
              return (
              <Box ml={3} mr={3} bgcolor="#FFFFFF"key={x.qId}>
                <Box pt={3} pl={3} pr={3}>
                  <Box>
                    <Box component="h6" className={classes.h6}>
                      Question {i+1}
                      </Box>
                    <TextField 
                    className={classes.TextField}
                    label="Question" 
                    variant="outlined"
                    id={i+1}
                    onChange={(e) => handleChangeQuestionHeader(e, i)}
                    value={x.questionHeader}
                    error={x.questionError === true ? true : false}
                    helperText={x.questionError === true ? 'Question is required' : ''}
                    // {...register(`errors.${i}.questionHeader`, [{ required: true }])}
                    // error={`errors.${i}.questionHeader`}
                    // helperText={`errors.${i}.questionHeader` && "Question Header is required"}
                    required/> 
                  </Box>
                  {/* {console.log(inputQuestion[i].allChoice)} */}

                  {/* {()=>{
                    const check1 = 'The answer is correct';
                    const check2 = '';
                    const check3 = 'Please fill in this option';

                    if(allChoice[j].radioCheck === true || handleCheckErrorChoice(allChoice[j].Description) === false){
                      return check1;
                    }
                    if(allChoice[j].radioCheck === false && handleCheckErrorChoice(allChoice[j].Description) === false){
                      return check2
                    }
                    else{
                      return check3;
                    }
                  }} */}

                  {allChoice.map((y, j) => (
                    <Box display="flex" flexDirection="row" alignItems="start"key={j} mt={3}>
                    {/* {console.log("y",allChoice[j].Description)}
                    {console.log("radioCheck",allChoice[j].radioCheck)}
                    {console.log("selectedValue",x.qId+''+j)}
                    {console.log("selectedValue2",selectedValue)} */}
                    <Radio 
                    // checked={allChoice[j].radioCheck === 'true'} 
                    // checked={allChoice[j].radioCheck === x.qId+''+j} 
                    checked={allChoice[j].radioCheck === true}
                    style={{marginTop: '8px', marginRight: '16px'}}
                    color="primary" 
                    name="radio-question"
                    value={j}
                    id={x.qId}
                    onChange={(e) => handleChangeRadio(e, j)}/>
                    <TextField 
                    className={classes.TextField}
                    label={"Description"} 
                    variant="outlined" 
                    helperText={allChoice[j].radioCheck === true && allChoice[j].choiceError === false ? "The answer is correct" : (allChoice[j].radioCheck === false && allChoice[j].choiceError === false ? '' : 'Please fill in this option')}
                    // helperText={()=>{
                    //   const text = '';
                    //   if(allChoice[j].radioCheck === true || handleCheckErrorChoice(allChoice[j].Description) === false){
                    //     text = 'The answer is correct';
                    //     return text;
                    //   }
                    //   else if(allChoice[j].radioCheck === false && handleCheckErrorChoice(allChoice[j].Description) === true){
                    //     text = 'Please fill in this option';
                    //     return text;
                    //   }
                    //   else{
                    //     text = '';
                    //     return text;
                    //   }
                    // }}
                    id={x.qId}
                    value={allChoice[j].Description}
                    onChange={(e) => handleChangeValue(e, j)}
                    error={allChoice[j].choiceError === true ? true : false}
                    // {...register(`errors.${j}.choice`, { required: true })}
                    // error={Boolean(`errors.${j}.choice`)}
                    // helperText={`errors.${j}.choice` && "Question is required"}
                    required/>
                    <IconButton 
                      color="primary"
                      style={{color: '#00040C', marginLeft: '24px', marginTop: '4px'}}
                      component="span"
                      onClick={()=> {
                        // const array = [...inputQuestion];
                        // array[i].allChoice.splice(j,1);
                        // setInputQuestion(array);
                        // console.log("delete",array);
                        
                        setInputQuestion(prev =>{
                          const newPrev = [...prev]
                          newPrev[i].allChoice.splice(j,1);
                          console.log("deletePrev",newPrev);
                          return newPrev;
                        })
                        
                        allChoice.find((element, indexJ) => {
                          const array = [...inputQuestion];
                          const find = allChoice[indexJ].radioCheck;
                          console.log("find",find);
                          if(find === true <= 0){
                            allChoice[0].radioCheck = true;
                            setInputQuestion(array);
                          }
                        })
                      }
                      }
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                  ))}
                </Box>

                {/* add Description */}
                <Box display="flex" alignItems="center" p={3}bgcolor="#FFFFFF">
                <Button
                  className={classes.p}
                  startIcon={<AddIcon />}
                  id={x.qId}
                  onClick={(e) => handleAddChoice(e, i)}
                >
                  ADD CHOICE
                </Button>
                </Box>

                {/* duplicate and delete */}
                <Box component="div" display="flex" alignItems="center" pl={3} pr={3}>
                  {/* <Box component="div" className={classes.divLine}></Box> */}
                  <Divider style={{width: '100%'}}/>
                </Box>
                
                <Box display="flex" alignItems="center" p={3} bgcolor="#FFFFFF">
                  <Button
                    className={classes.p1}
                    startIcon={<FileCopyOutlinedIcon />}
                    onClick={()=>{
                      setInputQuestion(prev=>{
                        const inputPrev = [...prev];
                        // console.log("inputPrev",inputPrev);
                        const newDup = [
                          {
                            Description: '',
                            radioCheck: '',
                            choiceError: '',
                          }
                        ];
                        inputPrev[i].allChoice.map((item, j) => {
                          newDup.push({Description: item.Description, radioCheck: item.radioCheck, choiceError: item.choiceError});
                          // console.log("mapDUPDIP", item);
                        })
                        newDup.splice(0,1);
                        console.log("allMap", newDup);
                        
                        const newPrev = {
                          qId: inputPrev.length+1,
                          questionHeader: x.questionHeader,
                          allChoice: newDup,
                          questionError: x.questionError
                        }
                        inputPrev.push(newPrev);

                        // console.log("dup",inputPrev[i.length-1]);
                        // console.log("dupLength",NewPrev.length);
                        // NewPrev.splice(inputPrev.length);
                        console.log("allQuestion", inputPrev);
                        return inputPrev;
                      })
                    }}
                  >
                    DUPLICATE
                  </Button>

                  <Button
                    className={classes.p1}
                    startIcon={<DeleteOutlineIcon />}
                    onClick={()=> {
                      // const array = [...inputQuestion]
                      // const Selectindex = inputQuestion.indexOf(i)
                      // array.splice(Selectindex, 1)
                      // setInputQuestion(array)
  
                      const array = [...inputQuestion];
                      array.splice(i, 1);
                      setInputQuestion(array);
                      // console.log(array);
                    }}
                  >
                    DELETE
                  </Button>
                  {/* <Box
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
                  </Box> */}
                </Box>
                <Box bgcolor="#FFFFFF">
                  {/* <Box className={classes.divLine}></Box> */}
                  <Divider />
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
