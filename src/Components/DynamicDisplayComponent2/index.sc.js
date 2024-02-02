import styled from "styled-components";

export const MainWrpr = styled.div`
    width: 100%;
    height: calc(100vh - 6.7rem);
    border: 1px solid #bbb;
    border-radius: 0.625rem;
    position: relative;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.625rem 0.625rem 0rem 0rem;
    background-color: #d9d9d9;
    height: 3rem;
    padding: 0 1rem 0 1rem;
`;

export const Heading = styled.div`
    font-size: 1.25rem;
    color: #000;
    font-weight: 600;
`;

export const EmptyWrpr = styled.div`
    position: relative;
    height: calc(100% - 6rem);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    padding: 1rem;

    &::-webkit-scrollbar {
        display: none;
    }

     h1{
        font-size: 1.25rem;
        font-weight: 600;
        color: #000;
        margin: 0;
    }

    span {
        font-size: 0.8125rem;
        color: #000;
        font-weight: 300;
        margin: 0;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border-radius:  0rem 0rem 0.625rem 0.625rem;
    background-color: #d9d9d9;
    height: 3rem;
    padding: 0 1rem 0 1rem;
`;

export const SubmitButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    height: 2.25rem;
    width: auto;
    background-color: #312B8B;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        border: 1px solid #BCBCBC;
        color: #312B8B;
        transition: all ease-in-out 0.5s;
    }
`;