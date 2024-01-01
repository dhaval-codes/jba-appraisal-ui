import React from 'react'
import { EmptyWrpr, Header, Heading, MainWrpr } from './index.sc'
import { ReactComponent as CrossIcon } from '../../Assets/Images/SVGs/Cross.svg'

export default function DynamicDisplayComp() {
  return (
    <MainWrpr>
        <Header>
            <Heading>Dhaval</Heading>
            <CrossIcon style={{cursor: 'pointer'}}/>
        </Header>
        <EmptyWrpr>
            <h1>This form is filled by HOD</h1>
            <span>The form is 64% filled, please contact support@xyz.in for further assistance</span>
        </EmptyWrpr>
    </MainWrpr>
  )
}
