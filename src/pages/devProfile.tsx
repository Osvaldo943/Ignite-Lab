import { Barbell, EyedropperSample, GithubLogo, LinkedinLogo } from "phosphor-react"
import {Header} from "../components/Header"
import AvatarProfile from "../assets/avatar-profile.jpg"

export function DevProfile(){
  return(
    <div className="dev-profile">
      <Header />
      <div className="container">
        <div className="left-profile">
          <div className="image-profile">
            <img src={AvatarProfile} alt="Osvaldo's Avatar" />
          </div>
          <ul className="dev-info-profile">
            <li>
              <span><Barbell /></span>
              <h2>Osvaldo de Sousa</h2>
            </li>
            <li>
              <span><EyedropperSample /></span>
              <h2>Frontend developer</h2>
            </li>
            <li>
              <span><Barbell /></span>
              <h2>Member of DLine-Code</h2>
            </li>
            <li>
              <span><address /></span>
              <h2>Angola, Luanda</h2>
            </li>
            <li>
              <span><GithubLogo /></span>
              <h2>https://github.com/Osvaldo943</h2>
            </li>
            <li>
              <span><LinkedinLogo /></span>
              <h2>https://www.linkedin.com/in/osvaldo-de-sousa-01a937206/</h2>
            </li>
          </ul>
        </div>
        <div className="right-profile">
          <div className="dev-desc-profile">
            <p>Left sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft sideLeft side</p>
          </div>
          <ul className="dev-carroussels-skills">
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
          </ul>
        </div>
      </div>
    </div>
  )
}