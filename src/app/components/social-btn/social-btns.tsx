import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

interface SocialBtnsProps {

}
export default function SocialBtns(props: SocialBtnsProps) {
    return (
        <div className="social">
            <a href="">
                <InstaIcon />
            </a>
            <a href="">
                <LinkedInIcon />
            </a>
            <a href="">
                <GitHubIcon />
            </a>
        </div>
    )
}