import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

function Contatos() {
    return (
        <>
        <section className="contato" id="contato">
            <div className="container">

            <h1 className="titulo-contato">Vamos <span>conversar ?</span></h1>
            <p>Estou aberta a novas oportunidades e colaborações. Entre em contato comigo através das redes sociais!
            </p>
            <div className="redes-sociais">
                <a href="https://www.linkedin.com/in/michele-bianca-9a1350149/" 
                target="_blank" rel="noopener noreferrer"> 
                    <FiLinkedin size={32} />
                </a>
                <a href="https://github.com/MicheleBiOS" 
                target="_blank" rel="noopener noreferrer">
                    <FiGithub size={32} />
                </a>
                <a href="mailto:micheeleb100@gmail.com">
                <FiMail size={32} />
                </a>
            </div>
            </div>
        </section>
         <p className="rodape-contato">
            © 2026 Michele Bianca. Desenvolvido com ❤ e React.
         </p>
        </>

)
}


export default Contatos;
