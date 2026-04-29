import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import profile from "../images/profile.png";
import nptel from "../images/nptel.png";
import mern from "../images/mern.png";
import udamy from "../images/udamy.png";

const Card = ({ title, children, accentColor, icon }) => (
  <div className="modern-card">
    {icon && <div className="card-icon">{icon}</div>}
    {title && <h3 style={{ color: accentColor }}>{title}</h3>}
    {children}
  </div>
);

// Tech Badge Component

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  // Vibrant new color theme - Electric Purple & Coral Orange
  const accentColor = "#c084fc";
  const secondaryAccent = "#f97316";

  // Tech Stack
  const skills = [
    { title: " Frontend", content: "React.js, HTML5, CSS3, Bootstrap" },
    { title: " Backend", content: "Laravel, PHP, Node.js, Express.js" },
    { title: " Databases", content: "MySQL, MongoDB" },
    { title: " Programming", content: "JavaScript, Python, C, PHP" },
    { title: " Tools", content: "Git, GitHub, VS Code, Postman" },
    { title: " Other Skills", content: "REST API, JWT Auth, MVC Architecture" },
  ];

  // Experience data
  const experience = [
    {
      title: "PHP Developer",
      company: "Bpract Software Solutions, Kozhikode",
      period: "2024 - Present",
      points: [
        "Develop and maintain enterprise-level Laravel applications",
        "Build robust backend logic, REST APIs, and complex modules",
        "Optimize database queries and implement caching strategies",
        "Collaborate with cross-functional teams using Git workflow",
      ],
      icon: "🏢",
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Ipix Technologies Pvt Ltd, Kozhikode",
      period: "Feb 2025 – Apr 2025",
      points: [
        "Built full-stack MERN applications with responsive UI",
        "Integrated third-party APIs and implemented authentication",
        "Used Git for version control and team collaboration",
        "Participated in daily stand-ups and code reviews",
      ],
      icon: "🌐",
    },
  ];

  const projects = [
    {
      title: "Vehicle Marketplace Platform",
      description: "Car rental and used car sales system with booking, payments, return tracking, reviews, and demand forecasting.",
    },
    {
      title: "Academic Task System",
      description: "Platform to manage assignments, seminars, placements with deadline tracking and internal mark calculation.",
    },
    {
      title: "Kallose E-commerce",
      description: "Online shopping platform for women's products including bridal dress and ornament rental system.",
    },
  ];

  // Certifications
  const certifications = [
    { name: "NPTEL – Problem Solving Through Programming in C", image: nptel },
    { name: "Udemy – Java Programming (Beginner to Master)", image: udamy },
    { name: "MERN Stack Development – FISAT & Link Ur Codes", image: mern },
    { name: "MERN Stack Developer – Ipix Technologies Pvt Ltd", image: nptel },
  ];

  // Personal traits
  const traits = ["Time Management", "Problem Solving", "Team Collaboration", "Adaptability", "Self-Motivated"];
  
  return (
    <>
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000
          }}
        >
          <img
            src={selectedImage}
            alt="certificate"
            style={{ width: "550px", borderRadius: "10px" }}
          />
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', 'Segoe UI', 'Poppins', system-ui, sans-serif;
          background: radial-gradient(circle at 20% 30%, #0a0f1e, #03060f);
          color: #f0f3fa;
          overflow-x: hidden;
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        a {
          text-decoration: none;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1e1a3a;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${accentColor};
          border-radius: 10px;
        }

        .portfolio {
          min-height: 100vh;
          padding: 30px 20px 50px;
        }

        .main-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Hero Section */
        .hero-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 60px;
          margin-top: 30px;
          margin-bottom: 40px;
        }

        .hero-left, .hero-right {
          flex: 1 1 420px;
        }

        .hero-left {
          text-align: left;
        }

        .intro-text {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 40px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.3);
          backdrop-filter: blur(10px);
          color: #e2d9ff;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .intro-text::before {
          content: "✨";
          font-size: 14px;
        }

        .hero-left h1 {
          font-size: 56px;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 30%, ${accentColor} 70%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .hero-left h1 span {
          background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-left h2 {
          font-size: 26px;
          font-weight: 600;
          color: #c4b5fd;
          margin-bottom: 20px;
        }

        .hero-left p {
          font-size: 17px;
          line-height: 1.7;
          color: #b9c3e6;
          max-width: 540px;
          margin-bottom: 32px;
        }

        /* Tech badges */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 36px;
        }

        .tech-badge {
          padding: 10px 20px;
          border-radius: 60px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(192, 132, 252, 0.25);
          color: #e0e7ff;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          cursor: default;
        }

        .tech-badge:hover {
          transform: translateY(-4px) scale(1.02);
          background: rgba(192, 132, 252, 0.2);
          border-color: ${accentColor};
        }

        /* Buttons */
        .cta-buttons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .btn {
          padding: 12px 30px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-family: inherit;
          justify-content: center;
        }

        .btn-primary {
          background: linear-gradient(105deg, ${accentColor}, #923be4);
          color: #fff;
          box-shadow: 0 5px 28px rgba(180, 132, 252, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 19px 32px rgba(192, 132, 252, 0.5);
        }

        .btn-outline {
          border: 1.2px solid ${accentColor};
          color: ${accentColor};
          background: rgba(192, 132, 252, 0.05);
          backdrop-filter: blur(4px);
        }

        .btn-outline:hover {
          background: ${accentColor};
          color: #0a0a1a;
          transform: translateY(-3px);
        }

        /* Profile Card */
        .hero-right {
          display: flex;
          justify-content: center;
        }

        .profile-card {
          width: 100%;
          max-width: 440px;
          background: rgba(18, 22, 45, 0.6);
          backdrop-filter: blur(16px);
          border-radius: 42px;
          padding: 32px 28px;
          border: 1px solid rgba(192, 132, 252, 0.3);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .profile-card:hover {
          transform: translateY(-8px);
          border-color: rgba(192, 132, 252, 0.6);
        }

        .profile-card::before {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(192, 132, 252, 0.2), transparent);
          top: -80px;
          right: -80px;
          pointer-events: none;
        }

        .hero-img {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid ${accentColor};
          box-shadow: 0 20px 39px rgba(129, 81, 206, 0.4);
          margin: 0 auto 20px auto;
          display: block;
          animation: float 2s ease-in-out infinite;
        }

        /* Code box */
        .code-box {
          background: #0a0c1a;
          border-radius: 24px;
          padding: 20px 24px;
          border: 1px solid rgba(192, 132, 252, 0.25);
          margin-top: 20px;
        }

        .code-top {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff5f57;
        }
        .dot:nth-child(2) { background: #ffbd2e; }
        .dot:nth-child(3) { background: #28c840; }

        .code-line {
          font-family: 'Fira Code', monospace;
          font-size: 13px;
          line-height: 1.9;
          color: #b9c7e6;
        }

        .code-key { color: #f472b6; font-weight: 500; }
        .code-value { color: #86efac; }
        .code-accent { color: ${accentColor}; font-weight: 500; }

        /* Section Styles */
        .section-block {
          margin-top: 80px;
        }

        .section-title {
          font-size: 38px;
          font-weight: 700;
          text-align: center;
          background: linear-gradient(120deg, #ffffff, ${accentColor});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 48px;
        }

        /* Modern Card Grid */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .modern-card {
          background: rgba(15, 20, 40, 0.65);
          backdrop-filter: blur(12px);
          border-radius: 32px;
          padding: 28px 24px;
          border: 1px solid rgba(192, 132, 252, 0.2);
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.4);
          transition: all 0.35s cubic-bezier(0.2, 0.8, 0.4, 1);
          position: relative;
          overflow: hidden;
        }

        .modern-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 32px;
          padding: 1px;
          background: linear-gradient(125deg, ${accentColor}, ${secondaryAccent}, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }

        .modern-card:hover {
          transform: translateY(-12px);
          background: rgba(25, 30, 55, 0.8);
          border-color: rgba(192, 132, 252, 0.5);
        }

        .modern-card:hover::after {
          opacity: 0.7;
        }

        .card-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .modern-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .modern-card p, .modern-card li {
          color: #cdd9ff;
          font-size: 15px;
          line-height: 1.6;
        }

        .modern-card ul {
          padding-left: 20px;
          margin-top: 12px;
        }

        .modern-card li {
          margin: 8px 0;
        }

        /* Stats Grid */
        .stats-grid {
          margin-top: 70px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 28px;
        }

        .stat-card {
          background: linear-gradient(145deg, rgba(25, 28, 48, 0.7), rgba(15, 18, 35, 0.8));
          backdrop-filter: blur(8px);
          border-radius: 32px;
          padding: 28px 22px;
          border-left: 4px solid ${accentColor};
          transition: all 0.3s ease;
          text-align: center;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          border-left-color: ${secondaryAccent};
          background: rgba(30, 35, 60, 0.8);
        }

        .stat-card .stat-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .stat-card .stat-value {
          font-size: 36px;
          font-weight: 800;
          color: ${accentColor};
          margin-bottom: 8px;
        }

        .stat-card .stat-label {
          color: #cbd5ff;
          font-size: 15px;
        }

        /* Traits chips */
        .traits-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }

        .trait-chip {
          padding: 12px 24px;
          background: rgba(192, 132, 252, 0.12);
          border-radius: 60px;
          border: 1px solid rgba(192, 132, 252, 0.3);
          font-weight: 500;
          transition: all 0.3s;
        }

        .trait-chip:hover {
          background: rgba(192, 132, 252, 0.3);
          transform: translateY(-2px);
        }

        /* Quote Box */
        .quote-box {
          margin-top: 70px;
          padding: 40px 30px;
          text-align: center;
          border-radius: 42px;
          background: linear-gradient(135deg, rgba(192, 132, 252, 0.1), rgba(249, 115, 22, 0.05));
          border: 1px solid rgba(192, 132, 252, 0.2);
          font-size: 22px;
          font-style: italic;
          color: #e7e2ff;
        }

        /* Footer */
        .footer {
          margin-top: 80px;
          padding: 40px 20px 30px;
          text-align: center;
          border-top: 1px solid rgba(192, 132, 252, 0.2);
        }

        .footer h3 {
          font-size: 26px;
          background: linear-gradient(135deg, ${accentColor}, #f0a6ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 16px;
        }

        .footer p, .footer a {
          color: #b9c4f0;
          font-size: 16px;
        }

        .footer a:hover {
          color: ${accentColor};
        }

        .footer-copy {
          margin-top: 24px;
          font-size: 13px;
          color: #7e8bb6;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 900px) {
          .hero-wrapper {
            flex-direction: column;
            text-align: center;
          }
          .hero-left {
            text-align: center;
          }
          .hero-left p {
            margin-left: auto;
            margin-right: auto;
          }
          .tech-stack, .cta-buttons {
            justify-content: center;
          }
          .section-title {
            font-size: 32px;
          }
        }

        @media (max-width: 550px) {
          .hero-left h1 {
            font-size: 38px;
          }
          .hero-left h2 {
            font-size: 22px;
          }
          .hero-img {
            width: 140px;
            height: 140px;
          }
          .quote-box {
            font-size: 18px;
            padding: 28px 20px;
          }
          .text {
            color: #c084fc;
            cursor: pointer;
            font-weight: 500;
            transition: transform 0.2s, color 0.2s;
            display: inline-block;
          }
          .text:hover {
            transform: translateX(4px);
            color: #f97316;
          }
          .certifications-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            margin-top: 24px;
          }
          .cert-name {
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 16px;
            color: #e0e7ff;
            text-align: center;
          }
          .center-btn {
            display: flex;
            justify-content: center;
            margin-top: 40px;
          }
          .view-btn {
            padding: 14px 32px;
            border-radius: 40px;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            border: 1.5px solid #c084fc;
            background: rgba(192, 132, 252, 0.05);
            color: #c084fc;
            transition: all 0.3s ease;
          }
          .view-btn:hover {
            background: #c084fc;
            color: #0a0a1a;
            transform: translateY(-3px);
          }
        }
      `}</style>

      <Nav />

      <div className="portfolio fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="main-container">
          {/* Hero Section */}
          <div className="hero-wrapper">
            <div className="hero-left">
              <h1>Hi, I'm <span>Adila Farhana</span></h1>
    <p>I am a backend developer focused on building scalable applications with Laravel. I created this portfolio using React to enhance my frontend skills and grow into a full-stack developer.</p>
              <div className="cta-buttons">
                <button className="btn btn-outline" onClick={() => navigate("/about")}>
                  ✨ About Me
                </button>
                <button className="btn btn-outline" onClick={() => navigate("/contact")}>
                  Contact Me
                </button>
              </div>
            </div>

            <div className="hero-right fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="profile-card">
                <img src={profile} alt="Adila Farhana" className="hero-img" />
                <div className="code-box">
                  <div className="code-top">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="code-line"><span className="code-key">developer</span> = {`{`}</div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-key">role</span>: <span className="code-value">"PHP Backend Developer"</span>,</div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-key">skills</span>: <span className="code-accent">["php", "react", "MySQL", "MERN Stack"]</span>,</div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-key">status</span>: <span className="code-value">"currently working"</span></div>
                  <div className="code-line">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="section-block fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title"> Technical Superpowers</h2>
            <div className="grid">
              {skills.map((s, i) => (
                <Card key={i} title={s.title} accentColor={accentColor} icon={s.icon}>
                  {s.content}
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="section-block fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title"> Professional Journey</h2>
            <div className="grid">
              {experience.map((exp, i) => (
                <Card key={i} title={exp.title} accentColor={accentColor} icon={exp.icon}>
                  <p style={{ fontWeight: 500, color: "#c4b5fd", marginBottom: "12px" }}>{exp.company} • {exp.period}</p>
                  <ul>
                    {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="section-block fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title"> Featured Projects</h2>
            <div className="grid">
              {projects.map((proj, i) => (
                <Card key={i} title={proj.title} accentColor={accentColor} icon="💻">
                  <p>{proj.description}</p>
                </Card>
              ))}
            </div>
            {/* Centered Explore My Projects Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <button
                className="btn btn-outline"
                style={{ padding: '14px 32px' }}
                onClick={() => navigate('/project')}
              >
                Explore My Projects →
              </button>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="section-block fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title"> Certifications</h2>
            <div className="grid certifications-grid">
              {certifications.map((cert, i) => (
                <Card key={i} accentColor={accentColor}>
                  <p className="cert-name">{cert.name}</p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <button
                      className="btn btn-outline"
                      style={{ padding: '10px 24px' }}
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      View
                    </button> */}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Traits */}
          <div className="section-block fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title">Personal Traits</h2>
            <div className="traits-wrapper">
              {traits.map((trait, i) => (
                <span key={i} className="trait-chip">{trait}</span>
              ))}
            </div>
          </div>

          {/* Volunteer & Hobbies */}
          <div className="section-block fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title"> Beyond Coding</h2>
            <div className="grid">
              <Card title="Volunteer Experience" accentColor={accentColor}>
                <p>Junior Red Cross Member • Online Hackathon Participant</p>
              </Card>
              <Card title="Hobbies & Interests" accentColor={accentColor}>
                <p>Travel • Badminton • Singing</p>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="footer" id="contact">
            <h3>Let's Connect</h3>
            <p><a href="mailto:adilafarhana637@gmail.com">adilafarhana637@gmail.com</a></p>
            <p style={{ marginTop: 12 }}>
              <a href="https://github.com/adilafarhana" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/in/adilafarhana-vv-69b924272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="footer-copy">© 2026 Adila Farhana — Crafting digital experiences with Laravel & React</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);