import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

const StyledContainer = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
    gap: 60px;
    

    @media ${breakpoints.bg}{
      flex-direction: column;
    }

    @media ${breakpoints.sm}{
      width: 350px;
      padding: 10px;
      height: 650px;
    }
`

const StyledContatos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height:261px;
    max-width: 500px;
    font-size: 18px;
    text-align: center;
    h2{
      font-size: 28px;
    }
    img{
      cursor: pointer;
    }

    @media ${breakpoints.sm} {
      height: 500px;
      font-size: 14px;
      width: 250px;
    }
    
`

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height:261px;
    box-sizing: border-box;
    
    form{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    input, textarea {
    height: 47px;
    width: 400px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: #333;
    transition: 0.8s;
    position: relative;
    
    @media ${breakpoints.sm} {
      width: 250px;
    }

  }

  textarea {
    height: 80px;
  }



  input:focus, textarea:focus {
    outline: none;
    
    transform: scale(1.05);
  }

  label {
    position: absolute;
    left: 10px;
    top: 11px;
    color: #333;
    transition: 0.8s;
    pointer-events: none;
    padding: 0 5px;
    
  }

  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -4px;
    left: 2px;
    color: #333;
    font-size: 11px;
    font-weight: bold;
    z-index: 2;
    transition: .8s;
  }
  input:not(:focus):not(:placeholder-shown) + label,
  textarea:not(:focus):not(:placeholder-shown) + label {
    opacity: 0;
  }

  button {
    
    width: 50%;
    border: none;
    background-color: var(--dark3);
    border-radius: 20px;
    padding: 9px;
    color: cyan;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      background-color: var(--dark4);
      transition: 0.8s;
    }


  }

  
  @media ${breakpoints.md2}, ${breakpoints.md}, ${breakpoints.sm} ,${breakpoints.bg}{
  button {
    width: 100%;
  }
}

`
export {StyledInput, StyledContainer, StyledContatos}