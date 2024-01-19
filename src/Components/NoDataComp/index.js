import React from 'react'
import NoData from '../../Assets/Images/Js/noData'
import { Container, MainWrpr, Text, TextHeading } from './index.sc'

export default function NoDataComp() {
  return (
    <MainWrpr>
      <NoData/>
      <Container>
        <TextHeading>Nothing selected to show</TextHeading>
        <Text>Click on a tab to open their A2 Appraisal Form</Text>
      </Container>
    </MainWrpr>
  )
}
