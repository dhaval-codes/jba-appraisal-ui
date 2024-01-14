import React from 'react'
import { EmptyWrpr, Footer, Header, Heading, MainWrpr, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import FormA1type from '../formA1'
import { formData } from '../../Utils/formA1dummyData'

export default function DynamicDisplayComp({openForm}) {

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
            <FormA1type formData={formData}/>
        </EmptyWrpr>
        <Footer>
          <SubmitButton onClick={SubmitForm}>Submit Form</SubmitButton>
        </Footer>
    </MainWrpr>
  )
}
