import styled from "styled-components";

export const CardContainer = styled.article`
    width: 380px;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    overflow: hidden;
`;

export const CardImage = styled.div`
    position: relative;

    & img {
        position: absolute;
        height: 100%;
        width: 100%;
    }
`;

export const ButtonBuy = styled.a`
    margin-top: 1.5rem;
    text-decoration: none;
    font-family: var(--font-default);
    font-size: 1rem;
    color: var(--color-yellow);
    display: flex;
    align-items: center;
    gap: 1.5em;
    padding: 0;
    cursor: pointer;
`