import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

function ThemeToggle() {
  const initialTheme = useMemo(() => {
    const stored = window.localStorage.getItem('theme-preference');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }, []);

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme-preference', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark ? 'true' : 'false'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <i className="fas fa-moon" aria-hidden="true" />
      ) : (
        <i className="far fa-sun" aria-hidden="true" />
      )}
    </button>
  );
}

function Header({ isAbout }) {
  return (
    <header id="header">
      {isAbout ? (
        <NavLink to="/" className="title">
          <img src="/images/avatar.jpeg" alt="My Avatar" className="logo" />
        </NavLink>
      ) : null}

      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = 'Weile Zheng';
  }, []);

  return (
    <section id="main" className="wrapper">
      <div className="inner about-container">
        <div className="about-text">
          <NavLink to="/" className="title">
            <img src="/images/avatar.jpeg" alt="My Avatar" className="logo" />
          </NavLink>
          <h1>Weile Zheng</h1>
          <p style={{ marginTop: '-5px' }}>
            Hi, I am Weile! I am a Computer Science student at the{' '}
            <a href="https://cse.engin.umich.edu/">University of Michigan</a>. You can reach me at
            weilez@umich.edu!
          </p>

          <p style={{ marginTop: '-15px' }}>
            For more information, check out my <NavLink to="/about">About Page</NavLink>
          </p>

          <div style={{ marginTop: '-15px' }}>
            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/weile-zheng/"
                  className="icon brands fa-linkedin-in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Weile-Zheng"
                  className="icon brands fa-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="mailto:weilez@umich.edu" className="icon solid fa-envelope" target="_blank" rel="noreferrer">
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-image" style={{ textAlign: 'left', maxWidth: '400px' }}>
          <img
            src="/images/home_pic1.jpg"
            alt="Home photo"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', marginBottom: '20px' }}
          />
        </div>
      </div>

      <div className="inner">
        <div className="work-section">
          <div className="work-grid">
            <div>
              <h3>Work Experience</h3>
              <ul className="internship-list">
                <li>
                  <strong className="company-title">
                    <span className="company-row">
                      <img src="/images/logos/tesla-linkedin.png" alt="Tesla logo" className="company-logo" />
                      <span className="company-text">
                        <span className="company-name">Tesla</span>
                        <span className="role-title">Software Engineering Intern</span>
                      </span>
                    </span>
                  </strong>
                  <span className="work-desc">
                    Worked on the Cell Software Team where I developed the highly scalable and reliable
                    MES (Manufacturing Execution System) for Tesla cell and battery production.
                  </span>
                </li>
                <li>
                  <strong className="company-title">
                    <span className="company-row">
                      <img
                        src="/images/logos/aws-linkedin.png"
                        alt="Amazon Web Services logo"
                        className="company-logo"
                      />
                      <span className="company-text">
                        <span className="company-name">Amazon Web Services</span>
                        <span className="role-title">Software Engineering Intern</span>
                      </span>
                    </span>
                  </strong>
                  <span className="work-desc">
                    Worked on the Access Management Systems team and built internal security tools used
                    across all Amazon organizations for access controls and user permissions management.
                  </span>
                </li>
                <li>
                  <strong className="company-title">
                    <span className="company-row">
                      <img src="/images/logos/g2-linkedin.png" alt="G2 logo" className="company-logo" />
                      <span className="company-text">
                        <span className="company-name">G2</span>
                        <span className="role-title">Software Engineer Co-op</span>
                      </span>
                    </span>
                  </strong>
                  <span className="work-desc">
                    Designed and developed AI chatbot agents for the review platform to help users write
                    better reviews more quickly and effortlessly.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3>Education</h3>
              <div className="skill-card education-card">
                <div className="edu-row">
                  <span className="edu-name-line">
                    <strong>University of Michigan</strong> - 2026
                  </span>
                </div>
                <p className="edu-degree">B.S. in Computer Science.</p>
              </div>
              <h3>Technical Skills</h3>
              <div className="skill-card">
                <div className="skill-group">
                  <strong>Languages:</strong>
                  <div className="skill-bubbles">
                    <span className="skill-bubble">C++</span>
                    <span className="skill-bubble">Python</span>
                    <span className="skill-bubble">Go</span>
                    <span className="skill-bubble">Javascript/Typescript</span>
                    <span className="skill-bubble">HTML/CSS</span>
                    <span className="skill-bubble">SQL</span>
                  </div>
                </div>
                <div className="skill-group">
                  <strong>Technologies:</strong>
                  <div className="skill-bubbles">
                    <span className="skill-bubble">Flask</span>
                    <span className="skill-bubble">FastAPI</span>
                    <span className="skill-bubble">NodeJS</span>
                    <span className="skill-bubble">React</span>
                    <span className="skill-bubble">AWS</span>
                    <span className="skill-bubble">Azure</span>
                    <span className="skill-bubble">Docker</span>
                    <span className="skill-bubble">Kubernetes</span>
                    <span className="skill-bubble">PostgreSQL</span>
                    <span className="skill-bubble">Kafka</span>
                    <span className="skill-bubble">GraphQL</span>
                    <span className="skill-bubble">Git</span>
                    <span className="skill-bubble">PyTorch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  useEffect(() => {
    document.title = 'About | Weile Zheng';
  }, []);

  return (
    <section id="main" className="wrapper">
      <div className="inner about-container">
        <div className="about-text">
          <h1 className="major">About</h1>
          <p>
            I am interested in modern <strong>distributed systems</strong>,{' '}
            <strong>database internals</strong>, <strong>compilers</strong>, and{' '}
            <strong>ML/AI systems</strong>. I enjoy working on scalable and reliable softwares.
            Nowadays, I mainly program in <strong>Go</strong> and <strong>C++</strong>.
          </p>

          <p>
            I am currently studying at the <strong>University of Michigan</strong>, pursuing a B.S.
            in Computer Science.
          </p>

          <p>
            I was fortunate to be part of two amazing student organizations at UM. I was a VP at
            <strong>MDST</strong>, the largest data science club at the university, and a member of
            <strong>V1</strong>, a top community for ambitious student builders.
          </p>
          <p>
            I had the opportunity to intern at several different places during my 4 years of
            college. I learned so much from these experiences and will be forever grateful for them.
          </p>

          <p>
            Beyond school and work, I enjoy playing many sports: basketball, tennis, bowling,
            golf... I also like to hike and watch movies. These passions keep my life balanced.
          </p>
        </div>

        <div className="about-image" style={{ textAlign: 'left', maxWidth: '400px' }}>
          <div className="top">
            <img
              src="/images/about_pic1.jpg"
              alt="About me photo"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', marginBottom: '20px' }}
            />
          </div>

          <div className="bottom">
            <div className="about-icons">
              <a
                href="https://www.linkedin.com/in/weile-zheng/"
                className="icon brands fa-linkedin-in"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-4">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Weile-Zheng"
                className="icon brands fa-github"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-3">GitHub</span>
              </a>
              <a
                href="mailto:weilez@umich.edu"
                className="icon solid fa-envelope"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-4">weilez@umich.edu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppShell() {
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  useEffect(() => {
    document.body.className = isAbout ? 'about-page' : 'index-page';
  }, [isAbout]);

  return (
    <>
      <div className="page-container">
        <Header isAbout={isAbout} />
        <div id="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>

      <footer id="footer" className="wrapper alt">
        <div className="inner">
          <ul className="menu">
            <li>Weile Zheng</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default AppShell;
