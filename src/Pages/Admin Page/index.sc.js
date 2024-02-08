import styled from "styled-components";

export const MainWrpr = styled.div`
    height: calc(100vh - 5.563rem);
    width: 100%;
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

export const MainCont = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
`;

export const HeadingSecton = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 0.5rem;
`;

export const MainHeading = styled.h1`
    font-size: 2rem;
    color: #000;
    margin: 0;
    font-weight: 600;
`;

export const HorizontailLine = styled.hr`
    height: 3px;
    background-color: #000;
    color: #000;
    width: 100%;
    margin: 0;
`;

export const UnorderedList = styled.ul`
    margin: 0;
    height: auto;
    width: 100%;
    padding-left: 20px;
`;

export const ListItem = styled.li`
    font-size: 1.5rem;
    color: #000;
    font-weight: 600;
`;

export const CardsDisplay = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SubHeading = styled.h3`
    font-size: 1rem;
    margin: 0;
    color: #8A8A8A;
    font-weight: 400;
`;

export const CardsDisplayWrpr = styled.div`
    width: 100%;
    height: 8.5rem;
    display: flex;
    flex-direction: row;
    gap: 3rem;
`;

export const BarCont = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const GraphDisplayWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    border: 2px solid #d9d9d9;
    border-radius: 0.6125rem;
    padding: 0.25rem;
    flex-direction: column;
`;

export const GraphHeading = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
`;

export const BarWrpr = styled.div`
    height: 95%;
    width: 100%;
`;
