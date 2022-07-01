import { useParams } from "react-router-dom"
import {Header} from "../components/Header"
import {Sidebar} from "../components/Sidebar"
import { Video } from "../components/Video"

export function Event(){
  const {slug} = useParams<{slug: string}>()

  return (
    <div className="container-general">
      <Header />
      <main className="main-general">
          {slug
          ? <Video lessonSlug={slug} /> 
          : <div className="event-without-net" style={{flex: 1}}>
                <h1>Selecione um vídeo, por favor</h1>
                <p>Event sem vídeo selecionado</p>
            </div>
          }
          <Sidebar />
      </main>
    </div>
  )
}