import React, {useState, useEffect} from 'react'
import { DropDowWrpr, GroupingWrpr, Heading, HeadingWrpr, LeftWrpr, MainContainer, MainWrpr, Options, PageWrpr, RightWrpr, UpperBarChartWrpr, ViewBox} from './index.sc'
import ApplicationHeader from '../../Components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { columns } from '../../Utils/adminResources'
import axios from 'axios'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function EmployeePerformacePage() {
    const [rowsData, setRowsData] = useState([])

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

    useEffect(()=>{
        getTableData()
    },[])

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
                        <GroupingWrpr>
                            <MainContainer>
                                <ViewBox>
                                    {`Year`}
                                </ViewBox>
                                <DropDowWrpr>
                                <Options>Dhaval</Options>
                                <Options>Dhaval</Options>
                                <Options>Dhaval</Options>
                                </DropDowWrpr>
                            </MainContainer>
                        </GroupingWrpr>
                    </HeadingWrpr>
                </UpperBarChartWrpr>
                <UpperBarChartWrpr>

                </UpperBarChartWrpr>
            </RightWrpr>
        </MainWrpr>
    </PageWrpr>
  )
}
