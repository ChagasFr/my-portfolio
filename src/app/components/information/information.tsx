import { SectionTitle } from "../sectionTitle/sections-title"
import "./information.scss"

export function Info() {
    return (
        <div className="infos">
            <SectionTitle text="lenguages" />
            <div className="lenguages-info">
                <span>Pt-Br - Native Speaker</span>
            </div>
            <SectionTitle text="Education" />
            <h3>Education</h3>
            <div className="educational-info">
                <span>Engenharia da Computação bachelors degree - Universidade São Judas Tadeu</span>
            </div>
        </div>
    )
}