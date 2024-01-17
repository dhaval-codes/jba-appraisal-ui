import React from 'react'
import { EmptyWrpr, Footer, Header, Heading, MainWrpr, SubmitButton } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'
import FormA1type from '../formA1'
import FormCtype from '../formC'

export default function DynamicDisplayComp({openForm, data}) {

  const SubmitForm = ()=>{
    openForm();
  }

  return (
    <MainWrpr>
        <Header>
            <Heading>{data.name}</Heading>
            <CrossIcon style={{cursor: 'pointer'}} onClick={openForm}/>
        </Header>
        <EmptyWrpr>
          {data.formData ? (
            <FormA1type formData={data.formData}/>
          ) : data.arrayData ? (
            <FormCtype data={data.arrayData}/>
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
  )
}
