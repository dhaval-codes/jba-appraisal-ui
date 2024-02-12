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

export const DropDownGroup = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
`;

export const IndiDropDownWrpr = styled.div`
    width: auto;
    height: fit-content;
    position: relative;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    margin-top: 0.75rem;
`;

export const ViewBox = styled.div`
    width: fit-content;
    text-transform: capitalize;
    padding: 0.5rem 2.5rem 0.5rem 2.5rem;
    height: 1.5rem;
    border: 1px solid #d9d9d9;
    font-size: 1rem;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color: #d9d9d9;
    }
`;

export const OptionsWrpr = styled.div`
    height: auto;
    width: inherit;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    gap: 0;
    align-items: center;
`;

export const Options = styled.div`
    text-transform: capitalize;
    width: 100%;
    height: 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color: #d9d9d9;
    }
`;

export const BarChartWrpr = styled.div`
    width: 100%;
    height: calc(100% - 3rem);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6125rem;
`;
