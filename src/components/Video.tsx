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
  const {data} = useQuery(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug,
    }
  } )
  console.log(data)
  if(!data){
    <p>Carregando....</p>
  }

  return(
    <div className="video">
      <div className="video-container-black">
        <div className="video-content"> 
          <Player>
            <Youtube videoId="Ox_zb2cs9zM"/>
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="video-rest">
        <div className="title-desc">
          
          <div className="text-desc">
            <h1>Aula 01 -Abertura do Ignite-Lab</h1>
            <p>Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>
            
            <div className="video-teacher">
              <img src="https://github.com/Osvaldo943.png" alt="" />
              <div className="leading-relaxed">
                <strong>Osvaldo de Sousa</strong>
                <span>Web Developer in Dline-Code</span>
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