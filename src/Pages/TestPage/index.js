import React from 'react'
import { MainWrpr } from './index.sc'
import SavePopUp from '../../Components/SavePopUp'


export default function TestPage() {
  return (
    <MainWrpr>
      <SavePopUp myArray={[2,3,4,5,9,2,3,4,5,9,2,3,4,5,9]}/>
    </MainWrpr>
  )
}
