import React from 'react'
import { MainWrpr, OptionsDiv, OptionsWrpr, QuestionHeading, SegmentWrpr } from './index.sc'

export default function FormA1type({formData}) {
  return (
    <MainWrpr>
        {formData.map((item, index) => (
        <SegmentWrpr key={index}>
            <QuestionHeading>{`${index+1}) ${item.ques}`}</QuestionHeading>
            <OptionsWrpr>
            {item.options.map((option, optionIndex) => (
                <OptionsDiv key={optionIndex}>
                    <p>{`${optionIndex+1}`}</p>
                    {option}
                </OptionsDiv>
            ))}
            </OptionsWrpr>
        </SegmentWrpr>
        ))}
    </MainWrpr>
  )
}
