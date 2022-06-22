import { Lesson } from "./Lesson";

export function Sidebar(){
  return(
    <aside className="sidebar">
      <span className="cronograma">Cronograma de aulas</span>

      <div className="list-lessons">
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  )
}