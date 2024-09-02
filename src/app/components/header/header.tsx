import Image from "next/image";

import "./header.scss"

export default function Header() {
    return (
        <div className="header">
            <div>
                <h1>Hi, I`m Felipe</h1>
                <h2>Software Engineer</h2>
            </div>
            <Image
                src="/public/me.jpg"
                alt="Vercel Logo"
                width={325}
                height={277}
                priority
            />
        </div>
    )
};
