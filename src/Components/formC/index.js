import React,{useState} from 'react'
import { ContWrpr, InputTime, Label, MainWrpr, TextArea } from './index.sc'

export default function FormCtype({data, onArrayChange}) {
    const [inputValues, setInputValues] = useState(Array(data.length).fill(''));

    const handleInputChange = (index, value) => {
        setInputValues(prevInputValues => {
            const newInputValues = [...prevInputValues];
            newInputValues[index] = value;
            onArrayChange(newInputValues); 
            return newInputValues;
        });
    };    

  return (
    <MainWrpr>
        {data.map((item,index)=>( 
            <ContWrpr index={index}>
                <Label>{item}</Label>
                {index === 3 ? (
                    <InputTime type='date'key={index} value={inputValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}/>
                ) : (
                    <TextArea key={index} value={inputValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                )}
            </ContWrpr>
        ))}
    </MainWrpr>
  )
}
