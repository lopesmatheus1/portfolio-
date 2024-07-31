import styled from "styled-components"
import breakpoints from "../../styles/breakpoints"

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 10%;
    background-color: var(--dark2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;

  
    nav {
    display: flex;
    gap: 30px;

  }
  
  a {
      color: var(--cyan1);
      text-decoration: none;
      transition: transform 0.3s ease-in-out;
      font-size: larger;
      font-weight: 500;
      transition: .8s;
      &:hover {
        color: white;
        transform: scale(1.05);
      }
    }

    @media ${breakpoints.md2} {
      nav{
      display: none;
      }
    }
`

const HeaderMobile = styled.div`
@media ${breakpoints.md} {
  display: flex;
}
@media screen and (min-width:851px){
  display: none;
}
`

const NavbarMobile = styled.div`
  nav{
    display: flex;
    justify-content: start;
    align-items: end;
    flex-direction: column;
    
    padding: 1em 6em;
    background-color: var(--dark2);
    height: 100vh;
    transition: 3s;
    gap: 20px;
    a{
      text-decoration: none;
      color: white;
      font-size:20px;
      margin-top: 20px;
    }
  }
`

export { StyledHeader,NavbarMobile,HeaderMobile}