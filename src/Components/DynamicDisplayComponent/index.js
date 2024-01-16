import React,{useState} from 'react'
import { EmptyWrpr, Footer, Header, Heading, MainWrpr, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import FormA1type from '../formA1'
import { formData } from '../../Utils/formA1dummyData'

export default function DynamicDisplayComp({openForm}) {

  const [formDataState, setFormDataState] = useState()

  const SubmitForm = ()=>{
    openForm();
  }

  return (
    <MainWrpr>
        <Header>
            <Heading>Dhaval</Heading>
            <CrossIcon style={{cursor: 'pointer'}} onClick={openForm}/>
        </Header>
        <EmptyWrpr>
          {formDataState ? (
            <FormA1type formData={formDataState}/>
          ): (
            <>
              <h1>This form is filled by your Senior</h1>
              <span>For further details contact support
                <a href='mailto:someone@exaple.com'> someone@exaple.com</a>
              </span>
            </>
          )}
        </EmptyWrpr>
        <Footer>
          {formDataState ? (
            <SubmitButton onClick={SubmitForm}>Submit Form</SubmitButton>
          ) : <></>}
        </Footer>
    </MainWrpr>
  )
}
