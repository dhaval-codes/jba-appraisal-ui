import styled from "styled-components";

export const PageWrpr = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const MainWrpr = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 5.625rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TopWrpr = styled.div`
    height: 3rem;
    width: 90%;
    display: flex;
    justify-content: right;
`;

export const DownloadButtonWrpr = styled.div`
    height: 100%;
    width: fit-content;
    padding: 0.25rem;
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    cursor: pointer;
    &:hover{
        background-color: #d9d9d9;
    }
`;

export const Image = styled.img`
    height: 1.5rem;
    width: 1.5rem;
`;

export const ScrollableComponent = styled.div`
    width: 90%;
    height: 90%;
    padding: 1rem;
    overflow-y: auto;
    overflow-x: auto;
`;

export const PDFWrpr = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const PDFSegment = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border: 1px solid black;
    padding: 1rem;
`;

export const PDFContWrpr = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 2rem 0rem 2rem;
`;

export const PDFsubHeading = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    color: #000;
    font-weight: 700;
    span{
        font-weight: 400;
        text-transform: capitalize;
    }
`;

export const GridDataTable = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const GridHeaderCont = styled.div`
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

export const GridHeader = styled.div`
    height: 2rem;
    padding: 0.25rem;
    font-size: 1.5rem;
    color: #000;
    font-weight: 700;
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GridBox = styled.div`
    height: 100%;
    font-size: 1.5rem;
    width: 100%;
    color: #000;
    font-weight: 400;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    border: 1px solid black;
`;