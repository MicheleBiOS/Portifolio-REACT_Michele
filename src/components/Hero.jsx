function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="foto">
        <img
          className="minha-foto"
          src="./minha_foto.jpeg"
          alt="Minha foto"
        />

        <img
          className="foto-avatar"
          src="./foto-avatar.jpeg"
          alt="Meu avatar"
        />
</div>

      <h1 className="nome">Michele Bianca O S</h1>

      <p className="descricao">
        TI e Matemática | Desenvolvimento Full Stack e Dados
      </p>

      <div className="botoes">
        <a href="#projetos">Ver Projetos</a>
        <a href ="/TI-curriculo_Michele.pdf" download className="btn-outline">Baixar Currículo</a> 
      </div>
    </section>
  )
}

export default Hero