import React,{useState} from 'react'
import { EmptyWrpr, Footer, Header, Heading, MainWrpr, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import FormA1type from '../formA1'
import FormCtype from '../formC'
import SavePopUp from '../SavePopUp'

export default function DynamicDisplayComp({openForm, data}) {
  const [showSavePopUp, setShowSavePopUp] = useState(false);
  const [receivedArray, setReceivedArray] = useState([]);

  const handleArrayChange = (updatedArray) => {
    setReceivedArray(updatedArray);
    // console.log(receivedArray,"recieved array")
  };

  const ArrayLengthFunc = (data) => {
    if(data.formData){
      return(data.formData.length)
    } else if(data.arrayData){
      return(data.arrayData.length)
    }
  }

  const GrithFinderFunc = (data) => {
    if(data.formData){
      return(data.formData[0].options.length)
    } else {
      // nothing to execute
    }
  }

  const SubmitForm = ()=>{
    setShowSavePopUp(!showSavePopUp)
  }

  return (
    <>
    <MainWrpr>
        <Header>
            <Heading>{data.name}</Heading>
            <CrossIcon style={{cursor: 'pointer'}} onClick={openForm}/>
        </Header>
        <EmptyWrpr>
          {data.formData ? (
            <FormA1type 
              formData={data.formData} 
              onArrayChange={handleArrayChange} 
              width={GrithFinderFunc(data)}
            />
          ) : data.arrayData ? (
            <FormCtype 
              data={data.arrayData} 
              onArrayChange={handleArrayChange}
            />
          ) : (
            <>
              <h1>{data.content}</h1>
              <span>For further details contact support
                <a href='mailto:someone@exaple.com'> someone@exaple.com</a>
              </span>
            </>
          )}
        </EmptyWrpr>
        <Footer>
          {data.formData || data.arrayData ? (
            <SubmitButton onClick={SubmitForm}>Submit Form</SubmitButton>
          ) : <></>}
        </Footer>
    </MainWrpr>
    {showSavePopUp && (
      <SavePopUp 
        myArray={receivedArray}
        comparingArrayData={ArrayLengthFunc(data)}
        cancelFunc={SubmitForm}
        passedFormName={data.name}
      />
    )} 
    </>
  )
}
