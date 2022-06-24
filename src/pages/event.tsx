import { useParams } from "react-router-dom"
import {Header} from "../components/Header"
import {Sidebar} from "../components/Sidebar"
import { Video } from "../components/Video"

interface Params {
  slug: string;
}

export function Event(){
  const {slug} = useParams<{slug: string}>()
  
  return (
    <div className="container-general">
      <Header />
      <main className="main-general">
          <Video />
          <Sidebar />
      </main>
    </div>
  )
}