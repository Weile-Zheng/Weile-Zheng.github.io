import { NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import replicationAndShardingMarkdown from "./blog/replication-and-sharding.md?raw";

const BLOG_POSTS = [
	{
		id: "replication-and-sharding",
		title: "Replication and Sharding",
		date: "September 4, 2025",
		content: replicationAndShardingMarkdown,
	},
];

function ThemeToggle() {
	const initialTheme = useMemo(() => {
		const stored = window.localStorage.getItem("theme-preference");
		if (stored === "light" || stored === "dark") {
			return stored;
		}
		return "dark";
	}, []);

	const [theme, setTheme] = useState(initialTheme);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		window.localStorage.setItem("theme-preference", theme);
	}, [theme]);

	const isDark = theme === "dark";

	return (
		<button
			id="theme-toggle"
			className="theme-toggle"
			type="button"
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-pressed={isDark ? "true" : "false"}
			title={isDark ? "Switch to light mode" : "Switch to dark mode"}
			onClick={() => setTheme(isDark ? "light" : "dark")}
		>
			{isDark ? (
				<i className="far fa-sun" aria-hidden="true" />
			) : (
				<i className="fas fa-moon" aria-hidden="true" />
			)}
		</button>
	);
}

function Header({ showAvatar }) {
	return (
		<header id="header">
			{showAvatar ? (
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
					<li>
						<NavLink to="/blog">Blog</NavLink>
					</li>
				</ul>
			</nav>
			<ThemeToggle />
		</header>
	);
}

function HomePage() {
	useEffect(() => {
		document.title = "Weile Zheng";
	}, []);

	const scrollToDetails = () => {
		const detailsSection = document.getElementById("home-details");
		if (detailsSection) {
			detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section id="main" className="wrapper">
			<div className="inner about-container home-hero">
				<div className="about-text">
					<NavLink to="/" className="title">
						<img src="/images/avatar.jpeg" alt="My Avatar" className="logo" />
					</NavLink>
					<h1>Weile Zheng</h1>
					<p style={{ marginTop: "-5px" }}>
						Hi, I am Weile! I am a Computer Science student at the{" "}
						<a href="https://cse.engin.umich.edu/">University of Michigan</a>. You can reach me at
						weilez@umich.edu!
					</p>

					<p style={{ marginTop: "-15px" }}>
						For more information, check out my <NavLink to="/about">About Page</NavLink>
					</p>

					<div style={{ marginTop: "-15px" }}>
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
								<a
									href="mailto:weilez@umich.edu"
									className="icon solid fa-envelope"
									target="_blank"
									rel="noreferrer"
								>
									<span className="label">Email</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="scroll-cue-wrap">
				<button
					type="button"
					className="scroll-cue"
					onClick={scrollToDetails}
					aria-label="Scroll down to work experience"
					title="Scroll down"
				>
					<i className="fas fa-chevron-down" aria-hidden="true" />
				</button>
			</div>

			<div className="inner" id="home-details">
				<div className="work-section">
					<div className="work-grid">
						<div>
							<h3>Work Experience</h3>
							<ul className="internship-list">
								<li>
									<strong className="company-title">
										<span className="company-row">
											<img
												src="/images/logos/tesla-linkedin.png"
												alt="Tesla logo"
												className="company-logo"
											/>
											<span className="company-text">
												<span className="company-name">Tesla</span>
												<span className="role-title">
													Software Engineering Intern
												</span>
											</span>
										</span>
									</strong>
									<span className="work-desc">
										Worked on the Cell Software Team where I developed the highly scalable
										and reliable MES (Manufacturing Execution System) for Tesla cell and
										battery production.
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
												<span className="role-title">
													Software Engineering Intern
												</span>
											</span>
										</span>
									</strong>
									<span className="work-desc">
										Worked on the Access Management Systems team and built internal
										security tools used across all Amazon organizations for access
										controls and user permissions management.
									</span>
								</li>
								<li>
									<strong className="company-title">
										<span className="company-row">
											<img
												src="/images/logos/g2-linkedin.png"
												alt="G2 logo"
												className="company-logo"
											/>
											<span className="company-text">
												<span className="company-name">G2</span>
												<span className="role-title">Software Engineer Co-op</span>
											</span>
										</span>
									</strong>
									<span className="work-desc">
										Designed and developed AI chatbot agents for the review platform to
										help users write better reviews more quickly and effortlessly.
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
		document.title = "About | Weile Zheng";
	}, []);

	return (
		<section id="main" className="wrapper">
			<div className="inner about-container">
				<div className="about-text">
					<h1 className="major">About</h1>
					<p>
						I am interested in modern <strong>distributed systems</strong>,{" "}
						<strong>database internals</strong>, <strong>compilers</strong>, and{" "}
						<strong>ML/AI systems</strong>. I enjoy working on scalable and reliable softwares.
						Nowadays, I mainly program in <strong>Go</strong> and <strong>C++</strong>.
					</p>

					<p>
						I am currently studying at the <strong>University of Michigan</strong>, pursuing a
						B.S. in Computer Science.
					</p>

					<p>
						I was fortunate to be part of two amazing student organizations at UM. I was a VP at{" "}
						<strong>MDST</strong>, the largest data science club at the university, and a member
						of <strong>V1</strong>, a top community for ambitious student builders.
					</p>
					<p>
						I had the opportunity to intern at several different places during my 4 years of
						college. I learned so much from these experiences and will be forever grateful for
						them.
					</p>

					<p>
						Beyond school and work, I enjoy playing many sports: basketball, tennis, bowling,
						golf... I also like to hike and watch movies. These passions keep my life balanced.
					</p>
				</div>

				<div className="about-image" style={{ textAlign: "left", maxWidth: "400px" }}>
					<div className="top">
						<img
							src="/images/about_pic1.jpg"
							alt="About me photo"
							style={{
								maxWidth: "100%",
								height: "auto",
								borderRadius: "12px",
								marginBottom: "20px",
							}}
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

function renderInlineMarkdown(text) {
	const tokens = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`)/g;
	const nodes = [];
	let lastIndex = 0;
	let match = tokens.exec(text);

	while (match) {
		if (match.index > lastIndex) {
			nodes.push(text.slice(lastIndex, match.index));
		}

		if (match[2] && match[3]) {
			nodes.push(
				<a key={`${match.index}-link`} href={match[3]} target="_blank" rel="noreferrer">
					{match[2]}
				</a>,
			);
		} else if (match[4]) {
			nodes.push(<strong key={`${match.index}-bold`}>{match[4]}</strong>);
		} else if (match[5]) {
			nodes.push(<code key={`${match.index}-code`}>{match[5]}</code>);
		}

		lastIndex = tokens.lastIndex;
		match = tokens.exec(text);
	}

	if (lastIndex < text.length) {
		nodes.push(text.slice(lastIndex));
	}

	return nodes;
}

function renderMarkdown(markdown) {
	const lines = markdown.split("\n");
	const content = [];
	let paragraph = [];
	let list = [];

	const flushParagraph = () => {
		if (!paragraph.length) {
			return;
		}
		content.push(<p key={`p-${content.length}`}>{renderInlineMarkdown(paragraph.join(" "))}</p>);
		paragraph = [];
	};

	const flushList = () => {
		if (!list.length) {
			return;
		}
		content.push(
			<ul key={`ul-${content.length}`}>
				{list.map((item, index) => (
					<li key={`li-${index}`}>{renderInlineMarkdown(item)}</li>
				))}
			</ul>,
		);
		list = [];
	};

	lines.forEach((line) => {
		const trimmed = line.trim();

		if (!trimmed) {
			flushParagraph();
			flushList();
			return;
		}

		if (trimmed.startsWith("## ")) {
			flushParagraph();
			flushList();
			content.push(<h2 key={`h2-${content.length}`}>{renderInlineMarkdown(trimmed.slice(3))}</h2>);
			return;
		}

		if (trimmed.startsWith("# ")) {
			flushParagraph();
			flushList();
			content.push(<h1 key={`h1-${content.length}`}>{renderInlineMarkdown(trimmed.slice(2))}</h1>);
			return;
		}

		if (trimmed.startsWith("- ")) {
			flushParagraph();
			list.push(trimmed.slice(2));
			return;
		}

		paragraph.push(trimmed);
	});

	flushParagraph();
	flushList();
	return content;
}

function BlogPage() {
	useEffect(() => {
		document.title = "Blog | Weile Zheng";
	}, []);

	return (
		<section id="main" className="wrapper">
			<div className="inner blog-container">
				<div className="blog-header">
					<h1 className="major">Blog</h1>
					<p>Short writings on software engineering, computer systems, and projects.</p>
				</div>

				<ul className="blog-title-list">
					{BLOG_POSTS.map((post) => (
						<li key={post.id}>
							<NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
							<span className="blog-title-date">{post.date}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function BlogPostPage() {
	const { postId } = useParams();
	const post = BLOG_POSTS.find((candidate) => candidate.id === postId);

	useEffect(() => {
		if (!post) {
			document.title = "Post Not Found | Weile Zheng";
			return;
		}
		document.title = `${post.title} | Weile Zheng`;
	}, [post]);

	if (!post) {
		return (
			<section id="main" className="wrapper">
				<div className="inner blog-container">
					<h1 className="major">Post Not Found</h1>
					<p>
						This post does not exist. <NavLink to="/blog">Back to Blog</NavLink>
					</p>
				</div>
			</section>
		);
	}

	return (
		<section id="main" className="wrapper">
			<div className="inner blog-container blog-post-container">
				<p>
					<NavLink to="/blog">← Back to Blog</NavLink>
				</p>
				<article id={post.id} className="blog-post-markdown">
					{renderMarkdown(post.content)}
				</article>
			</div>
		</section>
	);
}

function VantaBackground() {
	const backgroundRef = useRef(null);
	const vantaRef = useRef(null);
	const [theme, setTheme] = useState(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

	useEffect(() => {
		const root = document.documentElement;
		const observer = new MutationObserver(() => {
			setTheme(root.dataset.theme === "dark" ? "dark" : "light");
		});

		observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return undefined;
		}

		if (!backgroundRef.current || !window.VANTA || !window.VANTA.WAVES) {
			return undefined;
		}

		if (vantaRef.current) {
			vantaRef.current.destroy();
		}

		vantaRef.current = window.VANTA.WAVES({
			el: backgroundRef.current,
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			minHeight: 200,
			minWidth: 200,
			scale: 1.0,
			scaleMobile: 1.0,
			backgroundColor: theme === "dark" ? 0x000000 : 0xffffff,
			color: theme === "dark" ? 0x000000 : 0xa7b0bb,
			shininess: 34,
			waveHeight: 14,
			waveSpeed: 0.8,
			zoom: 0.95,
		});

		return () => {
			if (vantaRef.current) {
				vantaRef.current.destroy();
				vantaRef.current = null;
			}
		};
	}, [theme]);

	return <div ref={backgroundRef} className="vanta-bg" aria-hidden="true" />;
}

function AppShell() {
	const location = useLocation();
	const isHome = location.pathname === "/";

	useEffect(() => {
		if (location.pathname === "/") {
			document.body.className = "index-page";
			return;
		}
		if (location.pathname.startsWith("/blog")) {
			document.body.className = "blog-page";
			return;
		}
		document.body.className = "about-page";
	}, [location.pathname]);

	return (
		<>
			<VantaBackground />
			<div className="page-container">
				<div className="content-shell">
					<Header showAvatar={!isHome} />
					<div id="wrapper">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/blog" element={<BlogPage />} />
							<Route path="/blog/:postId" element={<BlogPostPage />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
}

export default AppShell;
