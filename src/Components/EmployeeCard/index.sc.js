import styled from "styled-components";

export const MainWrpr = styled.div`
    height: 100%;
    width: 15.625rem;
    border: 2px solid #d9d9d9;
    border-radius: 0.6125rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    cursor: pointer;
`;

export const UpperCardPart = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Fraction = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #000;
    margin: 0;
`;

export const BellowCardPart = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    padding: 0.25rem;
`;

export const Name = styled.span`
    font-size: 1rem;
    color: #000;
    margin: 0;
    padding: 0;
    font-weight: 600;
`;

export const HrTag = styled.hr`
    height: 3px;
    width: 100%;
    background-color: #000;
    margin: 0;
`;

export const SemiHeading = styled.p`
    margin: 0;
    font-size: 0.75rem;
    font-weight: 700;
    color: #000;

    span {
        font-weight: 400;
        color: #4d4d4d;
    }
`;

export const ImageTag = styled.img`
    height: 69px;
    width: 53px;
`;