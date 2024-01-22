import styled from "styled-components";

export const MainWrpr = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 3rem 1rem 3rem;
    background-color: #312B8B;
    align-items: center;
    justify-content: space-between;
`;

export const Heading = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
`;

export const ProfileImage = styled.img`
    height: 3.125rem;
    width: 3.125rem;
    border: 1px solid #fff;
    border-radius: 0.625rem;
    cursor: pointer;
`;

export const ProfileTooltipWrpr = styled.div`
    height: auto;
    width: auto;
    position: absolute;
    right: 3rem;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    right: 3rem;
`;

export const Samosa = styled.div`
    height: 0;
    width: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid #fff;

`;

export const ProfileWrpr = styled.div`
    height: auto;
    width: 18.75rem;
    background-color: #fff;
    border: none;
    border-radius: 0.6125rem;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;

export const DisplayPictureWrpr = styled.div`
    height: 5rem;
    width: 100%;
    border-radius: 0.3065rem 0.3065rem 0rem 0rem;
    background-color: #312B8B;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfilePicture = styled.img`
    height: 6.25rem;
    width: 6.25rem;
    border: 3px solid #fff;
    border-radius: 50%;
    position: relative;
    margin-top: 5rem;
`;

export const ContainerWrpr = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
`;

export const NameText = styled.h2`
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0;
    text-transform: capitalize;
    
    span{
        font-weight: 400;
    }
`;

export const ChangePasswordButton = styled.button`
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