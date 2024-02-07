import React, {useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { BarCont, CardsDisplay, CardsDisplayWrpr, DynamicButton, FormBtnCont, GraphDisplayWrpr, GraphHeading, HeadingSecton, HorizontailLine, ListItem, MainCont, MainHeading, MainWrpr, Sidebar, SubHeading, UnorderedList } from './index.sc'
import EmployeeRankCard from '../../Components/EmployeeCard'
import axios from 'axios'

// importing chart components
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2'

// registering Chart components

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip
)

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
    const [barChartData, setBarChartData] = useState({})

    const Role = window.sessionStorage.getItem('role')
    const GetTopEmployeesFunc = async ()=>{
        try{
            const response = await axios.post(`${REACT_APP_API_BASE_URL}admin/getTopEmployees`,{
                send: Role
            })
            setTopEmployeeMapping(response.data)
        } catch(e) {
            console.log(e)
        }
    }

    const GetBarChartData = async () => {
        try{
            let barDataResponse = await axios.post(`${REACT_APP_API_BASE_URL}admin/getBarData`,{
                send: Role,
            })
            console.log(barDataResponse.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        GetTopEmployeesFunc();
        GetBarChartData();
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
                <BarCont>
                    <SubHeading>Employee Performance Insights</SubHeading> 
                    <GraphDisplayWrpr>
                        <GraphHeading>
                            Comparative Analysis: Departmental Average Ratings vs School-wide Performace &#40;A1&#41;
                        </GraphHeading>
                    </GraphDisplayWrpr>  
                </BarCont>
            </MainCont>
        </MainWrpr>
    </>
  )
}
