import React,{useEffect, useState} from 'react'
import { ButtonContainer, CancelButton, Container, MainBackgroundWrpr, MainPopUp, SubmitButton, WarningText } from './index.sc'
import axios from 'axios'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function SavePopUp({myArray, cancelFunc, comparingArrayData, passedFormName, name}) {
    const [textColor, setTextColor] = useState('')
    const [warningToShow, setWarningToShow] = useState('Do you want to submit the form')
    const [loginName, setLoginName] = useState('')
    const [formName, setFormName] = useState('')
    const [applicantsName, setApplicantsName] = useState('')
    const [globalRole, setGlobalRole] = useState('')
    const [globalDepartment, setGlobalDepartment] = useState('')
    const [sendArray, setSendArray] = useState([])

    // date/time constant
    const currentDate = new Date();

    const CheckArrayFunc = (myArray, compare) => {
        if (myArray.some(element => element === undefined || null)) {
            setTextColor('warning');
            setWarningToShow("Form is not completely filled! Once submitted can't fill again");
        }

        if (myArray.some(element => element === '')) {
            setTextColor('warning');
            setWarningToShow("Form is not completely filled! Once submitted can't fill again");
        }
      
        if (myArray.length < compare) {
            setTextColor('warning');
            setWarningToShow("Form is not completely filled! Once submitted can't fill again");
        }
    };
      
    const SubmitFormFunction = async () => {
        try{
            const response = await axios.post(`${REACT_APP_API_BASE_URL}submitForm`,{
                formName: formName,
                filledBy: loginName,
                applicantsName: applicantsName,
                fillersDesignation: globalRole,
                applicantsDepartment: globalDepartment,
                timePeriod: currentDate,
                filledData: sendArray
            })
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(()=>{
        CheckArrayFunc(myArray, comparingArrayData);
    },[myArray, comparingArrayData]);

    useEffect(()=>{
        setLoginName(window.sessionStorage.getItem('name'))
        setFormName(passedFormName)
        setApplicantsName(name)
        setGlobalRole(window.sessionStorage.getItem('role'))
        setGlobalDepartment(window.sessionStorage.getItem('department'))
        setSendArray(myArray)
    },[loginName,formName,applicantsName,globalRole,globalDepartment,sendArray, myArray, name, passedFormName])

  return (
    <MainBackgroundWrpr>
        <MainPopUp>
            <Container>
                <WarningText color={textColor}>{warningToShow}</WarningText>
                <ButtonContainer>
                    <SubmitButton onClick={SubmitFormFunction}>Submit</SubmitButton>
                    <CancelButton onClick={cancelFunc}>Cancel</CancelButton>
                </ButtonContainer>
            </Container>
        </MainPopUp>
    </MainBackgroundWrpr>
  )
}
