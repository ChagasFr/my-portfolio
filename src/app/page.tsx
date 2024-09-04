import { Experience } from "./components/experience/experience";
import Header from "./components/header/header";
import { Info } from "./components/information/information";

import Image from "next/image";

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <div className="social"></div>
      </div>
      <button className="bnt-primary">
        contact Me!
        <Image
          src="/public/me.jpg"
          alt="Vercel Logo"
          width={325}
          height={277}
          priority
        />
      </button>
    </main>
  );
}
