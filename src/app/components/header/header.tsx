import Image from "next/image";

export default function Header() {
    return (
        <div className="header">
            <div>
                <h1>Hi, I`m Felipe</h1>
                <h2>Software Engineer</h2>
            </div>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
                priority
            />
        </div>
    )
};
