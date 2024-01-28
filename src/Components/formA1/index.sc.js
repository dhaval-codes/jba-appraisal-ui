import styled from "styled-components";

export const MainWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 2rem;
    position: relative;
    background-color: #fff;
`;

export const SegmentWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #fff;
    gap: 1rem;
`;

export const QuestionHeading = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #000;
    margin: 0;
`;

export const OptionsWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export const OptionsDiv = styled.div`
    height: auto;
    width: calc(100%/5);
    border-radius: 0.6125rem;
    border: 2px solid #d9d9d9;
    font-size: 0.8125rem;
    font-weight: 300;
    padding: 0.5rem;
    background-color: ${(props)=>props.bg === 'selected' ? '#312B8B' : '#fff'};
    color: ${(props)=>props.bg === 'selected' ? '#fff' : '#000'};
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    &:hover{
        background-color: #312B8B;
        color: #fff;
        p {
            color: #fff;
        }
    }

    p{
        font-size: 1rem;
        color: ${(props)=>props.bg === 'selected' ? '#fff' : '#000'};
        margin: 0;
    }
`;