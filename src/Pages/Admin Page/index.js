import React from 'react'
import ApplicationHeader from '../../Components/Header'
import { CardsDisplay, CardsDisplayWrpr, DynamicButton, FormBtnCont, HeadingSecton, HorizontailLine, ListItem, MainCont, MainHeading, MainWrpr, Sidebar, SubHeading, UnorderedList } from './index.sc'

const sideBarMappingOptions = [
    {
        label: 'Appraisal Input for Juniors',
        nav: ''
    },
    {
        label: 'Peer Appraisal C Insights',
        nav: ''
    },
    {
        label: 'Employee Performance Insights',
        nav: ''
    },
    {
        label: 'Staff Management',
        nav: ''
    }
]


export default function AdminPage() {

  return (
    <>
        <ApplicationHeader/>
        <MainWrpr>
            <Sidebar>
                <FormBtnCont>
                    {sideBarMappingOptions.map((item, key)=>(
                        <DynamicButton key={key}>{item.label}</DynamicButton>
                    ))}
                </FormBtnCont>
            </Sidebar>
            <MainCont>
                <HeadingSecton>
                    <MainHeading>Administrative Control Centre</MainHeading>
                    <HorizontailLine/>
                    <UnorderedList>
                        <ListItem>Summary Insights</ListItem>
                    </UnorderedList>
                </HeadingSecton>
                <CardsDisplay>
                    <SubHeading>Top Performing Employees</SubHeading>
                    <CardsDisplayWrpr></CardsDisplayWrpr>
                </CardsDisplay>
            </MainCont>
        </MainWrpr>
    </>
  )
}
