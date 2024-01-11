import React,{useState, useEffect} from 'react'
import { DetailsBox, HeadingText, Circle, DescText } from './index.sc'
import { ContainerSubDiv } from '../FormButton/index.sc'
import axios from 'axios';


export default function DetailsCont() {
    const [detailsArray, setDetailsArray] = useState([]);

    const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const Role = window.sessionStorage.getItem("role");

    const detailsArrayFunc = async (Role)=>{
        try{
            const response = await axios.get(`${REACT_APP_API_BASE_URL}sidebarColorDetails?for=${Role}`);
            setDetailsArray(response.data[0].detailsArray)
        } catch (e){
            console.log(e);
        }
    }

    useEffect(()=>{
        detailsArrayFunc(Role);
    },[])

  return (
    <DetailsBox>
        <HeadingText>Reference for the forms above</HeadingText>
        {detailsArray.map((item)=> (
            <ContainerSubDiv>
                <Circle color={item.color}/>
                <DescText>{item.text}</DescText>
            </ContainerSubDiv>
        ))}
    </DetailsBox>
  )
}
