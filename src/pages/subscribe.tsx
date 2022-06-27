import { gql, useMutation } from "@apollo/client"
import { useState, FormEvent } from "react"
import codeGroup from "../assets/code-group.png"
import { Logo } from "../components/Logo"
import {useNavigate} from "react-router-dom"

const CREATE_SUBSCRIBER_MUTATION = gql`
mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION);
  const navigate = useNavigate();

 async  function HandleSubscribe(e: FormEvent){
    e.preventDefault();
   await createSubscriber({
      variables:{
        name,
        email
      }
    })
    navigate("./event")
  }
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
        <form action="" onSubmit={HandleSubscribe}>
          <input type="text" placeholder="Seu nome completo" onChange={event => setName(event.target.value)} />
          <input type="text" placeholder="Digite seu email"  onChange={event => setEmail(event.target.value)} />
          <button type="submit" disabled={loading}>Garantir minha vaga</button>
        </form>
      </div>
      </div>
     
      <div>
        <img src={codeGroup} alt="" />
      </div>
    </div>
  )
}