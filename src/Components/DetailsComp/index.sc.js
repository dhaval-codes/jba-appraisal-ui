import styled from "styled-components";

export const DetailsBox = styled.div`
    width: 100%;
    height: auto;
    border-top: 3px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
`;

export const HeadingText = styled.h3`
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        font-size: 0.8125rem;
    }
`;

export const SemiContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`;

export const Circle = styled.div`
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
`;

export const DescText = styled.p`
    color: #000;
    font-size: 0.85rem;
    font-weight: 400;
    margin: 0;
`;