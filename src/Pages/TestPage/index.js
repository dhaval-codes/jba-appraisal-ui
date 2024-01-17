import React from 'react'
import { MainWrpr } from './index.sc'
import FormCtype from '../../Components/formC'
import { formCdata } from '../../Utils/formA1dummyData'

export default function TestPage() {
  return (
    <MainWrpr>
     <FormCtype data={formCdata}/>
    </MainWrpr>
  )
}
