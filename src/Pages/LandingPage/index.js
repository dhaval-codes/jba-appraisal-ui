import React from 'react'
import ApplicationHeader from '../../Components/Header'
import { MainContainer, SideMenu, FormBtnCont, MainView } from './index.sc'
import FormButton from '../../Components/FormButton'
import DetailsCont from '../../Components/DetailsComp'
import DynamicDisplayComp from '../../Components/DynamicDisplayComponent'

const DemoArray = [
  {
    title: 'Appraisal Form A1',
    circleColor: 'Employee',
    filledPercentage: '34%'
  },
  {
    title: 'Appraisal Form A2',
    circleColor: 'Hod',
    filledPercentage: '21%'
  },
  {
    title: 'Appraisal Form B',
    circleColor: 'Students',
    filledPercentage: '18%'
  },
  {
    title: 'Appraisal Form C',
    circleColor: 'Employee',
    filledPercentage: '98%'
  }
]

export default function LandingPage() {
  return (
    <>
        <ApplicationHeader/>
        <MainContainer>
            <SideMenu>
              <FormBtnCont>
                {DemoArray.map((item)=>(
                  <FormButton clicked={'no'} status={item.circleColor} title={item.title} percentage={item.filledPercentage}/>
                ))}
              </FormBtnCont>
              <DetailsCont/>
            </SideMenu>
            <MainView>
              <DynamicDisplayComp/>
            </MainView>
        </MainContainer>
    </>
  )
}
