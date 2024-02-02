import React,{useState, useEffect} from 'react'
import { MainWrpr, Header, Heading, EmptyWrpr, Footer, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import FormA1type from '../formA1';
import SavePopUp from '../SavePopUp';
import axios from 'axios';

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function DynamicDisplayComp2({name, CrossClick}) {
  const [completeFormData, setCompleteFormData] = useState([])
  const [savePopUp, setSavePopUp] = useState(false)
  const [receivedArray, setReceivedArray] = useState([]);

  const handleArrayChange = (updatedArray) => {
    setReceivedArray(updatedArray);
  };

  const GetFormFunction = async (name) => {
    try{
      let request = await axios.get(`${REACT_APP_API_BASE_URL}juniorA2/formData?for=${name}`)
      setCompleteFormData(request.data);
    } catch (e) {
      console.log(e)
    }
  }

  const crossClickFunc = () => {
    CrossClick()
  }

  const GrithFinderFunc = (data) => {
    if(data.formData){
      return(data.formData[0].options.length)
    } else {
      // nothing to execute
    }
  }

  const ArrayLengthFunc = (data) => {
    if(data.formData){
      return(data.formData.length)
    } else if(data.arrayData){
      return(data.arrayData.length)
    }
  }

  const SubmitForm = ()=>{
    setSavePopUp(!savePopUp)
  }

  useEffect(()=>{
    GetFormFunction(name)
  },[name])

  return (
    <>
    <MainWrpr>
      <Header>
        <Heading>
          {`${name}'s Appraisal Form (A2)`}
        </Heading>
        <CrossIcon onClick={crossClickFunc} style={{cursor: 'pointer'}}/>
      </Header>
      <EmptyWrpr>
        {completeFormData?.formData ? (
          <FormA1type 
            formData={completeFormData?.formData} 
            name={completeFormData?.name}
            onArrayChange={handleArrayChange} 
            width={GrithFinderFunc(completeFormData)}
          />
        ) : (
          <>
              <h1>{completeFormData.content}</h1>
              <span>For further details contact support
                <a href='mailto:someone@exaple.com'> someone@exaple.com</a>
              </span>
            </>
        )}
      </EmptyWrpr>
      <Footer>
        <SubmitButton onClick={SubmitForm}>
          Submit Form
        </SubmitButton>
      </Footer>
    </MainWrpr>
    {savePopUp &&
      <SavePopUp
        myArray={receivedArray}
        comparingArrayData={ArrayLengthFunc(completeFormData)}
        cancelFunc={SubmitForm}
        passedFormName={completeFormData.name}
        name={name}
      />
    }
    </>
  )
}
