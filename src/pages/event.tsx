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
          : <div style={{flex: 1}}>Selecione um vídeo por favor</div>
          }
          <Sidebar />
      </main>
    </div>
  )
}