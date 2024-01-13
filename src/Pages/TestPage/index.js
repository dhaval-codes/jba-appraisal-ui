import React from 'react'
import { MainWrpr } from './index.sc'
import FormA1type from '../../Components/formA1'
import { formData } from '../../Utils/formA1dummyData'

export default function TestPage() {
  return (
    <MainWrpr>
        <FormA1type formData={formData}/>
    </MainWrpr>
  )
}
