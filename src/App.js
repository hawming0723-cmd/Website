import React, { useEffect, useState } from 'react';

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
    { name: 'MERN Stack', icon: '/logos/MernStack.png' }
  ],
  database: [
    { name: 'MySQL', icon: '/logos/MySQL.png' },
    { name: 'MongoDB', icon: '/logos/MongoDB.png' }
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
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });
  const [scrollProgress, setScrollProgress] = useState(0);

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
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(scrolled)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor((current) => ({
        x: event.clientX,
        y: event.clientY,
        active: current.active
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
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

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: 1 + Math.random() * 0.75,
    speed: 0.1 + Math.random() * 0.25,
    opacity: 0.4 + Math.random() * 1,
    drift: (Math.random() - 0.5) * 0.3,   
    hue: 15 + Math.random() * 25
  }));

  let animId;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;

      // reset to top when it falls off bottom
      if (p.y > canvas.height + 10) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
        p.opacity = 0.2 + Math.random() * 0.7;
        p.speed = 0.8 + Math.random() * 2.2;
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

  const activateCursor = () => setCursor((current) => ({ ...current, active: true }));
  const deactivateCursor = () => setCursor((current) => ({ ...current, active: false }));

  return (
    <div className="page-shell">
      <div className="custom-scrollbar">
        <div className="scrollbar-thumb" style={{ top: scrollProgress !== 0 ? `${scrollProgress * (window.innerHeight - 120)}px` : '0px' }} />
      </div>
      <div
        className={`custom-cursor ${cursor.active ? 'active' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
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
              I'm passionate about creating polished websites and applications that look premium, feel intuitive, and work well across devices.
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
            <p className="eyebrow">About me</p>
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
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">What I can build</p>
            <h2>Project directions that fit my strengths</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name} onMouseEnter={activateCursor} onMouseLeave={deactivateCursor}>
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
