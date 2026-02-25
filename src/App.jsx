import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const workExperience = [
  {
    company: 'Tesla',
    role: 'Software Engineering Intern',
    logo: '/images/logos/tesla-linkedin.png',
    description:
      'Worked on the Cell Software Team where I developed a scalable and reliable MES (Manufacturing Execution System) for Tesla cell and battery production.',
  },
  {
    company: 'Amazon Web Services',
    role: 'Software Engineering Intern',
    logo: '/images/logos/aws-linkedin.png',
    description:
      'Worked on the Access Management Systems team and built internal security tools used across all Amazon organizations for access controls and user permissions management.',
  },
  {
    company: 'G2',
    role: 'Software Engineer Co-op',
    logo: '/images/logos/g2-linkedin.png',
    description:
      'Designed and developed AI chatbot agents for the review platform to help users write better reviews more quickly and effortlessly.',
  },
];

const skills = {
  Languages: ['C++', 'Python', 'Go', 'JavaScript/TypeScript', 'HTML/CSS', 'SQL'],
  Technologies: [
    'Flask',
    'FastAPI',
    'Node.js',
    'React',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'Kafka',
    'GraphQL',
    'Git',
    'PyTorch',
  ],
};

function ThemeToggle() {
  const initialTheme = useMemo(() => {
    const stored = window.localStorage.getItem('theme-preference');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme-preference', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}

function Layout({ children }) {
  return (
    <>
      <div className="page-container">
        <header id="header">
          <NavLink to="/" className="title">
            <img src="/images/avatar.jpeg" alt="Weile Zheng avatar" className="logo" />
          </NavLink>
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

        <main id="wrapper">{children}</main>
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

function HomePage() {
  useEffect(() => {
    document.title = 'Weile Zheng';
  }, []);

  return (
    <section id="main" className="wrapper">
      <div className="inner about-container">
        <div className="about-text">
          <h1>Weile Zheng</h1>
          <p>
            Hi, I am Weile! I am a Computer Science student at the{' '}
            <a href="https://cse.engin.umich.edu/" target="_blank" rel="noreferrer">
              University of Michigan
            </a>
            . You can reach me at <a href="mailto:weilez@umich.edu">weilez@umich.edu</a>.
          </p>

          <p>For more information, check out my <NavLink to="/about">About Page</NavLink>.</p>

          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/weile-zheng/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Weile-Zheng" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:weilez@umich.edu">Email</a>
            </li>
          </ul>
        </div>

        <div className="about-image">
          <img src="/images/home_pic1.jpg" alt="Weile on campus" />
        </div>
      </div>

      <div className="inner work-section">
        <div className="work-grid">
          <div>
            <h3>Work Experience</h3>
            <ul className="internship-list">
              {workExperience.map((item) => (
                <li key={item.company}>
                  <strong className="company-title">
                    <span className="company-row">
                      <img src={item.logo} alt={`${item.company} logo`} className="company-logo" />
                      <span className="company-text">
                        <span className="company-name">{item.company}</span>
                        <span className="role-title">{item.role}</span>
                      </span>
                    </span>
                  </strong>
                  <span className="work-desc">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Education</h3>
            <div className="skill-card education-card">
              <p className="edu-name-line">
                <strong>University of Michigan</strong> - 2026
              </p>
              <p className="edu-degree">B.S. in Computer Science</p>
            </div>

            <h3>Technical Skills</h3>
            <div className="skill-card">
              {Object.entries(skills).map(([group, values]) => (
                <div className="skill-group" key={group}>
                  <strong>{group}:</strong>
                  <div className="skill-bubbles">
                    {values.map((value) => (
                      <span className="skill-bubble" key={value}>
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
            <strong>ML/AI systems</strong>. I enjoy working on scalable and reliable software.
            Nowadays, I mainly program in <strong>Go</strong> and <strong>C++</strong>.
          </p>

          <p>
            I am currently studying at the <strong>University of Michigan</strong>, pursuing a
            B.S. in Computer Science.
          </p>

          <p>
            I was fortunate to be part of two amazing student organizations at UM. I was a VP at
            <strong> MDST</strong>, the largest data science club at the university, and a member
            of <strong>V1</strong>, a top community for ambitious student builders.
          </p>

          <p>
            I had the opportunity to intern at several places during my four years of college. I
            learned so much from these experiences and will be forever grateful for them.
          </p>

          <p>
            Beyond school and work, I enjoy playing sports like basketball, tennis, bowling, and
            golf. I also like to hike and watch movies.
          </p>
        </div>

        <div className="about-image about-sidebar">
          <img src="/images/about_pic1.jpg" alt="About Weile" />
          <div className="about-icons">
            <a href="https://www.linkedin.com/in/weile-zheng/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Weile-Zheng" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:weilez@umich.edu">weilez@umich.edu</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}
