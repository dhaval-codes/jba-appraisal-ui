import React from 'react'
import { MainCont, Title, ContainerSubDiv, StatusCircle, PercentageText } from './index.sc'
import FormIcon from '../../Assets/Images/Js/formIcon'

export default function FormButton({title, percentage, clicked, status}) {
  return (
    <MainCont bg={clicked}>
      <ContainerSubDiv>
        <FormIcon fill={clicked}/>
        <Title color={clicked}>{title}</Title>
        <StatusCircle status={status}/>
      </ContainerSubDiv>
      <PercentageText color={clicked}>{percentage}</PercentageText>
    </MainCont>
  )
}
