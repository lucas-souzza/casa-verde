import styled from "styled-components";

export const BannerStyled = styled.section`
	width: fit-content;
    margin: 0 auto;
	display: flex;
	box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const BannerContent = styled.div`
	padding: 3.625rem 5rem 3.625rem 1.5rem;
`;

export const BannerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const InfoBall = styled.div`
    width: 50px;
    height: 50px;
    background-color: var(--color-yellow);
    border-radius: 50%;
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;