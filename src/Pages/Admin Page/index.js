import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { ChartContWrpr, Heading, LeftWrpr, MainWrpr, RightWrpr, SemiWrpr, StaffListWrpr, ToolsWrpr } from './index.sc'
import { DataGrid } from '@mui/x-data-grid'
import { StaffTableContents } from '../../Utils/adminResources'
import axios from 'axios'

import { Chart as ChartJs,
BarElement,
CategoryScale,
LinearScale,
Tooltip } from 'chart.js'

import { Bar }from 'react-chartjs-2'

import { barChartOptions } from '../../Utils/chartOptions'

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip
)

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const dataSet = {
    labels: ["CS", "PerArts", "Arts", "Science", "Maths", "Commerce", "English", "Hindi", "PE", "Psycology"],
    datasets: [
        {
            label:'Rating',
            data: [4.2, 4.9, 3.5, 4.1, 3.8, 4.8, 3.9, 3.2, 2.9, 3.3],
            backgroundColor: "#312B8B"
        }
    ]
}

export default function AdminPage() {
    const [employeeData, setEmployeeData] = useState([])

    const EmployeeTableDataFunc = async() => {
        try{
            let response = await axios.post(`${REACT_APP_API_BASE_URL}admin/employeeList`,{
                sendData:true
            })
            setEmployeeData(response.data);
        } catch (e) {
            console.log(e)
        }
    }
    
    const getRowId = (row) => row._id;

    useEffect(()=>{
        EmployeeTableDataFunc()
    },[])

  return (
    <>
        <ApplicationHeader/>
        <MainWrpr>
            <LeftWrpr>
                 <Heading>Employee List</Heading>
                <StaffListWrpr>
                    <DataGrid
                        columns={StaffTableContents}
                        rows={employeeData}
                        getRowId={getRowId}
                    />
                </StaffListWrpr>
            </LeftWrpr>
            <RightWrpr>
                <SemiWrpr>
                    <Heading>Average Department Ratting</Heading>
                    <ChartContWrpr>
                        <Bar
                            data={dataSet}
                            options={barChartOptions}
                        />
                    </ChartContWrpr>
                </SemiWrpr>
                <SemiWrpr>
                    <Heading style={{paddingTop: '0.5rem'}}>Control Pannel</Heading>
                    <ToolsWrpr>
                        
                    </ToolsWrpr>
                </SemiWrpr>
            </RightWrpr>
        </MainWrpr>
    </>
  )
}
