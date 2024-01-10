import React,{useState, useEffect} from 'react'
import ApplicationHeader from '../../Components/Header'
import { MainContainer, SideMenu, FormBtnCont, MainView, Facts } from './index.sc'
import FormButton from '../../Components/FormButton'
import DetailsCont from '../../Components/DetailsComp'
import DynamicDisplayComp from '../../Components/DynamicDisplayComponent'
import axios from 'axios'

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

  const [openForm, setOpenForm] = useState(false)
  const [clicked, setClicked] = useState(new Array(DemoArray.length).fill('no'));
  const [factState, setFactState] = useState('')

  const openFunc = (index) => {
    const updatedClicked = new Array(DemoArray.length).fill('no');
    updatedClicked[index] = 'selected';
    setClicked(updatedClicked);
    setOpenForm(!openForm);
  };

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
            <SideMenu>
              <FormBtnCont>
                {DemoArray.map((item, i)=>(
                  <FormButton 
                    key={i}
                    onClick={() => openFunc(i)}
                    clicked={clicked[i]}
                    status={item.circleColor} 
                    title={item.title} 
                    percentage={item.filledPercentage}/>
                ))}
              </FormBtnCont>
              <DetailsCont/>
            </SideMenu>
            <MainView>
              <Facts>{factState}</Facts>
              { openForm && (
                <DynamicDisplayComp/>
              )}
            </MainView>
        </MainContainer>
    </>
  )
}
