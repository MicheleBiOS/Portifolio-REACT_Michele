import { useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <header className="header">
      <div className="container header-conteudo">
        <h2 className="logo">Portifólio</h2>
        <nav 
        className={menuAberto ? "menu aberto" : "menu"} 
        onClick = {() => setMenuAberto(false)}> {/*onClick: quando o menu for clicado, a função setMenuAberto é chamada com o valor false, indicando que o menu deve ser fechado.*/}
        <a href="#hero">Início</a>
        <a href="#sobre">Sobre</a>        
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
     
      </div>

      <button 
        className = "btn-menu"
        onClick = {() => setMenuAberto(!menuAberto)} > ☰ 
      </button> {/*Botão para abrir o menu em telas menores*/ /*onClick: quando o botão for clicado, a função setMenuAberto é chamada com o valor true, indicando que o menu deve ser aberto.*/}
        

    </header>
  )
}

export default Header

