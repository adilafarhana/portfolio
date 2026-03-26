import { memo, useEffect, useState } from "react";
import Nav from "./Nav";

const Project = () => {
  const [visible, setVisible] = useState(false);
  // Same color theme as homepage
  const accentColor = "#c084fc";
  const secondaryAccent = "#f97316";

 useEffect(() => {
  setVisible(true); 
  window.scrollTo({ top: 0 }); 
}, []);
  const projects = [
    {
      title: "Online Vehicle Marketplace and Sales Platform",
      description:
        "A complete car rental and used car sales platform with bookings, payments, returns, reviews, blogs, and FAQs. Users can book rentals or purchase used cars while admin manages approvals and schedules.",
      tech: ["MERN Stack", "Bootstrap", "CSS", "HTML", "Flask"],
      icon: "🚗",
      featured: true,
    },
    {
      title: "Academic Task Management System",
      description:
        "System for managing assignments, seminars, tutorials, projects, and placement tasks. Students and teachers can track progress and deadlines efficiently with real-time notifications.",
      tech: ["React", "Node.js", "MongoDB","Bootstrap" ,"Express","CSS"],
      icon: "📚",
      featured: false,
    },
    {
      title: "Kallose (Online Shopping)",
      description:
        "E-commerce platform for women's products including bridal dresses and ornaments with rental and purchase options. Includes cart, payment, and order management with secure checkout.",
      tech: ["MERN Stack", , "Bootstrap", "CSS", "Firebase"],
      icon: "🛍️",
      featured: true,
    },
    {
      title: "Salon Booking and Management App",
      description:
        "Users can view salon services, check stylist availability, pre-book appointments, see off-days, explore hairstyles, contact salons, and get location info with integrated maps.",
      tech: ["React", "Node.js", "MongoDB", "CSS", "Bootstrap"],
      icon: "💇‍♀️",
      featured: false,
    }
  ];

  return (
    <>
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
        .project-page { 
          max-width: 1280px; 
          margin: 0 auto; 
          padding: 40px 24px 80px; 
        }

        /* Header Section */
        .project-header { 
          text-align: center; 
          margin: 30px 0 60px; 
        }
        
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 40px;
          font-size: 13px;
          font-weight: 500;
          color: ${accentColor};
          margin-bottom: 24px;
          letter-spacing: 0.5px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }
        
        .project-header h1 {
          font-size: 56px;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 30%, ${accentColor} 70%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards 0.1s;
        }
        
        .project-header h1 span {
          background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .project-header p {
          max-width: 700px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.7;
          color: #b9c3e6;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards 0.2s;
        }

        /* Stats Row */
        .stats-row {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          margin: 40px 0 60px;
          padding: 24px 0;
          border-top: 1px solid rgba(192, 132, 252, 0.15);
          border-bottom: 1px solid rgba(192, 132, 252, 0.15);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards 0.3s;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .stat-label {
          font-size: 13px;
          color: #8f99b8;
          margin-top: 4px;
          letter-spacing: 0.5px;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        /* Modern Card Design */
        .project-card {
          background: rgba(15, 20, 40, 0.65);
          backdrop-filter: blur(12px);
          border-radius: 32px;
          padding: 32px;
          border: 1px solid rgba(192, 132, 252, 0.2);
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.4);
          transition: all 0.35s cubic-bezier(0.2, 0.8, 0.4, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .project-card::after {
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

        .project-card:hover {
          transform: translateY(-10px);
          background: rgba(25, 30, 55, 0.8);
          border-color: rgba(192, 132, 252, 0.5);
        }

        .project-card:hover::after {
          opacity: 0.7;
        }

        /* Featured Badge */
        .featured-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, ${secondaryAccent}, #fbbf24);
          padding: 4px 12px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 600;
          color: #0a0a1a;
          letter-spacing: 0.5px;
        }

        .project-icon {
          width: 64px;
          height: 64px;
          font-size: 32px;
          background: linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(249, 115, 22, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          margin-bottom: 24px;
          border: 1px solid rgba(192, 132, 252, 0.3);
          transition: all 0.3s ease;
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, rgba(192, 132, 252, 0.3), rgba(249, 115, 22, 0.2));
        }

        .project-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff, ${accentColor});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.3;
        }

        .project-card p {
          font-size: 15px;
          color: #cdd9ff;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        /* Tech Stack Chips */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 8px;
        }

        .tech-chip {
          padding: 6px 14px;
          background: rgba(192, 132, 252, 0.12);
          border-radius: 30px;
          font-size: 12px;
          font-weight: 500;
          color: #e0e7ff;
          border: 1px solid rgba(192, 132, 252, 0.2);
          transition: all 0.2s;
        }

        .tech-chip:hover {
          background: rgba(192, 132, 252, 0.25);
          transform: translateY(-2px);
          border-color: ${accentColor};
        }

        /* View Project Link */
        .view-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 10px 0;
          color: ${accentColor};
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }

        .view-link:hover {
          gap: 12px;
          color: ${secondaryAccent};
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
          font-size: 15px;
          text-decoration: none;
        }
        
        .footer a:hover {
          color: ${accentColor};
        }
        
        .footer-copy {
          margin-top: 24px;
          font-size: 13px;
          color: #7e8bb6;
        }

        /* Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card.animate {
          animation: fadeUp 0.6s ease forwards;
        }

        @media (max-width: 768px) {
          .project-page {
            padding: 30px 20px 60px;
          }
          .project-header h1 {
            font-size: 40px;
          }
          .project-header p {
            font-size: 16px;
          }
          .stats-row {
            gap: 32px;
          }
          .project-card {
            padding: 24px;
          }
          .project-card h3 {
            font-size: 22px;
          }
        }

        @media (max-width: 550px) {
          .project-header h1 {
            font-size: 32px;
          }
          .stats-row {
            gap: 24px;
          }
          .stat-number {
            font-size: 24px;
          }
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
        }
      `}</style>

      <div className="project-page">
        <Nav />

        <div className="project-header">
          <div className="hero-badge">✦ MY WORK ✦</div>
          <h1>Featured <span>Projects</span></h1>
          <p>
            A collection of my recent work — from full-stack applications to innovative 
            web solutions. Each project reflects my passion for clean code and meaningful user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${visible ? "animate" : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-chip">{t}</span>
    ))}
              </div>
              <div className="view-link">
                
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
         <div className="footer" id="contact">
            <h3> Let's Connect</h3>
            <p><a href="mailto:adilafarhana637@gmail.com">adilafarhana637@gmail.com</a></p>
            <p style={{ marginTop: 12 }}>
 <a href="https://github.com/adilafarhana" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
            <a href="https://www.linkedin.com/in/adilafarhana-vv-69b924272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="footer-copy">© 2026 Adila Farhana — Crafting digital experiences with Laravel & React</p>
          </div>
      </div>
    </>
  );
};

export default memo(Project);