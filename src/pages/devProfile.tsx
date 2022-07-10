import { Square,AddressBook, Barbell, Code, EyedropperSample, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, PhoneCall, ArrowArcLeft, ArrowLeft, ArrowCircleDownLeft, ArrowCircleLeft, ArrowCircleRight } from "phosphor-react"
import {Header} from "../components/Header"
import {Link} from "react-router-dom"
import AvatarProfile from "../assets/avatar-profile.jpg"

export function DevProfile(){
  return(
    <div className="dev-profile">
      <Header /> 
      <div className="container">
        <div className="left-profile">
          <div className="image-profile">
            <img src={AvatarProfile} alt="Osvaldo's Avatar" />
            <span>Osvaldo de Sousa</span>
            <span>Front-End</span>
          </div>
          <ul className="dev-info-profile">
            <li>
              <Link to="https://github.com/Osvaldo943/">
                <span><GithubLogo /></span>
                <p>Visit my GitHub</p>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/osvaldo-de-sousa-01a937206/">
                <span><LinkedinLogo /></span>
                <p>Visit my linkdein</p>
              </Link>
            </li>
            <li>
              <Link to="">
                <span><FacebookLogo /></span>
                <p>Visit my Facebook</p>
              </Link>
            </li>
            <li>
              <Link to="">
                <span><InstagramLogo /></span>
                <p>Visit my Instagram</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-profile">
          <div className="dev-desc-profile">
            <p>Osvaldo de Sousa is my name, front-end developer in DLine-Code. 
              I'm focused on JavaScript and I like building projects that 
              challenge myself. For doing my projects I often use: {"{React, TypeScript, TailWindCSS, React Native and Node}"}.
              <br/>
              I love doing what I do and I'm building my career.
            </p>
            <div className="dev-contact">
              <span><i><Square /> </i> Angola, Luanda</span>
              <span><i><PhoneCall /> </i> 943-942-499</span>
              <span><i><Code /> </i> DLine-Code</span>
            </div>
          </div>
          <div className="dev-skills">
            <p>Skills</p>
            <ul className="dev-carroussels-skills">
            <i><ArrowCircleLeft className="arrows arrow-left"/></i>
            <Link to="">
              <li>HTML </li>
            </Link>
            <Link to="">
              <li>CSS </li>
            </Link>
            <Link to="">
              <li>JavaScript </li>
            </Link>
            <Link to="">
              <li>React </li>
            </Link>
            <i className="arrows arrow-right"><ArrowCircleRight/></i>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}