import { Experience } from "./components/experience/experience";
import Header from "./components/header/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Info } from "./components/information/information";
import SocialBtns from "./components/social-btn/social-btns";

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
      </div>
      <a className="bnt-primary" href="mailto:felipechagasdosreis@gmail.com">
        contact Me!
        <EmailIcon />
      </a>
    </main>
  );
}
