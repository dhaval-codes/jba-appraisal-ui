import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { MainContainer, MainWrpr, ScrolableContainer, SemiHeading, SideColumn } from './index.sc'
import StaffCardL1 from '../../Components/StaffCardL1'
import NoDataComp from '../../Components/NoDataComp'
import axios from 'axios'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function A2FormsJunior() {
  const [L1MappingStaffData, setL1MappingStaffData] = useState([])
  const [clicked, setClicked] = useState('')

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

  const ActiveFormFunc = (i) => {
    if(clicked === i){
      setClicked('')
    } else {
      setClicked(i)
    }
  }

  useEffect(()=>{
    MappingStaff(Role,Department);
  },[Department, Role])

  return (
    <>
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
                onClick={()=>ActiveFormFunc(index)}
              />
            ))}
          </ScrolableContainer>
        </SideColumn>
        <MainContainer>
          <NoDataComp/>
        </MainContainer>
      </MainWrpr>
      
    </>
  )
}
