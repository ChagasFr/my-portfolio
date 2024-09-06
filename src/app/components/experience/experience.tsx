import { SectionTitle } from "../sectionTitle/sections-title"

import Image from "next/image";

import "./experience.scss"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <h3>Experience</h3>
            <p>1 year of experience as a software developer, internship at Banco Safra, and development experience gained during college and personal projects.</p>
            <div className="experience-time">
                <div>
                    <Image
                        src="/public/react.png"
                        alt="React Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure">

                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/public/angular.png"
                        alt="Angular Logo"
                        width={50}
                        height={50}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure">

                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/public/ts.png"
                        alt="Typescrip Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure">

                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/public/js.png"
                        alt="Javascript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure">

                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/public/py.png"
                        alt="python Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}