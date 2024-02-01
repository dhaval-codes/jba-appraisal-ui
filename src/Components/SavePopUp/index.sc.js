import styled from "styled-components";

export const MainBackgroundWrpr = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: rgba(160,160,160,0.4); */
    position: absolute;
    z-index: 10000;
`;

export const MainPopUp = styled.div`
    height: 15rem;
    width: 20rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #fff;
    border-radius: 0.6125rem;
    border: 3px solid #d6d6d6;
`;

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const WarningText = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props)=>props.color === 'warning' ? '#ff0000' : '#000000'};
    text-align: center;
`;

export const ButtonContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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

export const CancelButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    height: 2.25rem;
    width: auto;
    background-color: #fff;
    border: 1px solid #BCBCBC;
    font-weight: 600;
    color: #000;
    cursor: pointer;
    &:hover{
        background-color: #d6d6d6;
        color: #312B8B;
        transition: all ease-in-out 0.5s;
    }
`;

export const GifImg = styled.img`
    height: 10rem;
    width: 10rem;
`;
