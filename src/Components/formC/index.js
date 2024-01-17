import React from 'react'
import { ContWrpr, InputTime, Label, MainWrpr, TextArea } from './index.sc'

export default function FormCtype({data}) {
  return (
    <MainWrpr>
        {data.map((item,index)=>( 
            <ContWrpr index={index}>
                <Label>{item}</Label>
                {index === 3 ? (
                    <InputTime type='date'/>
                ) : (
                    <TextArea/>
                )}
            </ContWrpr>
        ))}
    </MainWrpr>
  )
}
