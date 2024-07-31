import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  text-align: left;
  min-height: 100vh;
`;

const StyledImg = styled.div`
  img {
    width: 350px;
    border-radius: 50%;
    @media ${breakpoints.bg} {
      width: 250px;
      margin-top: 70px;
  }
  }
`;

const ColorModeContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media ${breakpoints.bg} {
    flex-direction: column;
    text-align: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  h1 {
    font-size: 42px;
    font-weight: 400;
    letter-spacing: 3px;
  }
`;
const GitBtn = styled.button`
  background-color: var(--dark3);
  color: var(--cyan1);
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s, transform 0.3s;

  img {
    margin-left: 15px;
  }

  &:hover {
    background-color: var(--dark4);
    transform: scale(1.05);
    transition: 1s;
  }
`;

export { Container, ColorModeContainer, Info, GitBtn, StyledImg };
