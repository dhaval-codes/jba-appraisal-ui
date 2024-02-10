import React from 'react'
import { Answers, ContainerWrpr, DataWrpr, Header, Heading, MainWrpr, Questions, SegmentWrpr } from './index.sc'

export default function FormCViewer({selectedName, passedData}) {

  return (
    <MainWrpr>
      <Header>
        <Heading>{`Appraisal C Form of ${selectedName}`}</Heading>
      </Header>
      <ContainerWrpr>
        <DataWrpr>
          {passedData.map((item,i)=>(
            <SegmentWrpr key={i}>
              <Questions>{`Q: ${Object.keys(item)[0]}`}</Questions>
              <Answers>{`Ans: ${Object.values(item)[0]}`}</Answers>
            </SegmentWrpr>
          ))}
        </DataWrpr>
      </ContainerWrpr>
    </MainWrpr>
  )
}
