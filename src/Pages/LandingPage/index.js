import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { MainContainer, MainView, Facts } from './index.sc'
import DynamicDisplayComp from '../../Components/DynamicDisplayComponent'
import axios from 'axios'
import Sidebar from '../../Components/Sidebar'

export default function LandingPage() {

  const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [openForm, setOpenForm] = useState(false)
  const [factState, setFactState] = useState('')

  const FactsFunction = async() =>{
    const factNumber = Math.floor(Math.random() * 10) + 1;
    try{
      const response = await axios.get(`${REACT_APP_API_BASE_URL}facts?factNumber=${factNumber}`)
      setFactState(response.data.facts)
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    FactsFunction();
  }, []);

  const toggleForm = () =>{
    setOpenForm(!openForm)
  }
  
  return (
    <>
      <ApplicationHeader/>
        <MainContainer>
          <Sidebar openForm={toggleForm}/>
            <MainView>
              {openForm ? (
                <>
                  <DynamicDisplayComp openForm={toggleForm}/>
                </>
              ) : (
                <Facts>{factState}</Facts>
              )}
            </MainView>
      </MainContainer>
    </>
  )
}
