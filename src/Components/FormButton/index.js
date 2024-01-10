import React from 'react'
import { MainCont, Title, ContainerSubDiv, StatusCircle, PercentageText } from './index.sc'
import FormIcon from '../../Assets/Images/Js/formIcon'

export default function FormButton({title, percentage, clicked, status, onClick}) {
  const handleClick = () =>{
    onClick();
  }
  return (
    <MainCont bg={clicked} onClick={handleClick}>
      <ContainerSubDiv>
        <FormIcon fill={clicked}/>
        <Title color={clicked}>{title}</Title>
        <StatusCircle status={status}/>
      </ContainerSubDiv>
      <PercentageText color={clicked}>{percentage}</PercentageText>
    </MainCont>
  )
}
