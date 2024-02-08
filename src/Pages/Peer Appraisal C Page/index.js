import React,{useState, useEffect} from 'react'
import { MainWrpr, PageWrpr, ScrolableContainer, SemiHeading, SideBar } from './index.sc'
import ApplicationHeader from '../../Components/Header'
import StaffCardL1 from '../../Components/StaffCardL1'
import axios from 'axios'

export default function PeerAppraisalCPage() {

    const [mappedData, setMappedData] = useState([])

    const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    
    const getMappingData = async () => {
        const currentRole = window.sessionStorage.getItem('role');
        const currentDate = new Date();
        try{
            let response = await axios.post(`${REACT_APP_API_BASE_URL}admin/getfilledCForm`,{
                role: currentRole,
                date: currentDate
            })
            setMappedData(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        getMappingData();
    },[])

  return (
    <PageWrpr>
        <ApplicationHeader/>
        <MainWrpr>
            <SideBar>
                <SemiHeading>
                    Peer View Of Appraisal C Insights
                </SemiHeading>
                <ScrolableContainer>
                    {mappedData.map((item,index)=>(
                        <StaffCardL1
                            name={item.applicantsName}
                        />
                    ))}
                </ScrolableContainer>
            </SideBar>
        </MainWrpr>     
    </PageWrpr>
  )
}
