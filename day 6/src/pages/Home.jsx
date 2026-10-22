import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero page">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Avinash</span>
        </h1>

        <h2>React Developer | Full Stack Learner</h2>

        <p className="description">
          I enjoy building modern websites and interactive web
          applications using React, JavaScript, HTML, and CSS.
          I love learning new technologies and solving problems
          through code.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn">
            Explore Projects
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
{/* 
      <div className="hero-card">
        <div className="avatar">AC</div>
        <h2>Avinash C.</h2>
        <p>Web Development Enthusiast</p>
        <div className="status">
          <span></span> Open to learning opportunities
        </div>
      </div> */}
    </section>
  );
}

export default Home;