import {StyledCard, StyledTitleHr, StyledCardText, SoftInterface} from './card1'




  

  function Card({ number, title, content }) {
    return (
      
      <StyledCard>
        <StyledTitleHr>
          <h2>{number}</h2>
          <hr />
        </StyledTitleHr>
        <StyledCardText>
          <h2>{title}</h2>
          <p>{content}</p>
        </StyledCardText>
      </StyledCard>
    );
  }
  const cardData = [
    {
      number: "01",
      title: "Liderança",
      content: "Como diretor, desenvolvi liderança, aprimorando habilidades de comunicação e gestão de equipes. Deleguei tarefas, ministrei treinamentos e promovi um ambiente de trabalho positivo."
    },
    {
      number: "02",
      title: "Trabalho em equipe",
      content: "Na graduação e na empresa júnior, trabalhei em diversas equipes, desenvolvendo colaboração e comunicação em diferentes contextos. Participei de projetos, redigi documentos e trabalhei em grupo."
    },
    {
      number: "03",
      title: "Comunicação e escrita",
      content: "Tenho ampla experiência na redação de contratos, propostas e documentos comerciais, transmitindo informações complexas de forma precisa e coesa. Comunico-me com facilidade em público, o que me permite apresentar ideias com confiança e impacto."
    },
    {
      number: "04",
      title: "Aprendizado constante",
      content: "Consciente da constante evolução tecnológica, dedico-me a aprimorar habilidades diariamente. Mantenho-me atualizado com cursos, videoaulas e projetos para expandir meu portfólio."
    }
  ];   
  
  function CardList() {
    return (
      <SoftInterface>
        {cardData.map((card, index) => (
          <Card key={index} number={card.number} title={card.title} content={card.content} />
        ))}
      </SoftInterface>
    );
  }

export { Card, CardList}