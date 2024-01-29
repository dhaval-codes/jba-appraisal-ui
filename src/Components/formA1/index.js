import React, { useState, useEffect } from 'react'
import { MainWrpr, OptionsDiv, OptionsWrpr, QuestionHeading, SegmentWrpr } from './index.sc'

export default function FormA1type({formData, name}) {
  const [clickedOptions, setClickedOptions] = useState(Array(formData.length).fill(''));

  const onClickFunc = (itemIndex, optionIndex) => {
    const newClickedOptions = [...clickedOptions];
    newClickedOptions[itemIndex] = optionIndex;
    setClickedOptions(newClickedOptions);
  }

  useEffect(()=>{
    setClickedOptions('')
  },[name])

  return (
    <MainWrpr>
        {formData.map((item, index) => (
        <SegmentWrpr key={index}>
            <QuestionHeading>{`${index+1}) ${item.ques}`}</QuestionHeading>
            <OptionsWrpr>
            {item.options.map((option, optionIndex) => (
                <OptionsDiv 
                  key={optionIndex}
                  bg={clickedOptions[index] === optionIndex ? 'selected' : ''}
                  onClick={() => onClickFunc(index, optionIndex)}
                  >
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

