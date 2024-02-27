import styled from "styled-components";

export const PageWrpr = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding-top: 5.625rem;
`;

export const Sidebar = styled.div`
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #BCBCBC;
`;

export const FormBtnCont = styled.div`
    max-height: 25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export const MainView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;

export const Facts = styled.h3`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
`;

export const DynamicButton = styled.button`
    height: 3.75rem;
    width: 100%;
    background-color: #fff;
    border-radius: 0.625rem;
    border: 3px solid #312B8B;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    transition: all 0.3s ease;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    margin: 0;
    &:hover{
        background: linear-gradient(270deg, #312B8B 0%, #000 100%);
        border: none;
        color: #fff;
    }
`;
