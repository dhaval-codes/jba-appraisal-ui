import React, {useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { CardsDisplay, CardsDisplayWrpr, DynamicButton, FormBtnCont, HeadingSecton, HorizontailLine, ListItem, MainCont, MainHeading, MainWrpr, Sidebar, SubHeading, UnorderedList } from './index.sc'
import EmployeeRankCard from '../../Components/EmployeeCard'
import axios from 'axios'

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

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function AdminPage() {
    const [topEmployeeMapping, setTopEmployeeMapping] = useState([])

    const GetTopEmployeesFunc = async ()=>{
        try{
            const response = await axios.post(`${REACT_APP_API_BASE_URL}admin/getTopEmployees`,{
                send: true
            })
            setTopEmployeeMapping(response.data)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        GetTopEmployeesFunc();
    },[])

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
                    <CardsDisplayWrpr>
                        {topEmployeeMapping.map((item,i)=>(
                            <EmployeeRankCard
                                marks={item.averageFracArray}
                                name={item.name}
                                department={item.department}
                                medalName={item.medal}
                                staffCode={item.staffCode}
                            />
                        ))}
                    </CardsDisplayWrpr>
                </CardsDisplay>
            </MainCont>
        </MainWrpr>
    </>
  )
}
