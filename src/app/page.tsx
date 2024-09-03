import Header from "./components/header/header";

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="infos">
        <div className="lenguages-info">
          <span>Pt-Br - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>Engenharia da Computação bachelors degree - Universidade São Judas Tadeu</span>
        </div>
      </div>
      <div className="buttons">
        <div className="social"></div>
      </div>
      <button>contact Me!</button>
    </main>
  );
}
