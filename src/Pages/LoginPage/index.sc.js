import styled from "styled-components";

export const MainWrpr = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${(props) => props.bg});
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginDiv = styled.div`
    height: 20rem;
    width: 20rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    gap:1rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    gap: 0.5rem;
    width: 100%;
`;

export const FormLabel = styled.span`
    width: 100%;
    color: #252525;
    font-size: 0.875rem;
    font-weight: 600;
`;

export const InputBox = styled.input`
    width: 100%;
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

export const Trouble = styled.p`
    font-size: 0.5rem;
    color: #707070;
    margin-top: 0;
`;

export const Warning = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: red;
    position: absolute;
    text-align: center;
`;

export const PopUpWrpr = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128,128,128, 0.3);
`;

export const PopUp = styled.div`
    height: 150px;
    width: 300px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;