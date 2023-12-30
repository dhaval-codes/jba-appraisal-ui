import React from 'react'
import { MainCont } from './index.sc'
import FormIcon from '../../Assets/Images/Js/formIcon'

export default function FormButton({bg}) {
  return (
    <MainCont bg={bg}>
        <FormIcon fill={bg}/>
    </MainCont>
  )
}
