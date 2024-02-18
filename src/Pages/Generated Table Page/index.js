import React, {useEffect, useState} from 'react'
import { Answers, DownloadButtonWrpr, FormCCont, GridBox, GridDataTable, GridHeader, GridHeaderCont, Image, MainWrpr, PDFContWrpr, PDFSegment, PDFWrpr, PDFsubHeading, PageWrpr, Questions, ScrollableComponent, TextCWrpr, TopWrpr } from './index.sc'
import ApplicationHeader from '../../Components/Header'
import PDFImage from '../../Assets/Images/SVGs/Pdf.svg'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function GeneratedTablePage() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const formName = searchParams.get('formName');
    const department = searchParams.get('department');
    const year = searchParams.get('year');

    const getDownloadPDFdata = async (formName, department, year) => {
        const role = window.sessionStorage.getItem('role')
        try{
            let response = await axios.post(`${REACT_APP_API_BASE_URL}admin/getDownloadPDFdata`,{
                formName: formName,
                department: department,
                year: year,
                role: role
            })
            setData(response.data)
        } catch (e) {
            console.log(e)
        }
    }
  
    const downloadPDF = async () => {
        if (formName === 'Appraisal Form A1 and A2') {
            const segments = document.querySelectorAll('.pdf-segment-A1');
            setLoading(true);
   
            const doc = new jsPDF('p', 'mm', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
    
            // Create an array to store all html2canvas promises
            const promises = [];
    
            // Iterate over each segment and create a promise for capturing its content
            for (const segment of segments) {
                const promise = new Promise((resolve) => {
                    html2canvas(segment, {
                        scale: 0.8, // Reduce scale to decrease image resolution and file size
                        allowTaint: true // Allow capturing cross-origin images
                    }).then((canvas) => {
                        const imgData = canvas.toDataURL('image/jpeg', 0.8); // Adjust quality to reduce file size
                        resolve(imgData); // Resolve the promise with image data
                    });
                });
                promises.push(promise); // Push the promise into the array
            }
    
            // Wait for all promises to resolve and get the image data
            const imageDataArray = await Promise.all(promises);
    
            // Add images to the PDF one by one for each page
            imageDataArray.forEach((imgData, index) => {
                if (index > 0) {
                    doc.addPage();
                }
                doc.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
            });
    
            setLoading(false);
            doc.save('download.pdf');
        } else if (formName === 'Appraisal Form C') {
            const segments = document.querySelectorAll('.pdf-segment-C');
            setLoading(true);

            const doc = new jsPDF('p', 'mm', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
    
            // Create an array to store all html2canvas promises
            const promises = [];
    
            // Iterate over each segment and create a promise for capturing its content
            for (const segment of segments) {
                const promise = new Promise((resolve) => {
                    html2canvas(segment, {
                        scale: 0.8, // Reduce scale to decrease image resolution and file size
                        allowTaint: true // Allow capturing cross-origin images
                    }).then((canvas) => {
                        const imgData = canvas.toDataURL('image/jpeg', 1); // Adjust quality to reduce file size
                        resolve(imgData); // Resolve the promise with image data
                    });
                });
                promises.push(promise); // Push the promise into the array
            }
    
            // Wait for all promises to resolve and get the image data
            const imageDataArray = await Promise.all(promises);
    
            // Add images to the PDF one by one for each page
            imageDataArray.forEach((imgData, index) => {
                if (index > 0) {
                    doc.addPage();
                }
                doc.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
            });
    
            setLoading(false);
            doc.save('download.pdf');
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
                {loading ? (
                    <DownloadButtonWrpr>
                        <Image src={PDFImage}/>
                        Downloading PDF
                    </DownloadButtonWrpr>
                ) : (
                    <DownloadButtonWrpr onClick={downloadPDF}>
                        <Image src={PDFImage}/>
                        Download PDF
                    </DownloadButtonWrpr>
                )}
            </TopWrpr>
            <ScrollableComponent>
                {formName === 'Appraisal Form A1 and A2' ? (
                    <PDFWrpr className='appraisal-A1-container'>
                        {data.map((item,index)=>(
                            <PDFSegment key={index} className='pdf-segment-A1'>
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
                                    <GridHeaderCont>
                                        <GridHeader>Question</GridHeader>
                                        <GridHeader>Selected Option</GridHeader>
                                        <GridHeader>Selected Marks</GridHeader>
                                    </GridHeaderCont>
                                    {item.filledDataMarksArray.map((myItem,myIndex)=>(
                                        <GridHeaderCont key={myIndex}>
                                            <GridBox>{myItem.ques}</GridBox>
                                            <GridBox>{myItem.selectedAns}</GridBox>
                                            <GridBox>{myItem.selectedNumber}</GridBox>
                                        </GridHeaderCont>
                                    ))}
                                </GridDataTable>
                            </PDFSegment>
                        ))}
                    </PDFWrpr>
                ) : (
                    <PDFWrpr className='appraisal-C-container'>
                        {data.map((item,index)=>(
                            <PDFSegment key={index} className='pdf-segment-C'>
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
                                </PDFContWrpr>
                                <FormCCont>
                                    {item.filledData.map((meraItem, i)=>(
                                        <TextCWrpr key={i}>
                                            <Questions>{`Q: ${Object.keys(meraItem)[0]}`}</Questions>
                                            <Answers>{`Ans: ${Object.values(meraItem)[0]}`}</Answers>
                                        </TextCWrpr>
                                    ))}
                                </FormCCont>
                            </PDFSegment>
                        ))}
                    </PDFWrpr>
                )}
            </ScrollableComponent>
        </MainWrpr>
    </PageWrpr>
  )
}
