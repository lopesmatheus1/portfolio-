import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 277px;
    padding: 40px;
    background-color: var(--dark2);
    border-radius: 10px;

    h2{
        font-size: 25px;
        margin-bottom: 30px;
    }

    img{
        width: 100px;
        height: auto;
    }

    &:hover{
        transform: scale(1.05);
        transition: .8s;
        box-shadow: 0 0 8px rgba(0, 255, 255, 0.534);
    }
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
  max-width: 800px;
  flex-wrap: wrap;
`

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .Title{
    margin-bottom: 100px;
  }
`


export {StyledCard, StyledDiv, StyledSection}