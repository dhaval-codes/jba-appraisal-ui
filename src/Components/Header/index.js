import React from 'react'
import { Heading, MainWrpr } from './index.sc'
import { ReactComponent as Logo } from '../../Assets/Images/SVGs/header-logo.svg'

export default function ApplicationHeader() {
  return (
    <MainWrpr>
        <Logo/>
        <Heading>Welcome Mr. ABC</Heading>
    </MainWrpr>
  )
}
