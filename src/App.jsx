import { useInView } from 'react-intersection-observer';

import Hero from './sections/Hero/Hero';
import SoftSkills from './sections/SoftSkills/SoftSkills';
import Header from './sections/Header/Header';
import HardSkills from './sections/HardSkills/HardSkills';
import Contatos from './sections/Contatos/Contatos';
import Projetos from './sections/Projetos/Projetos';

import '../src/styles/App.css';

function App() {
  // Configuração do useInView para várias seções
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: softSkillsRef, inView: softSkillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: hardSkillsRef, inView: hardSkillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: projetosRef, inView: projetosInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contatosRef, inView: contatosInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Header />
      <div ref={heroRef} style={{ opacity: heroInView ? 1 : 0, transition: 'opacity 2s ease-out' }}>
        <Hero />
      </div>
      <hr />
      <div ref={softSkillsRef} style={{ opacity: softSkillsInView ? 1 : 0, transition: 'opacity 2s ease-out' }}>
        <SoftSkills />
      </div>
      <hr />
      <div ref={hardSkillsRef} style={{ opacity: hardSkillsInView ? 1 : 0, transition: 'opacity 2s ease-out' }}>
        <HardSkills />
      </div>
      <hr />
      <div ref={projetosRef} style={{ opacity: projetosInView ? 1 : 0, transition: 'opacity 2s ease-out' }}>
        <Projetos />
      </div>
      <hr />
      <div ref={contatosRef} style={{ opacity: contatosInView ? 1 : 0, transition: 'opacity 2s ease-out' }}>
        <Contatos />
      </div>
    </>
  );
}

export default App;
