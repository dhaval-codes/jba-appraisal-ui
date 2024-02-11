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
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const LeftWrpr = styled.div`
    height: calc(100vh - 5.625rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;

export const RightWrpr = styled.div`
    height: calc(100vh - 5.625rem);
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0.5rem;
    padding: 0.5rem;
`;

export const UpperBarChartWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.6125rem;
    border: 1px solid #d9d9d9;
`;

export const HeadingWrpr = styled.div`
    height: 3rem;
    width: 100%;
    border-radius: 0.6125rem 0.6125rem 0rem 0rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Heading = styled.h2`
    font-size: 1.25rem;
    margin: 0;
    margin-left: 0.5rem;
    font-weight: 700;
`;

export const GroupingWrpr = styled.div`
    display: flex;
    gap: 1rem;
    height: 100%;
    width: auto;
`;

export const DropDowWrpr = styled.div`
    max-height: 4.5rem;
    width: 5rem;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 5rem;
`;

export const Options = styled.div`
    height: 1.5rem;
    height: 1.5rem;
    width: 5rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    cursor: pointer;
`;

export const ViewBox = styled.div`
    height: 1.5rem;
    width: 5rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    cursor: pointer;
`;
