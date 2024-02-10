import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { MainContainer, MainWrpr, PageWrpr, ScrolableContainer, SemiHeading, SideColumn } from './index.sc'
import StaffCardL1 from '../../Components/StaffCardL1'
import NoDataComp from '../../Components/NoDataComp'
import DynamicDisplayComp2 from '../../Components/DynamicDisplayComponent2'
import axios from 'axios'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function A2FormsJunior() {
  const [L1MappingStaffData, setL1MappingStaffData] = useState([])
  const [clicked, setClicked] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [activeName, setActiveName] = useState('')
  const [juniorStaffCode, setJuniorStaffCode] = useState()

  const Role = window.sessionStorage.getItem("role");
  const Department = window.sessionStorage.getItem("department");

  const MappingStaff = async (Role, Department) => {
    try{
      let response = await axios.post(`${REACT_APP_API_BASE_URL}juniorA2/stafflist`,{
        role: Role,
        department: Department
      })
      setL1MappingStaffData(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  const ActiveFormFunc = (i, name, staffCode) => {
    if(clicked === i){
      setClicked('')
      setShowForm(false)
      setActiveName('')
      setJuniorStaffCode()
    } else {
      setClicked(i)
      setShowForm(true)
      setActiveName(name)
      setJuniorStaffCode(staffCode)
    }
  }

  const FormCrossClick = () => {
    setClicked('')
    setShowForm(false)
    setActiveName('')
  }

  useEffect(()=>{
    MappingStaff(Role,Department);
  },[Department, Role])

  return (
    <PageWrpr>
      <ApplicationHeader/>
      <MainWrpr>
        <SideColumn>
          <SemiHeading>Employee List</SemiHeading>
          <ScrolableContainer>
            {L1MappingStaffData.map((item,index)=>(
              <StaffCardL1 
                name={item.name} 
                department={item.department} 
                staffNumber={item.staffCode} 
                key={index}
                clicked={clicked === index ? 'clicked' : ''}
                onClick={()=>ActiveFormFunc(index, item.name, item.staffCode)}
              />
            ))}
          </ScrolableContainer>
        </SideColumn>
        <MainContainer>
          {showForm ? (
            <DynamicDisplayComp2 
              name={activeName}
              CrossClick={FormCrossClick}
              passedStaffCode={juniorStaffCode}
            />
          ) : (
            <NoDataComp/>
          )}
        </MainContainer>
      </MainWrpr>
      
    </PageWrpr>
  )
}
