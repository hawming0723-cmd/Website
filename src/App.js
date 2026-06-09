import React from 'react';

const e = React.createElement;

const skills = [
  'Web Development',
  'Web Design',
  'UI/UX Design',
  'HTML',
  'React',
  'MERN Stack',
  'Node.js',
  'CSS',
  'Business Analytics'
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
  return e(
    'div',
    { className: 'page-shell' },
    e(
      'header',
      { className: 'hero' },
      e(
        'nav',
        { className: 'topbar' },
        e(
          'div',
          { className: 'brand' },
          e('span', { className: 'brand-mark' }),
          e('span', null, 'Portfolio')
        ),
        e(
          'a',
          { className: 'nav-link', href: 'mailto:your.email@example.com' },
          'Let’s connect'
        )
      ),
      e(
        'div',
        { className: 'hero-grid' },
        e(
          'section',
          { className: 'hero-copy' },
          e('p', { className: 'eyebrow' }, 'Republic Polytechnic • Digital Design and Development'),
          e(
            'h1',
            null,
            'Hi, I’m ',
            e('span', null, 'Your Name'),
            ', a fresh graduate building sharp digital experiences.'
          ),
          e(
            'p',
            { className: 'lede' },
            'I’m 22 and passionate about web development, web design, and UI/UX design. I like creating polished websites and applications that look premium, feel intuitive, and work well across devices.'
          ),
          e(
            'div',
            { className: 'hero-actions' },
            e(
              'a',
              { className: 'button button-primary', href: '#about' },
              'About me'
            ),
            e(
              'a',
              { className: 'button button-secondary', href: '#contact' },
              'Contact'
            )
          ),
          e(
            'div',
            { className: 'stats' },
            e('div', null, e('strong', null, '22'), e('span', null, 'years old')),
            e('div', null, e('strong', null, 'RP'), e('span', null, 'fresh grad')),
            e('div', null, e('strong', null, 'MERN'), e('span', null, 'stack focus'))
          )
        ),
        e(
          'aside',
          { className: 'hero-card' },
          e('div', { className: 'card-orb orb-one' }),
          e('div', { className: 'card-orb orb-two' }),
          e('p', { className: 'card-label' }, 'Core profile'),
          e('h2', null, 'Designer-first, developer-ready.'),
          e(
            'p',
            null,
            'I enjoy turning ideas into sleek interfaces, then wiring them up with clean front-end and full-stack logic.'
          ),
          e(
            'ul',
            { className: 'quick-list' },
            e('li', null, 'Responsive layouts'),
            e('li', null, 'UI/UX systems'),
            e('li', null, 'React components'),
            e('li', null, 'Node.js APIs')
          )
        )
      )
    ),
    e(
      'main',
      null,
      e(
        'section',
        { className: 'section', id: 'about' },
        e(
          'div',
          { className: 'section-heading' },
          e('p', { className: 'eyebrow' }, 'About me'),
          e('h2', null, 'Clean visuals, thoughtful interaction, and practical execution.')
        ),
        e(
          'div',
          { className: 'about-grid' },
          highlights.map((item) =>
            e(
              'article',
              { className: 'info-card', key: item.title },
              e('h3', null, item.title),
              e('p', null, item.description)
            )
          )
        )
      ),
      e(
        'section',
        { className: 'section' },
        e(
          'div',
          { className: 'section-heading' },
          e('p', { className: 'eyebrow' }, 'Skills'),
          e('h2', null, 'What I work with')
        ),
        e(
          'div',
          { className: 'skill-cloud' },
          skills.map((skill) => e('span', { className: 'skill-pill', key: skill }, skill))
        )
      ),
      e(
        'section',
        { className: 'section' },
        e(
          'div',
          { className: 'section-heading' },
          e('p', { className: 'eyebrow' }, 'What I can build'),
          e('h2', null, 'Project directions that fit my strengths')
        ),
        e(
          'div',
          { className: 'project-grid' },
          projects.map((project, index) =>
            e(
              'article',
              { className: 'project-card', key: project.name },
              e('p', { className: 'project-index' }, `0${index + 1}`),
              e('h3', null, project.name),
              e('p', null, project.detail)
            )
          )
        )
      ),
      e(
        'section',
        { className: 'section contact-section', id: 'contact' },
        e(
          'div',
          null,
          e('p', { className: 'eyebrow' }, 'Contact'),
          e('h2', null, 'Let’s build something sharp together.'),
          e(
            'p',
            null,
            'If you want a web portfolio, a product landing page, or a simple digital presence, I’d be happy to help.'
          )
        ),
        e(
          'a',
          { className: 'button button-primary', href: 'mailto:your.email@example.com' },
          'Send me an email'
        )
      )
    )
  );
}

export default App;