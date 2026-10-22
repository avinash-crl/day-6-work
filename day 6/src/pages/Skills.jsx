const skills = [
  { name: "HTML", level: "Web structure" },
  { name: "CSS", level: "Web styling" },
  { name: "JavaScript", level: "Programming" },
  { name: "React", level: "Frontend development" },
  { name: "Node.js", level: "Backend fundamentals" },
  { name: "MongoDB", level: "Database fundamentals" },
  { name: "Python", level: "Programming basics" },
  { name: "Git", level: "Version control basics" },
];

function Skills() {
  return (
    <section className="page">
      <p className="eyebrow">WHAT I WORK WITH</p>
      <h1>My <span>Skills</span></h1>

      <p className="section-description">
        Technologies I use and continue to improve.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <h2>{skill.name}</h2>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;