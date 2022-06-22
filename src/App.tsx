import {Header} from "./components/Header"
import {Sidebar} from "./components/Sidebar"
import {Lesson} from "./components/Lesson"
import {Video} from "./components/Video"

function App() {
  return (
    <div className="App">
      <Header />
      <Lesson />
      <Sidebar />
      <Video />
    </div>
  )
}
export default App
