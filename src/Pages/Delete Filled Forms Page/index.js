import React, {useState, useEffect} from 'react'
import { HeaderWrpr, Headings, MainWrpr, PageWrpr, RowItem, RowItemWrpr, ScrollWrpr, SubmitButton, TableWrpr } from './index.sc'
import ApplicationHeader from '../../Components/Header'
import axios from 'axios'

const headersArray = ["Form Name","Filled By","Filled For", "Applicant's Dept", "Delete"]

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function DeleteFilledFormPage() {
  const [filledFormMappingArray, setFilledFormMappingArray] = useState([])

  const getFilledFormData = async () => {
    try{
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const response = await axios.get(`${REACT_APP_API_BASE_URL}admin/getFilledFormData?&year=${year}`)
      setFilledFormMappingArray(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  const deleteFormFunc = async (id) => {
    try{
      const response = await axios.post(`${REACT_APP_API_BASE_URL}admin/deleteFilledForms`,{
        id: id
      })
      if(response.data === true){
        getFilledFormData()
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    getFilledFormData()
  },[])

  return (
    <PageWrpr>
        <ApplicationHeader/>
        <MainWrpr>
            <TableWrpr>
              <HeaderWrpr>
                {headersArray.map((item,i)=>(
                    <Headings key={i}>
                      {item}
                    </Headings>
                ))}
              </HeaderWrpr>
              <ScrollWrpr>
                {filledFormMappingArray.map((item,index)=>(
                  <RowItemWrpr key={index}>
                    <RowItem>
                      {item.name}
                    </RowItem>
                    <RowItem>
                      {item.filledBy}
                    </RowItem>
                    <RowItem>
                      {item.applicantsName}
                    </RowItem>
                    <RowItem>
                      {item.applicantsDepartment}
                    </RowItem>
                    <RowItem>
                      <SubmitButton onClick={()=>deleteFormFunc(item._id)}>
                        Delete Form
                      </SubmitButton>
                    </RowItem>
                  </RowItemWrpr>
                ))}
              </ScrollWrpr>
            </TableWrpr>
        </MainWrpr>
    </PageWrpr>
  )
}
