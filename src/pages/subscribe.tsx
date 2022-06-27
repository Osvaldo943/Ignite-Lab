import codeGroup from "../assets/code-group.png"
import { Logo } from "../components/Logo"

export function Subscribe(){
  return(
    <div className="subscribe">
      <div className="hero-subscribe">
        <div className="text-side-subscribe ">
          <div className="logo-subscribe">
          <Logo />
          </div>
        <h1>Construa uma <strong>aplicação complete</strong> do zero, com <strong>React</strong></h1>
        <p>Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>
        <div className="form-subsccribe">
        <strong>Inscreva-se gratuitamente</strong>
        <form action="">
          <input type="text" placeholder="Seu nome completo" />
          <input type="text" placeholder="Digite seu email" />
          <button type="submit">Garantir minha vaga</button>
        </form>
      </div>
      </div>
     
      <div>
        <img src={codeGroup} alt="" />
      </div>
    </div>
  )
}