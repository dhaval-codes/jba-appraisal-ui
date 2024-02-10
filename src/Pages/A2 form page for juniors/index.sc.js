import styled from "styled-components";

export const PageWrpr = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const MainWrpr = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 3fr; 
    padding-top: 5.625rem;
`;

export const SideColumn = styled.div`
    height: 100%;
    width: 100%;
    background-color: #bcbcbc;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
`;

export const SemiHeading = styled.h2`
    font-size: 1.125rem;
    color: #000;
    font-weight: 700;
    margin: 0;
`;

export const ScrolableContainer = styled.div`
    max-height: 50rem;
    width: 100%;
    overflow-y: auto;
    border: none;
    border-radius: 0.25rem;
    ::-webkit-scrollbar {
    display: none;
}`;

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;