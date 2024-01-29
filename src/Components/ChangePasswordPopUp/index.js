import React,{ useState, useEffect } from 'react'
import { BufferImage, FormWrpr, GifImg, GreenCircle, Heading, HeadingWrpr, InputBox, Label, MainWrpr, PopUpWrpr, SectionWrpr, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import axios from 'axios'
import Buffer from '../../Assets/Gifs/loading-buffering.gif'
import Check from '../../Assets/Gifs/check-green.gif'
import { passwordRegex } from '../../Utils/passwordRegex'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function PasswordPopUp({closeFunction}) {

    const [tempPassword, setTempPassword] = useState('')
    const [name, setName] = useState('')
    const [checkingPassword, setCheckingPassword] = useState(false)
    const [showGreenTick, setShowGreenTick] = useState(false)
    const [doubleCheckBool, setDoubleCheckBool] = useState(false)
    const [doublePassword, setDoublePassword] = useState('')
    const [successVar, setSuccessVar] = useState(false)

    const CheckFunc = async (event) => {
        const { value } = event.target;
        setTempPassword(value);
        try{
            const response = await axios.post(`${REACT_APP_API_BASE_URL}setPassword`,{
                name: name,
                checkPassword: event.target.value,
            })
            if(response.data.length === 0){
                setCheckingPassword(true)
                setShowGreenTick(false)
            } else {
                setCheckingPassword(false)
                setShowGreenTick(true)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const CrossCheckFunc = (event) => {
        setDoublePassword(event.target.value)
        const checkInput = document.getElementById('newPassword')
        if(passwordRegex.test(checkInput.value)){
            if(checkInput.value === event.target.value){
                setDoubleCheckBool(true)
            } else {
                setDoubleCheckBool(false)
            }
        } else {
            setDoubleCheckBool(false)
        }
        
    }

    const ChangePasswordFunc = async () => {
        try{
            let response = await axios.post(`${REACT_APP_API_BASE_URL}applyChangedPassword`, {
                name: name,
                oldPassword: tempPassword,
                newPassword: doublePassword
            })
            setSuccessVar(response.data)
            setTimeout(() => {
                closeFunction();
            }, 1600);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        setName(window.sessionStorage.getItem('name'))
    },[])

  return (
    <MainWrpr>
      <PopUpWrpr>
        <HeadingWrpr>
            <Heading>
                Change Password
            </Heading>
            <CrossIcon style={{cursor:'pointer'}} onClick={()=>closeFunction()}/>
        </HeadingWrpr>
        {successVar ? (
            <GifImg src={Check}/>
        ) : (
            <>
        <FormWrpr>
            <SectionWrpr>
                <Label htmlFor='oldPassword'>
                    Old Password:
                    {checkingPassword && (
                        <BufferImage src={Buffer}/>
                    )}
                    {showGreenTick && (
                        <GreenCircle color='#00ff00'/>
                    )}
                </Label>
                <InputBox 
                    id='oldPassword'
                    value={tempPassword}
                    onChange={CheckFunc}
                />
            </SectionWrpr>
            <SectionWrpr>
                <Label htmlFor='newPassword'>New Password:</Label>
                <InputBox id='newPassword'/>
            </SectionWrpr>
            <SectionWrpr>
                <Label htmlFor='confNewPassword'>
                    Confirm New Password:
                    {!doubleCheckBool ? (
                        <GreenCircle color='#ff0000'/>
                    ) : (
                        <GreenCircle color='#00ff00'/>
                    )}
                </Label>
                <InputBox 
                    id='confNewPassword'
                    value={doublePassword}
                    onChange={CrossCheckFunc}
                />
            </SectionWrpr>
        </FormWrpr>
        <SubmitButton 
            onClick={()=>ChangePasswordFunc()}
        >
            Change Password
        </SubmitButton>
        </>
        )}
        
      </PopUpWrpr>
    </MainWrpr>
  )
}
