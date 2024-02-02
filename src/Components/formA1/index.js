import React, { useState, useEffect } from 'react'
import { MainWrpr, OptionsDiv, OptionsWrpr, QuestionHeading, SegmentWrpr } from './index.sc'

export default function FormA1type({formData, name, onArrayChange, width}) {
  const [clickedOptions, setClickedOptions] = useState(Array(formData?.length).fill(''));

  // chat GPT func, study this
  const onClickFunc = (itemIndex, optionIndex) => {
    setClickedOptions(prevClickedOptions => {
      const newClickedOptions = [...prevClickedOptions];
      newClickedOptions[itemIndex] = optionIndex;
      onArrayChange(newClickedOptions); // Call onArrayChange with the updated array
      return newClickedOptions; // Return the updated array to update the state
    });
  };

  useEffect(()=>{
    setClickedOptions('')
  },[name])

  return (
    <MainWrpr>
        {formData?.map((item, index) => (
        <SegmentWrpr key={index}>
            <QuestionHeading>{`${index+1}) ${item.ques}`}</QuestionHeading>
            <OptionsWrpr>
            {item.options.map((option, optionIndex) => (
                <OptionsDiv 
                  key={optionIndex}
                  bg={clickedOptions[index] === optionIndex ? 'selected' : ''}
                  onClick={() => onClickFunc(index, optionIndex)}
                  width={width}
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

