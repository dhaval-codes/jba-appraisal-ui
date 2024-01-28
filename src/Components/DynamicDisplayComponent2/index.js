import React,{useState, useEffect} from 'react'
import { MainWrpr, Header, Heading, EmptyWrpr, Footer, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import FormA1type from '../formA1';
import axios from 'axios';

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function DynamicDisplayComp2({name, CrossClick}) {
  const[formData, setFormData] = useState([])

  const GetFormFunction = async (name) => {
    try{
      let request = await axios.get(`${REACT_APP_API_BASE_URL}juniorA2/formData?for=${name}`)
      setFormData(request.data.formData);
    } catch (e) {
      console.log(e)
    }
  }

  const crossClickFunc = () => {
    CrossClick()
  }

  useEffect(()=>{
    GetFormFunction(name)
  },[name])

  return (
    <MainWrpr>
      <Header>
        <Heading>
          {`${name}'s Appraisal Form (A2)`}
        </Heading>
        <CrossIcon onClick={crossClickFunc} style={{cursor: 'pointer'}}/>
      </Header>
      <EmptyWrpr>
        <FormA1type formData={formData} name={name}/>
      </EmptyWrpr>
      <Footer>
        <SubmitButton>Submit Form</SubmitButton>
      </Footer>
    </MainWrpr>
  )
}
