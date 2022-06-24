import {CaretRight, DiscordLogo, FileArrowDown, Lightning} from "phosphor-react"
import { gql, useQuery } from "@apollo/client";
import {DefaultUi, Player, Youtube} from "@vime/react"

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug:String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      name
      bio
      avatarURL
    }
  }
}
`

interface LessonProps {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher : {
      name: string;
      bio: string;
      avatarURL: string;
    }
  }
}
interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps){
  const {data} = useQuery<LessonProps>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug,
    }
  } )
  console.log(data)
  if(!data){
    <div style={{display: 'flex'}}>
      <p>Carregando....</p>
    </div>
  }

  return(
    <div className="video">
      <div className="video-container-black">
        <div className="video-content"> 
          <Player>
            <Youtube videoId={`${data?.lesson.videoId}`} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="video-rest">
        <div className="title-desc">
          
          <div className="text-desc">
            <h1>{data?.lesson.title}</h1>
            <p>{data?.lesson.description}</p>
            
            <div className="video-teacher">
              <img src={data?.lesson.teacher.avatarURL} alt="" />
              <div className="leading-relaxed">
                <strong>{data?.lesson.teacher.name} </strong>
                <span>{data?.lesson.teacher.bio} </span>
              </div>
            </div>

          </div>

          <div>
            <a href="" className=""><i><DiscordLogo /> </i> Comunidade do Discord</a>
            <a href="" className="challenge-link"><i><Lightning /> </i> Comunidade do Discord</a>
          </div>
         </div>

         <div className="additional-material">
          <a href="">
            <div className="first-additional-material">
            <FileArrowDown size={48}/>
            </div>
            <div className="second-additional-material">
              <strong>Material complementar</strong>
              <p>Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="third-additional-material">
              <CaretRight size={24}/>
            </div>
          </a>
          <a href="">
            <div className="first-additional-material">
            <FileArrowDown size={48}/>
            </div>
            <div className="second-additional-material">
              <strong>Wallpapers exclusivos</strong>
              <p>Baixe Wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="third-additional-material">
              <CaretRight size={24}/>
            </div>
          </a>
         </div>
      </div>
    </div>
  )
}