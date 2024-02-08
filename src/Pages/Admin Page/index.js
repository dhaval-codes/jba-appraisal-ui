import React, {useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { BarCont, BarWrpr, CardsDisplay, CardsDisplayWrpr, DynamicButton, FormBtnCont, GraphDisplayWrpr, GraphHeading, HeadingSecton, HorizontailLine, ListItem, MainCont, MainHeading, MainWrpr, Sidebar, SubHeading, UnorderedList } from './index.sc'
import EmployeeRankCard from '../../Components/EmployeeCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
        nav: '/junior-appraisal'
    },
    {
        label: 'Peer Appraisal C Insights',
        nav: '/peer-appraisal-c-insights'
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
    const [barChartData, setBarChartData] = useState({
        labels: ['Others'],
                datasets: [
                    {
                        label:'Department Avg:',
                        data: [0],
                        fillColor: '#252525'
                    },
                    {
                        label:'School Avg:',
                        data: [0],
                        fillColor: '#000'
                    }
                ]
    })
    const [barChartOptions, setBarChartOptions] = useState({})

    const navigate = useNavigate();

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
                role: Role,
            })
            const sclAvgArray = Array(11).fill(barDataResponse.data.schoolAvg)
            const minValue = Math.min(...barDataResponse.data.subjCumalative);
            const maxValue = Math.max(...barDataResponse.data.subjCumalative);

            
            const yAxisMin = Math.floor(minValue);
            const yAxisMax = Math.ceil(maxValue);

            setBarChartData({
                labels: ['Eng','Hindi','Maths','Sci','CS','Commerce','Humanties','Psy','PE','PerArts','Others'],
                datasets: [
                    {
                        label:'Department Avg',
                        data: barDataResponse.data.subjCumalative,
                        backgroundColor: '#312B8B'
                    },
                    {
                        label:'School Avg',
                        data: sclAvgArray,
                        backgroundColor: '#d9d9d9'
                    }
                ]
            })

            const options = {
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        suggestedMin: yAxisMin,
                        suggestedMax: yAxisMax,
                        beginAtZero: false,
                        grid: {
                            display: true
                        },
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    }
                }
            };

            setBarChartOptions(options)

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
                        <DynamicButton onClick={()=> navigate(item.nav)}
                            key={key}>{item.label}
                        </DynamicButton>
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
                                marks={item.marks}
                                name={item.name}
                                department={item.department}
                                medalName={i}
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
                        <BarWrpr>
                            <Bar
                                data={barChartData}
                                options={barChartOptions}
                            />
                        </BarWrpr>
                    </GraphDisplayWrpr>  
                </BarCont>
            </MainCont>
        </MainWrpr>
    </>
  )
}
