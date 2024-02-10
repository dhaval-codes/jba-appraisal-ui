import React,{useState, useEffect} from 'react'
import { MainWrpr, PageWrpr, ScrolableContainer, SemiHeading, SideBar, ViewFormWrpr } from './index.sc'
import ApplicationHeader from '../../Components/Header'
import StaffCardL1 from '../../Components/StaffCardL1'
import FormCViewer from '../../Components/PeerAppraisalFormCViewer'
import axios from 'axios'
import NoDataComp from '../../Components/NoDataComp'

export default function PeerAppraisalCPage() {
    const [mappedData, setMappedData] = useState([])
    const [passedName, setPassedName] = useState('')
    const [clicked, setClicked] = useState('')
    const [view, setView] = useState(false)
    const [passedData, setPassedData] = useState([])

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

    const setSelectedTabFun = (i, name, data) => {
        if(clicked === i){
            setPassedName('')
            setView(false)
            setClicked('')
            setPassedData([])
        } else {
            setPassedName(name)
            setView(true)
            setClicked(i)
            setPassedData(data)
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
                            department={item.applicantsDepartment}
                            clicked={clicked === index ? 'clicked' : ''}
                            onClick={() => setSelectedTabFun(index, item.applicantsName, item.filledData)}
                        />
                    ))}
                </ScrolableContainer>
            </SideBar>
            <ViewFormWrpr>
                {view ? (
                    <FormCViewer
                        selectedName={passedName}
                        passedData={passedData}
                    />
                ) : (
                    <NoDataComp/>
                )}
            </ViewFormWrpr>  
        </MainWrpr>  
         
    </PageWrpr>
  )
}
