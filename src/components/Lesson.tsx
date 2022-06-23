import {CheckCircle, Lock} from "phosphor-react"
//import {isPast, format} from "date-fns"
//import ptBR from "date-fns/locale/pt-BR"


interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live'|'class';
}

export function Lesson(props: LessonProps){
  const IsLessonAvailable = false;
  /*const IsLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
    locale: ptBR,
  })*/
  return(
    <a href="" className="frame-class">
      <span className="one">{props.availableAt.toString()}</span>
      <div>
        <header>
          {IsLessonAvailable ? (
           <span className="two">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) :  (
            <span className="two">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="three">{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'} </span>
        </header>
        <strong>{props.title}</strong>
      </div>
    </a>
  )
}