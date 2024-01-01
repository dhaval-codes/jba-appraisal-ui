import React from 'react'
import { DetailsBox, HeadingText, Circle, DescText } from './index.sc'
import { ContainerSubDiv } from '../FormButton/index.sc'

const DetailsArray = [
    {
        color: '#10CD00',
        text: 'For Employees to fill',
    },
    {
        color: '#FAFF00',
        text: 'For HODs to fill',
    },
    {
        color: '#FF0000',
        text: 'For Students to fill',
    }
]

export default function DetailsCont() {
  return (
    <DetailsBox>
        <HeadingText>Reference for the forms above</HeadingText>
        {DetailsArray.map((item)=> (
            <ContainerSubDiv>
                <Circle color={item.color}/>
                <DescText>{item.text}</DescText>
            </ContainerSubDiv>
        ))}
    </DetailsBox>
  )
}
