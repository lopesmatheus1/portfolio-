import Hero from './sections/Hero/Hero'
import SoftSkills from './sections/SoftSkills/SoftSkills'
import Header from './sections/Header/Header'
import HardSkills from './sections/HardSkills/HardSkills'
import Contatos from './sections/Contatos/Contatos'
import Projetos from './sections/Projetos/Projetos'


import '../src/styles/App.css'

function App() {
 

  return (
    <>
    <Header/>
    <Hero/>
    <hr />
    <SoftSkills/>
    <hr />
    <HardSkills/>
    <hr />
    <Projetos/>
    <hr />
    <Contatos/>


    </>
  )
}

export default App
