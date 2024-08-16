import React from "react";
import {
  StyledContainer,
  ProjectItens,
  StyledText,
  ProjectItensReverse,
  ProjectItemImage,
  GitDeployButton,
  ProjectItemImage1,
} from "./Styles";

function Projetos() {
  return (
    <section id="Projetos">
      <h2 style={{ textAlign: "center", marginBottom: "118px" }}>Projetos</h2>

      <StyledContainer>
        <ProjectItens>
          <ProjectItemImage />
          <StyledText>
            <h3>Landing Page project</h3>
            <p>
              Este projeto é uma landing page desenvolvida em React utilizando
              styled-components para estilização. A página apresenta uma
              interface responsiva, com foco na exibição de produtos de
              joalheria de forma elegante e atraente.
            </p>
            <div>
              <GitDeployButton>
                <a href="">Github</a>
              </GitDeployButton>
              <GitDeployButton>
                <a href="">Deploy</a>
              </GitDeployButton>
            </div>
          </StyledText>
        </ProjectItens>

        <ProjectItensReverse>
          <ProjectItemImage1></ProjectItemImage1>

          <StyledText>
            <h3>Projeto Previsão do tempo</h3>
            <p>
              Este projeto é uma aplicação web desenvolvida em React que fornece
              previsões climáticas em tempo real utilizando a API da
              OpenWeatherMap. A interface é responsiva e permite que o
              usuário visualize as condições atual do clima de qualquer
              cidade, bem como a previsão para os próximos dias.
            </p>
            <div>
              <GitDeployButton>
                <a href="">Github</a>
              </GitDeployButton>
              <GitDeployButton>
                <a href="">Deploy</a>
              </GitDeployButton>
            </div>
          </StyledText>
        </ProjectItensReverse>
      </StyledContainer>
    </section>
  );
}

export default Projetos;
