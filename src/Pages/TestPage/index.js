import React from 'react'
import { MainWrpr } from './index.sc'
import axios from 'axios';


export default function TestPage() {

  const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const TestAPIFunc = async () =>{
    const date = new Date();
    let response = await axios.post(`${REACT_APP_API_BASE_URL}test`,{
      date: date
    })
    console.log(response)
  }

  return (
    <MainWrpr>
      <button onClick={()=>TestAPIFunc()}>Click me</button>
    </MainWrpr>
  )
}
