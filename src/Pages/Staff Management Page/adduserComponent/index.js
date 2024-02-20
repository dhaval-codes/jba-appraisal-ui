import React, { useState } from 'react';
import { FormLabel, InputBox, MainFormWrpr, SectionWrpr, SelectBox, SubmitButton, ErrorWrpr, SuccessWrpr } from './index.sc';
import axios from 'axios';
import TickGif from '../../../Assets/Gifs/check-green.gif'

const newUserArray = [
    {
        label: "Employee Name:",
        placeholder: "Enter new employee's name",
        type: "inputBox",
        stateKey: "employeeName" 
    },
    {
        label: "Select Role for the Employee:",
        options: ["select role", "teacher", "HOD", "Co-ordinator", "Admin"],
        type: "roleDropdown",
        stateKey: "role" 
    },
    {
        label: "Enter Employee's Staff Code:",
        placeholder: "i.e. 404",
        type: "inputBox",
        stateKey: "staffCode" 
    },
    {
        label: "Select Employee's Department:",
        options: ["select department", "english", "hindi", "maths", "science", "cs", "commerce", "humanities", "psycology", "pe", "perArts", "lib", "office", "senior", "junior", "other"],
        type: "deptDropdown",
        stateKey: "department" 
    },
    {
        label: "Initialise with a dummy password:",
        placeholder: "i.e. Hey@123",
        type: 'inputBox',
        stateKey: "password" 
    }
];

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function AddUserComponent() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleInputChange = (stateKey, value) => {
        setFormData(prevState => ({
            ...prevState,
            [stateKey]: value
        }));
    };

    const handleSubmit = async () => {
        try{
            if (
                ( formData.hasOwnProperty('employeeName') &&  formData.employeeName !== "") &&
                ( formData.hasOwnProperty('role') && formData.role !== 'select role') &&
                ( formData.hasOwnProperty('staffCode') &&  formData.staffCode !== "") &&
                ( formData.hasOwnProperty('department') && formData.department !== 'select department') &&
                ( formData.hasOwnProperty('password') &&  formData.password !== "")
            ){
                const Role = window.sessionStorage.getItem('role')  
                formData.globalRole = Role 
                let response = await axios.post(`${REACT_APP_API_BASE_URL}admin/addUser`, formData)
                if(response.data === true) {
                    setSuccess(true)
                    setTimeout(()=>{
                        setSuccess(false)
                        window.location.reload();
                    }, 1650)
                }
            } else {
                setError(true)
                setTimeout(()=> {
                    setError(false)
                }, 2000);
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <MainFormWrpr>
            <div className='div'>
                <div>
                {newUserArray.map((item, index) => (
                    <SectionWrpr key={index}>
                        {item.type === 'inputBox' ? (
                            <>
                                <FormLabel>{item.label}</FormLabel>
                                <InputBox
                                    placeholder={item.placeholder}
                                    onChange={(e) => handleInputChange(item.stateKey, e.target.value)}
                                />
                            </>
                        ) : item.type === 'roleDropdown' || item.type === 'deptDropdown' ? (
                            <>
                                <FormLabel>{item.label}</FormLabel>
                                <SelectBox
                                    onChange={(e) => handleInputChange(item.stateKey, e.target.value)}
                                >
                                    {item.options.map((option, i) => (
                                        <option key={i} value={option}>{option}</option>
                                    ))}
                                </SelectBox>
                            </>
                        ) : null}
                    </SectionWrpr>
                ))}
                </div>
                <SubmitButton onClick={handleSubmit}>Create Employee Profile</SubmitButton>
            </div>
            
            {error && (
                <ErrorWrpr>
                    Please fill the form completly and as per norms
                </ErrorWrpr>
            )}

            {success && (
                <SuccessWrpr src={TickGif}/>
            )}
        </MainFormWrpr>
        
    );
}
