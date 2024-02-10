import styled from "styled-components";

export const MainWrpr = styled.div`
    height: calc(100vh - 6.7rem);
    width: 100%;
    background-color: #fff;
    border-radius: 0.6125rem;
    border: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    height: 3rem;
    padding: 0rem 1rem 0rem 1rem;
    width: 100%;
    border-radius: 0.6125rem 0.6125rem 0rem 0rem;
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Heading = styled.h1`
    font-size: 1.25rem;
    color: #000;
    font-weight: 600;
    margin: 0;
`;

export const ContainerWrpr = styled.div`
    height: 100%;
    background-color: #fff;
    width: 100%;
    border-radius: 0rem 0rem 0.6125rem 0.6125rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const DataWrpr = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`;

export const SegmentWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Questions = styled.h2`
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: #000;
`;

export const Answers = styled.p`
    font-size: 1rem;
    margin: 0;
    align-items: left;
    font-weight: 400;
    color: #000;
`;