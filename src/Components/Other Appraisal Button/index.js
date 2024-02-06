import React,{useState, useEffect} from 'react'
import { MainWrpr, Text } from './index.sc'
import { GetJuniorRole } from '../../Utils/importantFunc'
import { useNavigate } from 'react-router-dom'


export default function SpecialButton() {

  const role = window.sessionStorage.getItem('role')
  const navigate = useNavigate();

  const [Role, setRole] = useState();

  useEffect(()=>{
    setRole(GetJuniorRole(role))
  },[role])

  return (
    <MainWrpr onClick={()=> navigate("/juniorA2")}>
      <Text>{`Fill A2 form of ${Role}`}</Text>
    </MainWrpr>
  )
}
