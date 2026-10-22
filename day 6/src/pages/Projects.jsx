const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built using React and routing.",
    technologies: ["React", "CSS", "React Router"],
  },
  {
    title: "MERN CRUD Application",
    description:
      "A web application for creating, viewing, updating, and deleting records.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Business Analytics Dashboard",
    description:
      "A dashboard concept for presenting business information and insights.",
    technologies: ["Python", "Streamlit", "Data Visualization"],
  },
];

function Projects() {
  return (
    <section className="page">
      <p className="eyebrow">WHAT I'VE BEEN BUILDING</p>
      <h1>My <span>Projects</span></h1>

      <p className="section-description">
        Some projects that demonstrate my learning and skills.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-icon">&lt;/&gt;</div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;