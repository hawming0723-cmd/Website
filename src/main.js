const root = document.getElementById('root');

root.innerHTML = `
  <div class="page-shell">
    <header class="hero">
      <nav class="topbar">
        <div class="brand">
          <span class="brand-mark"></span>
          <span>Portfolio</span>
        </div>
        <a class="nav-link" href="mailto:your.email@example.com">Let’s connect</a>
      </nav>

      <div class="hero-grid">
        <section class="hero-copy">
          <p class="hero-label">About me</p>
          <h1 class="fade-in-name">NG HAW MING</h1>
          <p class="lede">
            I’m passionate about web development, web design, and UI/UX design. I like creating
            polished websites and applications that look premium, feel intuitive, and work well
            across devices.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#about">About me</a>
            <a class="button button-secondary" href="#contact">Contact</a>
          </div>
        </section>
      </div>
    </header>

    <main>
      <section class="section" id="about">
        <div class="section-heading">
          <p class="eyebrow">About me</p>
          <h2>Clean visuals, thoughtful interaction, and practical execution.</h2>
        </div>

        <div class="about-grid">
          <article class="info-card">
            <h3>Design-minded builder</h3>
            <p>
              I turn clean visual ideas into responsive interfaces that feel modern, fast, and easy
              to use.
            </p>
          </article>
          <article class="info-card">
            <h3>Frontend + full-stack foundation</h3>
            <p>
              My training covers React, Node.js, and the MERN stack, so I can work from interface to
              backend flow.
            </p>
          </article>
          <article class="info-card">
            <h3>Business-aware thinking</h3>
            <p>
              I also bring a bit of business analytics into my process, which helps me design with
              users and goals in mind.
            </p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Skills</p>
          <h2>What I work with</h2>
        </div>
        <div class="skill-cloud">
          <span class="skill-pill">Web Development</span>
          <span class="skill-pill">Web Design</span>
          <span class="skill-pill">UI/UX Design</span>
          <span class="skill-pill">HTML</span>
          <span class="skill-pill">React</span>
          <span class="skill-pill">MERN Stack</span>
          <span class="skill-pill">Express.js</span>
          <span class="skill-pill">Node.js</span>
          <span class="skill-pill">MySQL</span>
          <span class="skill-pill">MongoDB</span>
          <span class="skill-pill">Python</span>
          <span class="skill-pill">CSS</span>
          <span class="skill-pill">Business Analytics</span>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">What I can build</p>
          <h2>Project directions that fit my strengths</h2>
        </div>
        <div class="project-grid">
          <article class="project-card">
            <p class="project-index">01</p>
            <h3>Landing page systems</h3>
            <p>Bold hero sections, clear hierarchy, and conversion-friendly layouts for modern brands.</p>
          </article>
          <article class="project-card">
            <p class="project-index">02</p>
            <h3>Interactive dashboards</h3>
            <p>Readable data views with polished cards, filters, and responsive states.</p>
          </article>
          <article class="project-card">
            <p class="project-index">03</p>
            <h3>Student and business apps</h3>
            <p>Practical interfaces that balance usability, structure, and visual identity.</p>
          </article>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Let’s build something sharp together.</h2>
          <p>
            If you want a web portfolio, a product landing page, or a simple digital presence, I’d be
            happy to help.
          </p>
        </div>
        <a class="button button-primary" href="mailto:your.email@example.com">Send me an email</a>
      </section>
    </main>
  </div>
`;