import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Body = styled.div`
  background-image: url("/wveKfARBZqVDEqAxvYmTKjYKMXxgBzPkGksEk.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const MainHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  gap: 1rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 1px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SubHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1px;
`;

export const SubHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  gap: 10px;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
`;

export const BodyWrapperDone = styled.div`
  width: 100%;
  height: 60%;


  h2 {
    max-width: 80%;
  }
`;

export const CountMainWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  grid-template-columns: 0.13fr 0.13fr 0.13fr 0.13fr;
  gap: 3%;

  @media (max-width: 768px) {
    grid-template-columns: 0;
    gap: 10px;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

export const JoinDiscordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const JoinDiscord = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  height: 4rem;
  border-radius: 0.5rem;
  background-color: #7649f9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;

  &:hover {
    opacity: 0.8;
  }
`;
