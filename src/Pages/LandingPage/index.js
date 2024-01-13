import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { MainContainer, MainView, Facts } from './index.sc'
import DynamicDisplayComp from '../../Components/DynamicDisplayComponent'
import axios from 'axios'
import Sidebar from '../../Components/Sidebar'

const DemoArray = [
  {
    title: 'Appraisal Form A1',
    circleColor: 'Employee',
    filledPercentage: '34%'
  },
  {
    title: 'Appraisal Form A2',
    circleColor: 'Hod',
    filledPercentage: '21%'
  },
  {
    title: 'Appraisal Form B',
    circleColor: 'Students',
    filledPercentage: '18%'
  },
  {
    title: 'Appraisal Form C',
    circleColor: 'Employee',
    filledPercentage: '98%'
  }
]

export default function LandingPage() {

  const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [openForm, setOpenForm] = useState(true)
  const [factState, setFactState] = useState('')

  const FactsFunction = async() =>{
    const factNumber = Math.floor(Math.random() * 10) + 1;
    try{
      const response = await axios.get(`${REACT_APP_API_BASE_URL}facts?factNumber=${factNumber}`)
      setFactState(response.data.facts)
    }
    catch{

    }
  }
  useEffect(() => {
    FactsFunction();
  }, []);
  
  
  return (
    <>
        <ApplicationHeader/>
        <MainContainer>
        <Sidebar />
        <MainView>
          {openForm ? (
            <>
              <DynamicDisplayComp />
            </>
          ) : (
            <Facts>{factState}</Facts>
          )}
        </MainView>
      </MainContainer>
    </>
  )
}
