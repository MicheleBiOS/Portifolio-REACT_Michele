import { FiExternalLink } from "react-icons/fi";

function Projetos() {
  return (
    <section className="projetos" id="projetos">
     <div className="container">
        <h2 className="titulo-projetos">
          Meus <span>projetos</span>
        </h2>

    <div className="projetos-cards">
        <div className="projeto titulo01">
            <h3>Front end com IA</h3>
            <p>Desenvolvimento de uma interface moderna, responsiva e interativa durante a Imersão Front-end com IA da Alura, com foco em organização visual e experiência do usuário.</p> 
            <div className="tecnologias">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
            </div>
            <a href="https://michelebios.github.io/Front-End-com-IA/" className="link-projeto">
                Ver Projeto <FiExternalLink size={18} />
            </a>

        </div>    
        <div className="projeto titulo02">
            <h3>Portifólio pessoal</h3>
            <p>Desenvolvimento de um portfólio pessoal responsivo para apresentar minha trajetória, habilidades e projetos, com foco em identidade visual, navegação e experiência do usuário.</p>
            <div className="tecnologias">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
            </div>
            <a href="#" className="link-projeto">
                Ver Projeto <FiExternalLink size={18} />
            </a>
        </div>
        
        </div>
    </div>
    </section>
  )
}

export default Projetos