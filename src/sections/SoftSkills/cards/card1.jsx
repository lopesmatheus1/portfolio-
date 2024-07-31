import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

const StyledCard = styled.div`
  color: white;
  padding: 10px;
  margin-top: 35px;
  border-radius: 10px;
  transition: 1.2s;
  text-align: left;
  width: 300px; // Define uma largura fixa para os cards
  height: 350px;


  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.534);
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }

  @media ${breakpoints.md2}{
    width: 270px;
    height: 420px;
  }

 
  @media ${breakpoints.md}{
    width: 350px;
    height: 320px;
  }

   
  @media ${breakpoints.sm}{
    width: 260px;
    height: 410px;
  }

`;

const StyledTitleHr = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin: 0 0 0 10px;
    font-size: 26px;
    font-weight: 200;
    color: var(--cyan1);
  }
`;

const StyledCardText = styled.div`
  h2 {
    font-weight: 500;
    font-size: 16px;
    color: var(--cyan1);
  }
`;

const SoftInterface = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px; // Espaçamento entre os cards
  flex-wrap: wrap; // Permite que os cards quebrem linha se necessário
  margin-top: 20px; // Espaçamento superior
`;

export { StyledCard, StyledTitleHr, StyledCardText, SoftInterface };
