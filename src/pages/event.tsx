import {Header} from "../components/Header"
import {Sidebar} from "../components/Sidebar"
import { Video } from "../components/Video"
export function Event(){
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