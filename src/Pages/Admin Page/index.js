import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { Heading, LeftWrpr, MainWrpr, RightWrpr, StaffListWrpr } from './index.sc'
import { DataGrid } from '@mui/x-data-grid'
import { StaffTableContents } from '../../Utils/adminResources'
import axios from 'axios'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

            </RightWrpr>

        </MainWrpr>
    </>
  )
}
