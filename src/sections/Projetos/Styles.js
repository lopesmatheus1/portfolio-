import styled from "styled-components";
import Imagem from "../../assets/images/Landing.png";
import Imagem1 from "../../assets/images/projetoPrevisão.png";

const StyledContainer = styled.div``;
const ProjectItens = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;
const StyledText = styled.div`
  margin-left: 50px;
  max-width: 600px;
  h3 {
    color: white;
    font-size: 2.25rem;
    font-weight: 500;
  }
  p {
    color: #ffffffc5;
    line-height: 29px;
  }
`;

const ProjectItensReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 50px;
`;

const ProjectItemImage = styled.div`
  background-image: url(${Imagem});
  min-width: 420px;
  min-height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const ProjectItemImage1 = styled.div`
  background-image: url(${Imagem1});
  min-width: 420px;
  min-height: 240px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
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
  ProjectItemImage,
  ProjectItemImage1,
  GitDeployButton,
};
