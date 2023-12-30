import React,{useState} from 'react'
import { Container, FormLabel, InputBox, LoginDiv, MainWrpr, PopUp, PopUpWrpr, SubmitButton, Trouble, Warning } from './index.sc'
import BackgroundImage from '../../Assets/Images/PNGs/background.png'
import { ReactComponent as Logo } from '../../Assets/Images/SVGs/login-logo.svg'

const MapingArray = [
  {
    label: 'Employee ID:',
    placeHolder: 'Entire your employee ID',
    inputType: 'text',
    className: 'regex'
  },
  {
    label: 'Password:',
    placeHolder: 'Enter your password',
    inputType: 'password',
    className: 'non-regex'
  }
]

export default function LoginPage() {

  const [errorVar, setErrorVar] = useState(false);

  const SubmitFunc = () => {
    let InputToCheck = document.getElementsByClassName('regex')[0];
    const regex = /^\d{2,4}$/;
    if ( regex.test(InputToCheck.value)){
      console.log('Login successfully')
    } else {
      setErrorVar(true);
      setTimeout(()=> {
        setErrorVar(false)
      }, 2000);
      InputToCheck.value='';
    }
  }
  
  return (
    <MainWrpr bg={BackgroundImage}>
      <LoginDiv>
        <Logo style={{marginBottom:'2rem'}}/>
        {MapingArray.map((item)=>(
          <Container>
            <FormLabel>{item.label}</FormLabel>
            <InputBox placeholder={item.placeHolder} type={item.inputType} className={item.className}/>
          </Container>
        ))}
        <Container>
          <SubmitButton onClick={SubmitFunc}>
            Log In
          </SubmitButton>
          <Trouble>Trouble in Logging In, contact <a href="mailto:someone@example.com">support@xyz.in</a></Trouble>
        </Container>
      </LoginDiv>
      {errorVar &&(
      <PopUpWrpr>
        <PopUp>
          <Warning>Employee ID entered is wrong</Warning>
        </PopUp>
      </PopUpWrpr>
      )}
    </MainWrpr>
  )
}
