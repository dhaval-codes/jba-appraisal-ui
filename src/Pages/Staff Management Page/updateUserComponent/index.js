import React, { useState, useEffect } from 'react'
import { ErrorWrpr, FormLabel, FormWrpr, InputBox, InputBoxOne, MainWrpr, SegmentWrpr, SegmentWrprOne, SelectBox, SubmitButton, SubmitButtonOne, SuccessWrpr } from './index.sc'
import axios from 'axios';
import TickGif from '../../../Assets/Gifs/check-green.gif'
import { passwordRegex } from '../../../Utils/passwordRegex';

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function UpdateUserComponent() {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState({})
    const [nameVar, setNameVar] = useState('')
    const [passVar, setPasswordVar] = useState('')
    const [roleOptions, setRoleOptions] = useState([])
    const [deptOptions, setDeptOptions] = useState([])
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    // Event handler for role selection change
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    // Event handler for department selection change
    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handelNameInputChange = (event) =>{
        setNameVar(event.target.value)
    }

    const handelPasswordInputChange = (event) => {
        setPasswordVar(event.target.value)
    }

    const checkFunction = async () => {
        try{
            const role = window.sessionStorage.getItem('role')
            const response = await axios.post(`${REACT_APP_API_BASE_URL}admin/checkExistence`,{
                role: role,
                staffCode: parseInt(inputValue)
            })
            setResponseData(response.data)
            //dealing role options
            const options = ["teacher", "HOD", "Co-ordinator", "Admin"];
            const filteredOptions = options.filter(option => option !== response.data.role);
            setRoleOptions([response.data.role,...filteredOptions]);

            //dealing dept options
            const depts = ["select department", "english", "hindi", "maths", "science", "cs", "commerce", "humanities", "psycology", "pe", "perArts", "lib", "office", "senior", "junior", "other"]
            const deptFilterd = depts.filter(option => option !== response.data.department)
            setDeptOptions([response.data.department,...deptFilterd])

        } catch (e) {
            console.log(e)
        }
    }

    const updateFuncTrigger = async () => {
        const globalRole = window.sessionStorage.getItem('role')
        try{
            if(passwordRegex.test(passVar)) {
                let updateValues = await axios.put(`${REACT_APP_API_BASE_URL}admin/updateEmployee`,{
                    globalRole: globalRole,
                    name: nameVar,
                    password: passVar,
                    staffCode: inputValue,
                    role: selectedRole,
                    department: selectedDepartment
                })
                if(updateValues.data === true) {
                    setSuccess(true)
                    setTimeout(()=>{
                        setSuccess(false)
                        window.location.reload()
                    }, 1650)
                }
            } else {
                setError(true)
                setTimeout(()=>{
                    setError(false)
                },2000)
            }

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        setNameVar(responseData.name)
        setPasswordVar(responseData.password)
    },[responseData])


  return (
    <MainWrpr>
        <div className='div'>
            <FormWrpr>
                <SegmentWrprOne>
                    <FormLabel>Find Employee:</FormLabel>
                    <InputBoxOne 
                        placeholder='Enter staff code to search'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <SubmitButtonOne onClick={checkFunction}>
                        Search Employee
                    </SubmitButtonOne>
                </SegmentWrprOne>
                {responseData.name && (
                    <>
                        <SegmentWrpr>
                            <FormLabel>
                                Name:
                            </FormLabel>
                            <InputBox value={nameVar} onChange={handelNameInputChange}/>
                        </SegmentWrpr>
                        <SegmentWrpr>
                            <FormLabel>
                                Password:
                            </FormLabel>
                            <InputBox value={passVar} onChange={handelPasswordInputChange}/>
                        </SegmentWrpr>
                        <SegmentWrpr>
                            <FormLabel>
                                Role:
                            </FormLabel>
                            <SelectBox onChange={handleRoleChange} value={selectedRole}>
                                {roleOptions.map((item, i) => (
                                    <option key={i} value={item}>{item}</option>
                                ))}
                            </SelectBox>
                        </SegmentWrpr>
                        <SegmentWrpr>
                            <FormLabel>
                                Department:
                            </FormLabel>
                            <SelectBox onChange={handleDepartmentChange} value={selectedDepartment}>
                                {deptOptions.map((item, i) => (
                                    <option key={i} value={item}>{item}</option>
                                ))}
                            </SelectBox>
                        </SegmentWrpr>
                    </>

                )}
            </FormWrpr>
            {responseData.name && (
            <SubmitButton onClick={updateFuncTrigger}>Update Employee</SubmitButton>
            )}
        </div>
        {error && (
            <ErrorWrpr>
                Please fill the form completly and as per norms
            </ErrorWrpr>
        )}
        {success && (
            <SuccessWrpr src={TickGif}/>
        )}
    </MainWrpr>
  )
}
