import React from 'react';

const skills = [
  'Web Development',
  'Web Design',
  'UI/UX Design',
  'HTML',
  'React',
  'MERN Stack',
  'Node.js',
  'CSS',
  'Business Analytics',
  'MySQL'
];

const highlights = [
  {
    title: 'Design-minded builder',
    description:
      'I turn clean visual ideas into responsive interfaces that feel modern, fast, and easy to use.'
  },
  {
    title: 'Frontend + full-stack foundation',
    description:
      'My training covers React, Node.js, and the MERN stack, so I can work from interface to backend flow.'
  },
  {
    title: 'Business-aware thinking',
    description:
      'I also bring a bit of business analytics into my process, which helps me design with users and goals in mind.'
  }
];

const projects = [
  {
    name: 'Landing page systems',
    detail: 'Bold hero sections, clear hierarchy, and conversion-friendly layouts for modern brands.'
  },
  {
    name: 'Interactive dashboards',
    detail: 'Readable data views with polished cards, filters, and responsive states.'
  },
  {
    name: 'Student and business apps',
    detail: 'Practical interfaces that balance usability, structure, and visual identity.'
  }
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark" />
            <span>Portfolio</span>
          </div>
          <a className="nav-link" href="mailto:hawming0723@gmail.com">
            Let’s connect
          </a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Republic Polytechnic • Digital Design and Development</p>
            <h1>
              Hi, I'm <span className="name-highlight">NG HAW MING</span>, a fresh graduate building sharp digital experiences.
            </h1>
            <p className="lede">
              I’m 22 and passionate about web development, web design, and UI/UX design. I like
              creating polished websites and applications that look premium, feel intuitive, and work
              well across devices.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">
                About me
              </a>
              <a className="button button-secondary" href="#contact">
                Contact
              </a>
            </div>
          </section>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Clean visuals, thoughtful interaction, and practical execution.</h2>
          </div>
          <div className="about-grid">
            {highlights.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>What I work with</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">What I can build</p>
            <h2>Project directions that fit my strengths</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <p className="project-index">0{index + 1}</p>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something sharp together.</h2>
            <p>
              If you want a web portfolio, a product landing page, or a simple digital presence, I’d
              be happy to help.
            </p>
          </div>
          <a className="button button-primary" href="mailto:hawming0723@gmail.com">
            Send me an email
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
