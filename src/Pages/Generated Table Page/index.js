import React, {useEffect, useState} from 'react'
import { DownloadButtonWrpr, GridDataTable, GridHeader, Image, MainWrpr, PDFContWrpr, PDFSegment, PDFWrpr, PDFsubHeading, PageWrpr, ScrollableComponent, TopWrpr } from './index.sc'
import ApplicationHeader from '../../Components/Header'
import PDFImage from '../../Assets/Images/SVGs/Pdf.svg'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function GeneratedTablePage() {
    const [data, setData] = useState([])

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const formName = searchParams.get('formName');
    const department = searchParams.get('department');
    const year = searchParams.get('year');

    const getDownloadPDFdata = async (formName, department, year) => {
        try{
            let response = await axios.post(`${REACT_APP_API_BASE_URL}admin/getDownloadPDFdata`,{
                formName: formName,
                department: department,
                year: year
            })
            setData(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        getDownloadPDFdata(formName,department,year)
    },[formName,department,year])

  return (
    <PageWrpr>
        <ApplicationHeader/>
        <MainWrpr>
            <TopWrpr>
                <DownloadButtonWrpr>
                    <Image src={PDFImage}/>
                    Download PDF
                </DownloadButtonWrpr>
            </TopWrpr>
            <ScrollableComponent>
                {formName === 'Appraisal Form A1 and A2' ? (
                    <PDFWrpr>
                        {data.map((item,index)=>(
                            <PDFSegment key={index}>
                                <PDFContWrpr>
                                    <PDFsubHeading>Form Name: <span>{item.name}</span></PDFsubHeading>
                                    <PDFsubHeading>Filled Year: <span>{item.timePeriod.year}</span></PDFsubHeading>
                                    <PDFsubHeading>Department: <span>{item.applicantsDepartment}</span></PDFsubHeading>
                                </PDFContWrpr>
                                <PDFContWrpr>
                                    <PDFsubHeading>Applicant's Name: <span>{item.applicantsName}</span></PDFsubHeading>
                                    <PDFsubHeading>Filled By: <span>{item.filledBy}</span></PDFsubHeading>
                                    <PDFsubHeading>Filler's Designation: <span>{item.fillersDesignation}</span></PDFsubHeading>
                                </PDFContWrpr>
                                <PDFContWrpr>
                                    <PDFsubHeading>Apllicant's Staff Code: <span>{item.applicantsStaffCode}</span></PDFsubHeading>
                                    <PDFsubHeading>Cumalative Avg: <span>{item.cumalativeMarks.toFixed(2)}</span></PDFsubHeading>
                                </PDFContWrpr>
                                <GridDataTable>
                                    <GridHeader>Question</GridHeader>
                                    <GridHeader>Selected Option</GridHeader>
                                    <GridHeader>Selected Marks</GridHeader>
                                </GridDataTable>
                            </PDFSegment>
                        ))}
                    </PDFWrpr>
                ) : (
                    <PDFWrpr>

                    </PDFWrpr>
                )}
            </ScrollableComponent>
        </MainWrpr>
    </PageWrpr>
  )
}
