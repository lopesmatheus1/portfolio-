import styled from 'styled-components'
import HTML from '../../assets/images/htmlLogo.png'
import JS from '../../assets/images/JS.png'
import GitHub from '../../assets/images/Github.png'
import React from '../../assets/images/React.png'
import CSS from '../../assets/images/CSS.png'
import {StyledCard, StyledDiv, StyledSection} from './StyledHardSkills'



function HardSkills() {
  return (
    <StyledSection id='HardSkills'>
      <h2 style={{marginBottom: '120px'}}>HardSkills</h2>
      <StyledDiv>
        
        <StyledCard>
          <h2>HTML5</h2>
          <img src={HTML} alt="" />
        </StyledCard>
        <StyledCard>
          <h2>CSS3</h2>
          <img src={CSS} alt="" />
        </StyledCard>
        <StyledCard>
          <h2>JavaScript</h2>
          <img src={JS} alt="" />
        </StyledCard>
        <StyledCard>
          <h2>Github</h2>
          <img src={GitHub} alt="" />
        </StyledCard>
        <StyledCard>
          <h2>React</h2>
          <img src={React} alt="" />
        </StyledCard>
      </StyledDiv>
    </StyledSection>
  )
}

export default HardSkills
