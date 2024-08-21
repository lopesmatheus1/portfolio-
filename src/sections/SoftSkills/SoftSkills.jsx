
import { CardList } from './cards/Cards'


function SoftSkills() {
  
  return (
    <section id='Soft' style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    }}>
     <h2 style={{textAlign:"center", color:"white", marginBottom:'120px'}}>Soft Skills</h2>
      <CardList/>
    </section>
  )
}

export default SoftSkills
