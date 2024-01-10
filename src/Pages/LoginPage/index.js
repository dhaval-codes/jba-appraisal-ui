import React,{useState, useEffect} from 'react'
import { Container, FormLabel, InputBox, LoginDiv, MainWrpr, PopUp, PopUpWrpr, SubmitButton, Trouble, Warning } from './index.sc'
import BackgroundImage from '../../Assets/Images/PNGs/background.png'
import { ReactComponent as Logo } from '../../Assets/Images/SVGs/login-logo.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

  useEffect(()=>{
    window.sessionStorage.setItem('name', '');
    window.sessionStorage.setItem('role', '')
  },[])

  const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const navigate = useNavigate();

  const enterPress = (event) => {
    event.key === 'Enter' ? SubmitFunc() : console.log('key press counter')
  }

  const SubmitFunc =  async () => {
    let InputToCheck = document.getElementsByClassName('regex')[0];
    let PasswordToCheck = document.getElementsByClassName('non-regex')[0];  
      try{
        const response = await axios.post(`${REACT_APP_API_BASE_URL}loginUser`, {
          staffCode: parseInt(InputToCheck.value),
          password: PasswordToCheck.value
        }) 
        if(response.data[0] !== undefined){
          window.sessionStorage.setItem("name", response.data[0].name);
          window.sessionStorage.setItem("role", response.data[0].role);
          window.sessionStorage.setItem("department", response.data[0].department);
          console.log(window.sessionStorage.getItem('role')) 
          navigate("/Staff")
        } else {
          setErrorVar(true);
          setTimeout(()=> {
            setErrorVar(false)
          }, 2000);
          InputToCheck.value='';
          PasswordToCheck.value='';
        }
      }
      catch (error) {
        console.log(error);
      }
  } 

  return (
    <MainWrpr bg={BackgroundImage}>
      <LoginDiv>
        <Logo style={{marginBottom:'2rem'}}/>
        {MapingArray.map((item)=>(
          <Container onKeyDown={enterPress}>
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
          <Warning>Employee ID or <br/> Password entered is wrong</Warning>
        </PopUp>
      </PopUpWrpr>
      )}
    </MainWrpr>
  )
}
