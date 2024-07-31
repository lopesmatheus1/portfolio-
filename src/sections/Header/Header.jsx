import Logo from '../../assets/icons/cpu-fill.svg'
import List from '../../assets/icons/list.svg'
import { StyledHeader,NavbarMobile,HeaderMobile} from './StyledHeader'
import { Drawer } from '@mui/material';
import React, { useState } from 'react'



function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () =>{
    setOpenMenu(!openMenu)
  }
  return (
    <header>
      <StyledHeader>
        <a href="#Hero">
          <img src={Logo} alt="" />
        </a>
        <nav>
          <a href="#Hero">Home</a>
          <a href="#Soft">Soft Skills</a>
          <a href="#HardSkills">Hard Skils</a>
          <a href="#Projetos">Projetos</a>
          
        </nav>

        <nav><a href="#Contact">Contatos</a></nav>
        <HeaderMobile>
          <img src={List} alt="" onClick={handleOpenMenu} />
        </HeaderMobile>
      </StyledHeader>

      <Drawer anchor="right" open={openMenu} onClose={handleOpenMenu}>
        <NavbarMobile>
          <nav>
            <a href="">Home</a>
            <a href="">Soft Skills</a>
            <a href="">Hard Skils</a>
            <a href="">Projetos</a>
            <a href="">Contatos</a>
          </nav>
        </NavbarMobile>
      </Drawer>
    </header>
  );
}

export default Header
