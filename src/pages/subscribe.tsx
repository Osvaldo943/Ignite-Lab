import codeGroup from "../assets/code-group.png"
import { Logo } from "../components/Logo"

export function Subscribe(){
  return(
    <div className="subscribe">
      <div className="hero-subscribe">
        <div className="text-side-subscribe">
        <Logo />
        <h1>Construa uma <strong>aplicação complete</strong> do zero, com <strong>React</strong></h1>
        <p>Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>
      </div>
      <div>
        <img src={codeGroup} alt="" />
      </div>
    </div>
  )
}