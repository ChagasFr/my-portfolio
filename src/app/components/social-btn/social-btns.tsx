import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

interface SocialBtnsProps {

}
export default function SocialBtns(props: SocialBtnsProps) {
    return (
        <div className="social">
            <a href="https://www.instagram.com/rchagasog/">
                <InstaIcon />
            </a>
            <a href="https://www.linkedin.com/in/felipe-chagas-2702691b3/">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/ChagasFr">
                <GitHubIcon />
            </a>
        </div>
    )
}