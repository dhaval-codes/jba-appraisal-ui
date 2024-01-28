import React,{ useState, useEffect } from 'react'
import { BufferImage, FormWrpr, GreenCircle, Heading, HeadingWrpr, InputBox, Label, MainWrpr, PopUpWrpr, SectionWrpr, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import axios from 'axios'
import Buffer from '../../Assets/Gifs/loading-buffering.gif'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function PasswordPopUp({closeFunction}) {

    const [tempPassword, setTempPassword] = useState('')
    const [name, setName] = useState('')
    const [checkingPassword, setCheckingPassword] = useState(false)
    const [showGreenTick, setShowGreenTick] = useState(false)

    const CheckFunc = async (event) => {
        const { value } = event.target;
        setTempPassword(value);
        try{
            const response = await axios.post(`${REACT_APP_API_BASE_URL}setPassword`,{
                name: name,
                checkPassword: event.target.value,
            })
            console.log(response)
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
        <FormWrpr>
            <SectionWrpr>
                <Label htmlFor='oldPassword'>
                    Old Password:
                    {checkingPassword && (
                        <BufferImage src={Buffer}/>
                    )}
                    {showGreenTick && (
                        <GreenCircle/>
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
                <Label htmlFor='confNewPassword'>Confirm New Password:</Label>
                <InputBox id='confNewPassword'/>
            </SectionWrpr>
        </FormWrpr>
        <SubmitButton>Change Password</SubmitButton>
      </PopUpWrpr>
    </MainWrpr>
  )
}
