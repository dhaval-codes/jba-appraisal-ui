import React, {useState, useEffect} from 'react'
import { FormBtnCont, SideMenu } from './index.sc'
import DetailsCont from '../DetailsComp';
import FormButton from '../FormButton';
import axios from 'axios';

export default function Sidebar({openForm}) {
    const [sideBarFormData, setSideBarFormData] = useState([])
    const [selected, setSelected] = useState('')

    const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const Role = window.sessionStorage.getItem("role");

    const SideBarFormData = async (Role)=>{
        try{
            const response = await axios.get(`${REACT_APP_API_BASE_URL}sideBarFormData?for=${Role}`)
            setSideBarFormData(response.data[0].dataArray)
        } catch (e){
            console.log(e)
        }
    }

    const formButtonClick = (i) => {
        setSelected((prevSelected) => (prevSelected === i ? '' : i));
        openForm()
    }

    useEffect(()=>{
       SideBarFormData(Role)
    },[])

  return (
    <SideMenu>
        <FormBtnCont>
            {sideBarFormData.map((item, i)=>(
                <FormButton 
                    key={i}
                    title={item.title} 
                    status={item.circleColor} 
                    clicked={selected === i ? 'selected' : ''}
                    onClick={()=>formButtonClick(i)}/>
                ))
            }
        </FormBtnCont>
        <DetailsCont/>
    </SideMenu>
  )
}
