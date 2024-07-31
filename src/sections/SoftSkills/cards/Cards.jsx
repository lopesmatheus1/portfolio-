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
      content: "Atuando como diretor, desenvolvi meu senso de liderança, aprimorei minhas habilidades de comunicação e gestão de equipes, deleguei tarefas para os membros, ministrei treinamentos e auxiliei para um ambiente de trabalho leve para todos."
    },
    {
      number: "02",
      title: "Trabalho em equipe",
      content: "Durante minha graduação e enquanto atuava na empresa júnior, trabalhei em diversas áreas de equipe, desenvolvendo habilidades de colaboração e comunicação em diferentes contextos. Isso incluiu a realização de trabalhos em grupo, a redação de documentos e a participação em projetos."
    },
    {
      number: "03",
      title: "Comunicação e escrita",
      content: "Tenho experiência significativa na redação de documentos, incluindo contratos, propostas e documentos comerciais, o que me permite transmitir informações complexas de maneira precisa e coesa. Além disso, possuo facilidade em me comunicar em público, o que me ajuda a apresentar ideias e informações de forma confiante e impactante."
    },
    {
      number: "04",
      title: "Aprendizado constante",
      content: "Tenho consciência de que a área da tecnologia está em constante evolução e, por isso, me dedico a estudar e aprimorar minhas habilidades todos os dias. Para acompanhar essas mudanças, tento me atualizar constantemente por meio de cursos, videoaulas e também realizando projetos para ampliar meu portfólio."
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