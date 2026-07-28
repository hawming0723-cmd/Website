import React, { useEffect, useState } from 'react';

const skillCategories = [
  { label: 'Front end', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
  { label: 'Back end', skills: ['Node.js', 'Express.js', 'REST APIs', 'Full-stack development'] },
  { label: 'Data', skills: ['MySQL', 'MongoDB'] },
  { label: 'Languages', skills: ['Python', 'JavaScript'] }
];

const experience = {
  role: 'IT Intern',
  company: 'Singapore Aero Support Services',
  dateRange: 'Mar 2025 — Aug 2025',
  bullets: [
    'Supported day-to-day IT operations and user systems.',
    'Handled orders and service requests across the business.',
    'Contributed to a VR training environment for practical learning.'
  ],
  tags: ['IT support', 'VR', 'Service']
};

const project = {
  name: 'StartHobby',
  role: 'Backend developer · Final year project',
  description: 'A hobby-sharing platform built to make it easier to discover people, interests, and new experiences. I developed the backend, shaped the API layer, and managed data flow.',
  tags: ['Node.js', 'Express', 'MySQL', 'APIs', 'Railway', 'Git'],
  githubUrl: 'https://github.com/jihuenyee/StartHobby/tree/master/server'
};

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient-layer" aria-hidden="true">
        <i className="ambient-orb ambient-orb--violet" />
        <i className="ambient-orb ambient-orb--lime" />
        <i className="ambient-orb ambient-orb--peach" />
      </div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Haw Ming home" onClick={closeMenu}>
          <span>HM</span><i>—</i>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-intro hero-animate hero-animate--one">
            <p className="kicker"><span className="live-dot" /> Available for opportunities</p>
            <p className="hero-side-note">Based in<br />Malaysia</p>
          </div>
          <h1 id="hero-title" className="hero-animate hero-animate--two">Digital experiences with<br /><em>clarity</em> &amp; character.</h1>
          <div className="hero-bottom hero-animate hero-animate--three">
            <p>I’m <strong>Haw Ming</strong>, a Digital Design &amp; Development graduate crafting thoughtful web experiences from idea to interface.</p>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span>DESIGN</span><b>HM</b><span>DEVELOP</span>
          </div>
        </section>

        <section className="intro-section section-pad" id="about" data-reveal>
          <p className="section-index">01 / ABOUT</p>
          <div className="intro-copy">
            <h2>A curious builder with an eye for the details that make a product feel <em>right.</em></h2>
            <p>I care about making the useful feel effortless. My work combines visual sensitivity with responsive, practical front-end development—and I enjoy working across the stack when a project calls for it.</p>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Clear by design</h3><p>Simple visual systems that let people focus on what matters.</p></article>
            <article><span>02</span><h3>Built to respond</h3><p>Interfaces that feel considered on every screen and input.</p></article>
            <article><span>03</span><h3>Useful first</h3><p>Polish is most powerful when it supports a real outcome.</p></article>
          </div>
        </section>

        <section className="featured-work section-pad" id="work" data-reveal>
          <div className="section-heading-row"><p className="section-index">02 / SELECTED WORK</p><p>01 — 01</p></div>
          <a className="project-feature" href={project.githubUrl} target="_blank" rel="noreferrer">
            <div className="project-art" aria-hidden="true"><span className="art-label">SH</span><span className="art-circle" /><span className="art-line" /></div>
            <div className="project-content">
              <div><p className="project-number">001</p><h2>{project.name}</h2></div>
              <div className="project-details"><p>{project.role}</p><p>{project.description}</p><span className="text-link">View the code <Arrow /></span></div>
            </div>
          </a>
        </section>

        <section className="experience-section section-pad" data-reveal>
          <div className="section-heading-row"><p className="section-index">03 / EXPERIENCE</p><p>2025</p></div>
          <article className="experience-card">
            <div className="experience-title"><h2>{experience.role}</h2><p>{experience.company}</p></div>
            <p className="experience-date">{experience.dateRange}</p>
            <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <div className="tag-list">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        </section>

        <section className="skills-section section-pad" data-reveal>
          <div className="section-heading-row"><p className="section-index">04 / TOOLKIT</p><p>Always learning</p></div>
          <div className="skills-list">
            {skillCategories.map(({ label, skills }, index) => (
              <div className="skill-row" key={label}>
                <span>0{index + 1}</span>
                <h3>{label}</h3>
                <div className="skill-chips">
                  {skills.map((skill) => <b key={skill}>{skill}</b>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" data-reveal>
          <p className="section-index">05 / CONTACT</p>
          <h2>Have a thoughtful idea?<br /><em>Let’s make it real.</em></h2>
          <a href="mailto:hawming0723@gmail.com" className="email-link">hawming0723@gmail.com <Arrow /></a>
          <p className="footer-note">© {new Date().getFullYear()} Haw Ming &nbsp;·&nbsp; Built with intention</p>
        </section>
      </main>
    </div>
  );
}

export default App;
