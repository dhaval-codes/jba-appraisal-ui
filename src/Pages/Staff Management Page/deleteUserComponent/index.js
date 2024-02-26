import React, {useState} from 'react'
import { FormLabel, FormWrpr, InputBoxOne, MainWrpr, MySegment, SegmentWrprOne, SubmitButton, SubmitButtonOne } from './index.sc'
import axios from 'axios';
import { SuccessWrpr } from '../updateUserComponent/index.sc';
import TickGif from '../../../Assets/Gifs/check-green.gif'
import ErrorGif from '../../../Assets/Gifs/erroe.gif'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function DeleteUserComponent() {
    const [inputValue, setInputValue] = useState('');
    const [mappingArray, setMappingArray] = useState([])
    const [sendingRefrence, setSendingRefrece] = useState()
    const [success, setSuccess] = useState(false)
    const [faliure, setFaliure] = useState(false)

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const checkFunction = async () =>{
        const globalRole = window.sessionStorage.getItem('role')
        try{
            const response = await axios.post(`${REACT_APP_API_BASE_URL}admin/checkExistence`,{
                role: globalRole,
                staffCode: parseInt(inputValue)
            })
            const mappingArray = [
                {
                    label: 'Name:',
                    value: response.data.name
                },
                {
                    label: 'Password:',
                    value: response.data.password
                },
                {
                    label: "Role:",
                    value: response.data.role
                },
                {
                    label: "Department:",
                    value: response.data.department
                }
            ]
            setMappingArray(mappingArray)
            setSendingRefrece(response.data.staffCode)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteEmployeFunc = async () => {
        try{
            const globalRole = window.sessionStorage.getItem('role')
            let update = await axios.post(`${REACT_APP_API_BASE_URL}admin/deleteProfile`,{
                globalRole: globalRole,
                staffCode: sendingRefrence
            })
            if(update.data === true) {
                setSuccess(true)
                setTimeout(()=>{
                    setSuccess(false)
                    window.location.reload()
                },1650)
            } else if (update.data === 'No'){
                setFaliure(true)
                setTimeout(()=>{
                    setFaliure(false)
                    window.location.reload()
                },1650)
            }
        } catch (e) {
            console.log(e)
        }
    }

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
                {mappingArray.map((item,i)=>(
                    <MySegment key={i}>
                            {item.label}<span>{item.value}</span>
                    </MySegment>
                ))}
            </FormWrpr>
            {mappingArray.length !== 0 && (
                <SubmitButton onClick={deleteEmployeFunc}>Delete Employee</SubmitButton>
            )}
        </div>
        {success && (
            <SuccessWrpr src={TickGif}/>
        )}
        {faliure && (
            <SuccessWrpr src={ErrorGif}/>
        )}
    </MainWrpr>
  )
}
