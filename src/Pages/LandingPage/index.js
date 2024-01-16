import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { MainContainer, MainView, Facts, Sidebar, FormBtnCont } from './index.sc'
import FormButton from '../../Components/FormButton'
import DetailsCont from '../../Components/DetailsComp'
import DynamicDisplayComp from '../../Components/DynamicDisplayComponent'
import axios from 'axios'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function LandingPage() {
  const [sideBarFormData, setSideBarFormData] = useState([])
  const [showDynamicComp, setShowDynamicComp] = useState(false)
  const [selected, setSelected] = useState('')
  const [fact, setFact] = useState('')
  const [data, setData] = useState()

  const Role = window.sessionStorage.getItem("role");

  const SideBarFormData = async (Role)=>{
    try{
        const response = await axios.get(`${REACT_APP_API_BASE_URL}sideBarFormData?for=${Role}`)
        setSideBarFormData(response.data[0].dataArray)
    } catch (e){
        console.log(e)
    }
  }

  const GetFact = async () =>{
    try{
      const number = Math.ceil(Math.random() * 10)
      const factRequest = await axios.get(`${REACT_APP_API_BASE_URL}facts?for=${number}`)
      setFact(factRequest.data.facts);
    }catch (e) {
      console.log(e)
    }
  }

  const formButtonClick = (i) => {
    if (selected === i) {
      setSelected('');
      setShowDynamicComp(false)
    } else {
      setSelected(i);
      setShowDynamicComp(true);
    }
  }

  const CrossIconFunction = () => {
    setShowDynamicComp(false);
    setSelected('')
  }
  
  useEffect(()=>{
    SideBarFormData(Role)
    GetFact()
  },[])
  
  return (
    <>
      <ApplicationHeader/>
      <MainContainer>
        <Sidebar>
          <FormBtnCont>
          {sideBarFormData.map((item, i)=>(
              <FormButton 
                key={i}
                title={item.title} 
                status={item.circleColor} 
                clicked={selected === i ? 'selected' : ''}
                onClick={()=>formButtonClick(i)}
              />))
            }
          </FormBtnCont>
          <DetailsCont/>
        </Sidebar>
        <MainView>
          {showDynamicComp ? (
            <DynamicDisplayComp openForm={CrossIconFunction} data={data}/>
          ) : (
            <Facts>{fact}</Facts>
          )}
        </MainView>
      </MainContainer>
    </>
  )
}
