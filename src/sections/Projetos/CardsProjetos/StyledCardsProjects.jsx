import React from 'react'
import img1 from '../../../assets/images/portifolio.png'
import img2 from '../../../assets/images/projetoPrevisão.png'
import GIT from '../../../assets/icons/github.svg'
import Eye from '../../../assets/icons/eye.svg'
import styled from 'styled-components'
import breakpoints from '../../../styles/breakpoints';


// Funções para introduzir meus projetos-------------------
function Project1() {
  return (
    <StyledDiv>  
        <StyledImg>
          <img src={img1} alt="" />
        </StyledImg>
        <StyledText>
          <h2>Projeto Portfólio</h2>
          <p>
            Projeto realizado para construção do meu portfólio profissional,
            feito utilizando ReactJS, JavaScript, HTML5 e CSS3
          </p>
        </StyledText>
        <StyledButton>
        <button>Github<a href="https://github.com/lopesmatheus1" target='blank'> <img src={GIT} alt="" /></a></button>
        <button>Deploy<a href="https://lopesmatheus1.github.io/Portifolio/" target='blank'> <img src={Eye} alt="" /></a></button>
        </StyledButton>
    </StyledDiv>
  );
}

function Project2() {
  return (
    <StyledDiv>
        <StyledImg>
          <img src={img2} alt="" />
        </StyledImg>
        <StyledText>
          <h2>Projeto Portfólio</h2>
          <p>
            Projeto realizado para construção do meu portfólio profissional,
            feito utilizando ReactJS, JavaScript, HTML5 e CSS3
          </p>
        </StyledText>
        <StyledButton>
          <button>Github<a href="https://github.com/lopesmatheus1" target='blank'> <img src={GIT} alt="" /></a></button>
          <button>Deploy<a href="https://lopesmatheus1.github.io/Portifolio/" target='blank'> <img src={Eye} alt="" /></a></button>
        </StyledButton>
    </StyledDiv>
  );
}

export {Project1, StyledContainer, Project2}
// Funções para introduzir meus projetos-------------------


// Estilização a partir daqui -------------------
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  margin: 100px;

    .swiper-slide .swiper-slide-active{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${breakpoints.sm} {
    width: 250px;

  }
  @media ${breakpoints.md2} {
    width: 500px;
  }
  
  
  @media ${breakpoints.md}, ${breakpoints.md2} {
    

    .swiper-button-next,
    .swiper-button-prev {
    display:none;
}
 }
`;

const StyledImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: auto;
    border-radius: 30rem;
    z-index: 0;
  }
  @media ${breakpoints.md} {
   img{
    width: 350px;
   }

   
  }

  @media ${breakpoints.sm} {
   img{
    width: 250px;
   }

   
  }
`;

const StyledText = styled.div`
  text-align: center;
  h2 {
    color: var(--cyan1);
    font-size: 26px;
    margin: 10px;
  }
  p {
    color: var(--cyan1);
    font-size: 18px;
    margin: 10px;
  }
`;
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 20px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    background-color: var(--dark3);
    color: var(--cyan1);
    padding: 15px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: .8s;
    &:hover{
      transform: scale(1.05);
      background-color: var(--dark4);
    }
  }
`;


const StyledDiv = styled.div` 
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  height: 600px;


  @media ${breakpoints.sm} {
    width: 300px;
  }
`