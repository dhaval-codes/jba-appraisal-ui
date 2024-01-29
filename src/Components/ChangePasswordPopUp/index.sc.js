import styled from "styled-components";

export const MainWrpr = styled.div`
    width: 100%;
    height: calc(100% - 5.6rem);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10000;
    background-color: rgba(160,160,160,0.4);
`;

export const PopUpWrpr = styled.div`
    height: 350px;
    width: 400px;
    background-color: #fff;
    border-radius: 0.6125rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const HeadingWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Heading = styled.h1`
    font-size: 1.125rem;
    color: #000;
    margin: 0;
`;

export const FormWrpr = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SectionWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const Label = styled.label`
    color: #252525;
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

export const InputBox = styled.input`
    border-radius: 0.25rem;
    border: 1px solid #BCBCBC;
    height: 2rem;
    padding: 0.25rem;
    padding-left: 0.75rem;
    &:focus{
        outline: none;
        border: 2px solid #312B8B;
    }
`;

export const SubmitButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    height: 2.25rem;
    width: 100%;
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

export const BufferImage = styled.img`
    width: 0.875rem;
    height: 0.875rem;
    position: relative;
    z-index: 20000;
`;

export const GreenCircle = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: relative;
    z-index: 20000;
    background-color: ${(props)=>props.color};
    margin-left: 0.5rem;
`;

export const GifImg = styled.img`
    height: 75%;
    width: 75%;
    border-radius: 50%;
`;
