import React, {useState, useEffect, useRef} from 'react'
import { BarChartWrpr, DropDownGroup, Heading, HeadingWrpr, IndiDropDownWrpr, LeftWrpr, MainWrpr, Options, OptionsWrpr, PageWrpr, RightWrpr, UpperBarChartWrpr, ViewBox} from './index.sc'
import ApplicationHeader from '../../Components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { columns } from '../../Utils/adminResources'
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

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function EmployeePerformacePage() {
    const [rowsData, setRowsData] = useState([])
    const [yearOptions, setYearOptions] = useState([])
    const [departmentOptions, setDepartmentOptions] = useState([])
    const [selectedYearGraph, setSelectedYearGraph] = useState('Year')
    const [selectedDepartmentGraph, setSelectedDepartmentGraph] = useState('Department')
    const yearRef = useRef();
    const [isGraphYearVisible, setIsGraphYearVisible] = useState(false)
    const deptRef = useRef();
    const [isGraphDeptVisible, setIsGraphDeptVisible] = useState(false)

    const getTableData = async () =>{
        const globalRole = window.sessionStorage.getItem('role')
        const date = new Date();
        try {
            const response = await axios.post(`${REACT_APP_API_BASE_URL}admin/getTableData`,{
                role: globalRole,
                date: date
            })
            setRowsData(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getDepartment = async () =>{
        const globalRole = window.sessionStorage.getItem('role')
        try {
            const response = await axios.get(`${REACT_APP_API_BASE_URL}admin/getAllDepartments?role=${globalRole}`)
            setDepartmentOptions(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const GetBarChartData = async () =>{
        const Role = window.sessionStorage.getItem('role')
        try {
            let response = await axios.post(`${REACT_APP_API_BASE_URL}admin/getBarData`,{
                role: Role,
                dept: selectedDepartmentGraph === 'Department' ? "" : selectedDepartmentGraph,
                year: selectedYearGraph === 'Year' ? "" : selectedYearGraph
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    const updateGraphYear = (year) => {
        setSelectedYearGraph(year)
        setIsGraphYearVisible(false)
    }

    const updateGraphDepartment = (dept) =>{
        setSelectedDepartmentGraph(dept)
        setIsGraphDeptVisible(false)
    }

    const handleYearMouseEnter = () => {
        setIsGraphYearVisible(true)
    };
    
    const handleYearMouseLeave = () => {
        setIsGraphYearVisible(false)
    };

    const handleDeptMouseEnter = () => {
        setIsGraphDeptVisible(true)
    };

    const handleDeptMouseLeave = () => {
        setIsGraphDeptVisible(false)
    };

    useEffect(()=>{
        getTableData()
        getDepartment()
        const d = new Date();
        let year = d.getFullYear();
        setYearOptions([year - 1, year, year + 1])
    },[])

    useEffect(()=>{
        GetBarChartData();
    },[selectedYearGraph, selectedDepartmentGraph])

    const getRowId = (row) => row.staffCode;

  return (
    <PageWrpr>
        <ApplicationHeader/>
        <MainWrpr>
            <LeftWrpr>
                <DataGrid
                    columns={columns}
                    rows={rowsData}
                    getRowId={getRowId}
                />
            </LeftWrpr>
            <RightWrpr>
                <UpperBarChartWrpr>
                    <HeadingWrpr>
                        <Heading>
                            Academic Rating Spotlight
                        </Heading>
                        <DropDownGroup>
                            <IndiDropDownWrpr 
                                ref={yearRef} 
                                onMouseEnter={handleYearMouseEnter} 
                                onMouseLeave={handleYearMouseLeave}
                            >
                                <ViewBox>
                                    {selectedYearGraph} &darr;
                                </ViewBox>
                                {isGraphYearVisible && (
                                    <OptionsWrpr>
                                        {yearOptions.map((item, index)=>(
                                            <Options key={index} onClick={()=>updateGraphYear(item)}>
                                                {item}
                                            </Options>     
                                        ))}
                                    </OptionsWrpr>
                                )}
                            </IndiDropDownWrpr>
                            <IndiDropDownWrpr 
                                ref={deptRef}
                                onMouseEnter={handleDeptMouseEnter} 
                                onMouseLeave={handleDeptMouseLeave}
                            >
                                <ViewBox>
                                    {selectedDepartmentGraph} &darr;
                                </ViewBox>
                                {isGraphDeptVisible && (
                                    <OptionsWrpr>
                                        {departmentOptions.map((item,index)=>(
                                            <Options key={index} onClick={()=>updateGraphDepartment(item)}>
                                                {item}
                                            </Options>
                                        ))}
                                    </OptionsWrpr>
                                )}
                            </IndiDropDownWrpr>
                        </DropDownGroup>
                    </HeadingWrpr>
                    <BarChartWrpr>
                        {/* <Bar
                            options={options}
                            data={data}
                        /> */}
                    </BarChartWrpr>
                </UpperBarChartWrpr>
                <UpperBarChartWrpr>

                </UpperBarChartWrpr>
            </RightWrpr>
        </MainWrpr>
    </PageWrpr>
  )
}
