import styled from "styled-components";
import Landing from "../../assets/images/Landing.png";
import Previsao from "../../assets/images/projetoPrevisão.png";
import Portfolio from "../../assets/images/portifolio.png"
import breakpoints from "../../styles/breakpoints";


const StyledContainer = styled.div``;
const ProjectItens = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  gap: 30px;

  @media ${breakpoints.bg}{
    flex-direction: column;
    text-align: center;
    
    }
  
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  
  min-height: 250px;
  
  max-width: 600px;
  h3 {
    color: white;
    font-size: 2rem;
    font-weight: 400;
  }
  p {
    margin: 10px 0;
    color: #ffffffc5;
    font-size: 1.1rem;
  }
`;

const ProjectItensReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 80px;
  gap: 30px;

  @media ${breakpoints.bg}{
    flex-direction: column;
    text-align: center;
    }
`;

const ProjectItemLandingPage = styled.div`
  background-image: url(${Landing});
  
  min-width: 420px;
  min-height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;

  @media ${breakpoints.sm}{
    min-width: 330px;
    }
  
`;

const ProjectItemPrevisao = styled.div`
  background-image: url(${Previsao});
  min-width: 420px;
  
  min-height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  @media ${breakpoints.sm}{
    min-width: 330px;
    }
`;

const ProjectItemPortfolio = styled.div`
  background-image: url(${Portfolio});
  border: 1px solid var(--cyan1);
  min-width: 420px;
  
  height: 250px;
  min-height: 180px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  @media ${breakpoints.sm}{
    min-width: 330px;
    height: 180px;
    
    }
`;

const GitDeployButton = styled.button`
  background-color: var(--dark3);

  padding: 7px 16px;
  margin-top: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 8px;

  a {
    text-decoration: none;
    color: #ffffffc5;
  }
  &:hover {
    color: white;
    background-color: var(--dark4);
    transform: scale(1.05);
    cursor: pointer;
    transition: 1.2s;
  }
`;

export {
  StyledContainer,
  ProjectItens,
  StyledText,
  ProjectItensReverse,
  ProjectItemLandingPage,
  ProjectItemPrevisao,
  ProjectItemPortfolio,
  GitDeployButton,
};
