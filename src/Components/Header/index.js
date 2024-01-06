import React,{useState, useEffect} from 'react'
import { Heading, MainWrpr } from './index.sc'
import { ReactComponent as Logo } from '../../Assets/Images/SVGs/header-logo.svg'

export default function ApplicationHeader() {
  const [loginName, setLoginName]=useState('')

  useEffect(()=>{
    setLoginName(window.sessionStorage.getItem('name'))
  },[])

  return (
    <MainWrpr>
        <Logo/>
        <Heading>{`Welcome ${loginName}`}</Heading>
    </MainWrpr>
  )
}
