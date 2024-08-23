import Logo from '../../assets/icons/cpu-fill.svg'
import List from '../../assets/icons/list.svg'
import { StyledHeader,NavbarMobile,HeaderMobile} from './StyledHeader'
import { Drawer } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-scroll';


function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () =>{
    setOpenMenu(!openMenu)
  }
  return (
    <header>
      <StyledHeader>
        <Link to="Hero" smooth={true} duration={800} style={{cursor:'pointer'}}>
          <img src={Logo} alt="" />
        </Link>
        <nav>
          <Link to="Hero" smooth={true} duration={800} style={{cursor:'pointer'}}>Home</Link>
          <Link to="Soft" smooth={true} duration={800} style={{cursor:'pointer'}}>Soft Skills</Link>
          <Link to="HardSkills" smooth={true} duration={800} style={{cursor:'pointer'}}>Hard Skills</Link>
          <Link to="Projetos" smooth={true} duration={800} style={{cursor:'pointer'}}>Projetos</Link>
          
        </nav>

        <nav>
          <Link to='Contact' smooth={true} duration={800} style={{cursor:'pointer'}}>Contatos</Link>
          </nav>
        <HeaderMobile>
          <img src={List} alt="" onClick={handleOpenMenu} />
        </HeaderMobile>
      </StyledHeader>

      <Drawer anchor="right" open={openMenu} onClose={handleOpenMenu}>
        <NavbarMobile>
          <nav>
            <a href="#Hero">Home</a>
            <a href="#Soft">Soft Skills</a>
            <a href="#HardSkills">Hard Skils</a>
            <a href="#Projetos">Projetos</a>
            <a href="#Contact">Contatos</a>
          </nav>
        </NavbarMobile>
      </Drawer>
    </header>
  );
}

export default Header
