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
    grid-template-columns: 1fr 3fr;
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
    min-height: 25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export const MainCont = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;

export const ContainerWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.6125rem;
    border: 2px solid #d9d9d9;
`;

export const HeaderWrpr = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem;
    background-color: #d9d9d9;
    padding: 0rem 1rem 0rem 1rem;
`;

export const Header = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: #000;
    margin: 0;
`;

export const ContentWrpr = styled.div`
    height: calc(100% - 2.5rem);
    width: 100%;
    border-radius: 0rem 0rem 0.6125rem 0.6125rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;

