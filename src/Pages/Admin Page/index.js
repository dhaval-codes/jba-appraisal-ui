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
        nav: '/employee-performance-insights'
    },
    {
        label: 'Staff Management',
        nav: '/staff-management'
    },
    {
        label: 'Delete Filled Forms',
        nav: '/delete-filled-forms'
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
    const [minValue, setMinValue] = useState(3)
    const [maxValue, setMaxValue] = useState(5)

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
                dept: "",
                year: ""
            })
            const minValue = Math.min(...barDataResponse.data.indiArray);
            const maxValue = Math.max(...barDataResponse.data.indiArray);

            
            const yAxisMin = Math.floor(minValue);
            const yAxisMax = Math.ceil(maxValue);

            setMinValue(yAxisMin)
            setMaxValue(yAxisMax)

            setBarChartData({
                labels: barDataResponse.data.labels,
                datasets: [
                    {
                        label: barDataResponse.data.firstName,
                        data: barDataResponse.data.indiArray,
                        backgroundColor: '#312B8B'
                    },
                    {
                        label: barDataResponse.data.secondName,
                        data: barDataResponse.data.averageArray,
                        backgroundColor: '#d9d9d9'
                    }
                ]
            })

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        GetTopEmployeesFunc();
        GetBarChartData();
    },[])

    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                suggestedMin: minValue,
                suggestedMax: maxValue,
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
                <div>
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
                </div>
                <BarCont>
                    <SubHeading>Employee Performance Insights</SubHeading> 
                    <GraphDisplayWrpr>
                        <GraphHeading>
                            Comparative Analysis: Departmental Average Ratings vs School-wide Performace &#40;A1&#41;
                        </GraphHeading>
                        <BarWrpr>
                            <Bar
                                data={barChartData}
                                options={options}
                            />
                        </BarWrpr>
                    </GraphDisplayWrpr>  
                </BarCont>
            </MainCont>
        </MainWrpr>
    </>
  )
}
