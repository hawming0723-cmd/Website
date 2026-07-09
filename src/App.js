import React, { useEffect, useState, useRef } from 'react';

const skillCategories = {
  frontend: [
    { name: 'HTML', icon: '/logos/HTML.png' },
    { name: 'CSS', icon: '/logos/CSS.png' },
    { name: 'JavaScript', icon: '/logos/JavaScript.png' },
    { name: 'React', icon: '/logos/React.png' },
    { name: 'Bootstrap', icon: '/logos/Bootstrap.png' }
  ],
  backend: [
    { name: 'Node.js', icon: '/logos/NodeJS.png' },
    { name: 'Express.js', icon: '/logos/ExpressJS.png' },
    { name: 'Full Stack Development', icon: '/logos/MernStack.png' }
  ],
  database: [
    { name: 'MySQL', icon: '/logos/MySQL.png' },
    { name: 'MongoDB', icon: '/logos/MongoDB.png' }
  ],
  languages: [
    { name: 'Python', icon: '/logos/python.png' },
    { name: 'JavaScript', icon: '/logos/JavaScript.png' }
  ]
};

const highlights = [
  {
    title: 'Design-minded builder',
    description:
      'I turn visual ideas into responsive interfaces that feel modern, fast, and easy to use.'
  },
  {
    title: 'Frontend + full-stack foundation',
    description:
      'My skills covers React, Node.js, and the MERN stack, so I can work from interface to backend flow.'
  },
  {
    title: 'Business-aware thinking',
    description:
      'I also bring a bit of business analytics into my process, which helps me design with users and goals in mind.'
  }
];

const experiences = [
  {
    title: 'IT Intern',
    company: 'Singapore Aero Support Services',
    dateRange: '03/2025 – 08/2025',
    bullets: [
      'Provided technical support for IT-related issues, contributing to the smooth operation of systems',
      'Handled customer orders efficiently and provided friendly service',
      'Contributed to the development of a VR environment for cabin training, enhancing learning effectiveness'
    ],
    tags: ['Technical Support', 'VR Development', 'Customer Service']
  }
];

const projects = [
  {
    name: 'StartHobby',
    role: 'Backend Developer',
    description: 'Full-stack web application (FYP). Collaborated to develop a hobby-sharing platform with backend using Node.js, Express.js, and MySQL. Built RESTful APIs, managed database operations, deployed on Railway, and coordinated via Git.',
    tags: ['Node.js', 'Express.js', 'MySQL', 'RESTful APIs', 'Railway', 'Git'],
    githubUrl: 'https://github.com/jihuenyee/StartHobby/tree/master/server'
  }
];

function App() {
  const cursorRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.section, .skill-category');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            const pills = entry.target.querySelectorAll('.skill-pill');
            pills.forEach((pill, i) => {
              pill.style.transitionDelay = `${i * 180}ms`;

              setTimeout(() => {
                pill.style.transitionDelay = '0ms';
              }, i * 180 + 500);
            });
            } else {
              entry.target.classList.remove('visible');

              const pills = entry.target.querySelectorAll('.skill-pill');
              pills.forEach((pill) => {
                pill.style.transitionDelay = '0ms';
              });
            }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!thumbRef.current) return;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = window.scrollY / scrollHeight;

      thumbRef.current.style.top =
        `${scrolled * (window.innerHeight - 120)}px`;
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
  const MIN_SPEED = 0.1;
  const MAX_SPEED = 0.35;
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  //amount of particles aand their properties
  const particles = Array.from({ length: 50 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: 1 + Math.random() * 0.75,
    speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
    opacity: 0.4 + Math.random() * 1,
    drift: (Math.random() - 0.5) * 0.4,   
    hue: 15 + Math.random() * 25
  }));

  let animId;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;

      //reset to top when it falls off bottom
      if (p.y > canvas.height + 10) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
        p.opacity = 0.2 + Math.random() * 0.7;
        p.speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`;
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }
  animId = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
    document.body.removeChild(canvas);
  };
}, []);

  const activateCursor = () => {
    cursorRef.current?.classList.add('active');
  };

  const deactivateCursor = () => {
    cursorRef.current?.classList.remove('active');
  };

  return (
    <div className="page-shell">
      <div className="custom-scrollbar">
       <div
        ref={thumbRef}
        className="scrollbar-thumb" 
      />
      </div>
      <div
        ref={cursorRef}
        className="custom-cursor"
      />
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark" />
            <span></span>
          </div>
          <a className="nav-link" href="mailto:hawming0723@gmail.com" onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
            Let’s connect
          </a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <h1>
              Hi, I'm <span className="name-highlight">HAW MING</span>, a fresh graduate web developer building sharp digital experiences.
            </h1>
            <p className="lede">
              I'm interested in creating websites and applications that look premium, feel intuitive, and work well across devices.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about" onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                About me
              </a>
              <a className="button button-secondary" href="#contact" onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                Contact
              </a>
            </div>
          </section>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading">
            <h2>Clean visuals, thoughtful interaction, and practical execution.</h2>
          </div>
          <div className="about-grid">
            {highlights.map((item) => (
              <article className="info-card" key={item.title} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="stack-header">
            <p className="eyebrow">My Skills</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">FRONTEND</h3>
              <div className="skill-cloud">
                {skillCategories.frontend.map((skill, index) => (
                  <span className="skill-pill" key={skill.name} style={{ '--skill-delay': `${index * 200}ms` }} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">BACKEND</h3>
              <div className="skill-cloud">
                {skillCategories.backend.map((skill, index) => (
                  <span className="skill-pill" key={skill.name} style={{ '--skill-delay': `${index * 200}ms` }} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">DATABASE</h3>
              <div className="skill-cloud">
                {skillCategories.database.map((skill, index) => (
                  <span className="skill-pill" key={skill.name} style={{ '--skill-delay': `${index * 200}ms` }} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">LANGUAGES</h3>
              <div className="skill-cloud">
                {skillCategories.languages.map((skill, index) => (
                  <span className="skill-pill" key={skill.name} style={{ '--skill-delay': `${index * 200}ms` }} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>My Work Experience</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <article className="experience-card" key={experience.company} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>
                  <p className="experience-date">{experience.dateRange}</p>
                </div>
                <ul className="experience-bullets">
                  {experience.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {experience.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>My Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-showcase-card" key={project.name} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-role">{project.role}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-button" onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
                  <img src="/logos/github.png" alt="GitHub" className="github-icon" />
                  <span>Code</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Writing</p>
            <h2>Thoughts and Articles</h2>
          </div>
          <div className="writing-grid">
            <article className="writing-card" onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
              <p className="writing-placeholder">Coming soon...</p>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something together.</h2>
            <p>
              If you need something that is within my skill set, I’d be happy to help.
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
