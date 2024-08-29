import Image from "next/image";


export default function Home() {
  return (
    <main >
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1>Hi, I'm Felipe</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <p>text</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <div className="lenguages-info">
            <span>Pt-Br - Native Speaker</span>
          </div>
          <h3>Education</h3>
        </div>
      </div>

    </main>
  );
}
