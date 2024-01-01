import React from 'react'
import { MainWrpr } from './index.sc'
import FormButton from '../../Components/FormButton'

export default function TestPage() {
  return (
    <MainWrpr>
        <FormButton clicked={''} status={'Students'}/>
    </MainWrpr>
  )
}
