import Avatar from '../../assets/images/Avatar.png'
import GitHub from '../../assets/icons/github.svg'
import {Container,ColorModeContainer , Info, GitBtn, StyledImg} from './HeroStyles.jsx'



function Hero() {
  return (
    <section id="Hero">
      <Container>
        <ColorModeContainer>
          <StyledImg><img  src={Avatar} alt=""/></StyledImg>
          <Info>
              <h1>Olá! Meu nome é <br />Matheus Marendino</h1>
      
              <p>Tenho 21 anos, sou <strong>Desenvolvedor Front-end </strong>
              atualmente atuo como diretor comercial da empresa <strong>Serra Jr. engenharia </strong>
              e estou no oitavo período de <strong>engenharia de computação </strong>
              pela <strong>Uerj.</strong>
              </p>
              <span>
                  <a href="https://github.com/lopesmatheus1" target='blank'><GitBtn>Acessar github<img src={GitHub} alt=""/></GitBtn></a>
      
              </span>
          </Info>
      
        </ColorModeContainer>
      
      </Container>
      
    </section>
  )
}

export default Hero
