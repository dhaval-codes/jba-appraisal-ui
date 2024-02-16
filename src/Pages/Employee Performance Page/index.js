import React, {useState, useEffect, useRef} from 'react'
import { BarChartWrpr, Container, DropDownGroup, FormWrpr, Heading, HeadingWrpr, IndiDropDownWrpr, Label, LeftWrpr, MainWrpr, Options, OptionsWrpr, PageWrpr, RightWrpr, Segment, SubmitButton, UpperBarChartWrpr, ViewBox} from './index.sc'
import ApplicationHeader from '../../Components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { columns } from '../../Utils/adminResources'
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
import { barChartOptions } from '../../Utils/chartOptions'

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
    const [barChartData, setBarChartData] = useState({
        labels: 'label',
        datasets: [
            {
                label: 'First dataset',
                data: [0]
            },
            {
                label: 'Second dataset',
                data: [0]
            }
        ]
    })
    const [selectedDownloadFormName, setSelectedDownloadFormName] = useState('')
    const [selectedDownloadDepartmentName, setSelectedDownloadDepartmentName] = useState('')
    const [selectedDownloadYear, setSelectedDownloadYear] = useState('')

    const navigate = useNavigate();

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
            setBarChartData({
                labels: response.data.labels,
                datasets: [
                    {
                        label: response.data.firstName,
                        data: response.data.indiArray,
                        backgroundColor: '#312B8B'
                    },
                    {
                        label: response.data.secondName,
                        data: response.data.averageArray,
                        backgroundColor: '#d9d9d9'
                    }
                    
                ]
            })
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

    const GenerateTableArray = [
        {
            label: 'Form Name:',
            value: selectedDownloadFormName,
            options: ['Select Form','Appraisal Form A1 and A2', 'Appraisal Form C']
        },
        {
            label: 'Department:',
            value: selectedDownloadDepartmentName,
            options: ['Select Department'].concat(departmentOptions),
        },
        {
            label: 'Year:',
            value: selectedDownloadYear,
            options: ['Select Year'].concat(yearOptions)
        }
    ]

    const handleDropdownChange = (event, index) => {
        const selectedValue = event.target.value;
        if(index === 0){
            setSelectedDownloadFormName(selectedValue)
        } else if (index === 1){
            setSelectedDownloadDepartmentName(selectedValue)
        } else if (index === 2){
            setSelectedDownloadYear(selectedValue)
        }
      };

    const navigateToDataTablePage = () =>{
        if(selectedDownloadDepartmentName !== ('Select Form' && '')){
            if(selectedDownloadDepartmentName !== ('Select Department' && '')){
                if(selectedDownloadYear !== ('Select Year' && '')){
                    navigate(`/table-for-download?formName=${selectedDownloadFormName}&department=${selectedDownloadDepartmentName}&year=${selectedDownloadYear}`)
                }
            }
        }
    }

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
                        <Bar
                            options={barChartOptions}
                            data={barChartData}
                        />
                    </BarChartWrpr>
                </UpperBarChartWrpr>
                <UpperBarChartWrpr>
                    <HeadingWrpr>
                        <Heading>
                            Generate Data Table
                        </Heading>
                    </HeadingWrpr>
                    <FormWrpr>
                        {GenerateTableArray.map((item, index)=>(
                            <Segment>
                                <Label>{item.label}</Label>
                                <Container key={index} value={item.value} onChange={(e) => handleDropdownChange(e, index)}>
                                    {item.options.map((option, index)=>(
                                        <option key={index}>{option}</option>
                                    ))}
                                </Container>
                            </Segment>
                        ))}
                        <SubmitButton onClick={navigateToDataTablePage}>
                            Generate Data Table
                        </SubmitButton>
                    </FormWrpr>
                </UpperBarChartWrpr>
            </RightWrpr>
        </MainWrpr>
    </PageWrpr>
  )
}
