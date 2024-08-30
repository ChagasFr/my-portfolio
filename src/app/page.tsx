import Header from "./components/header/header";

export default function Home() {
  return (
    <main >
      <Header />
      <div className="experience">
        <h3>Experience</h3>
        <p>1 year of experience as a software developer, internship at Banco Safra, and development experience gained during college and personal projects.</p>
        <div className="experience-time">

        </div>
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
      </div>
    </main>
  );
}
