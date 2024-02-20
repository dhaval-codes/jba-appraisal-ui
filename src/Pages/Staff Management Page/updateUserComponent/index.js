import React, { useState } from 'react'
import { FormLabel, FormWrpr, InputBoxOne, MainWrpr, SegmentWrprOne, SubmitButtonOne } from './index.sc'
import axios from 'axios';

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function UpdateUserComponent() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const checkFunction = async () => {
        try{
            const role = window.sessionStorage.getItem('role')
            const response = await axios.post(`${REACT_APP_API_BASE_URL}admin/checkExistence`,{
                role: role,
                staffCode: parseInt(inputValue)
            })
        } catch (e) {

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
            </FormWrpr>
        </div>
    </MainWrpr>
  )
}
