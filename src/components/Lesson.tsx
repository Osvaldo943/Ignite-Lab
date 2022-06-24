import {CheckCircle, Lock} from "phosphor-react"
import {isPast, format} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import {Link} from "react-router-dom"

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live'|'class';
}

export function Lesson(props: LessonProps){
  const IsLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
    locale: ptBR,
  })
  return(
    <Link to={`/event/lesson/${props.slug}`} className="frame-class">
      <span className="one">{availableDateFormatted.toString()}</span>
      <div>
        <header>
          {IsLessonAvailable ? (
           <span className="two">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) :  (
            <span className="two-two">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="three">{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'} </span>
        </header>
        <strong>{props.title}</strong>
      </div>
    </Link>
  )
}