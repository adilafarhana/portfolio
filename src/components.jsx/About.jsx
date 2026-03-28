import { memo, useEffect } from "react";
import Nav from "./Nav";

const About = () => {
  // Same color theme as homepage

  const accentColor = "#c084fc";
  const secondaryAccent = "#f97316";

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          margin: 0;
          font-family: 'Inter', 'Segoe UI', 'Poppins', system-ui, sans-serif;
          background: radial-gradient(circle at 20% 30%, #0a0f1e, #03060f);
          color: #f0f3fa;
          overflow-x: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #1e1a3a;
        }
        ::-webkit-scrollbar-thumb {
          background: ${accentColor};
          border-radius: 10px;
        }

        .about-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px 80px;
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
        /* Hero Section - Bold & Minimal */
        .hero-section {
          padding: 80px 0 60px;
          text-align: center;
          border-bottom: 1px solid rgba(192, 132, 252, 0.2);
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
        }

        .hero-section h1 {
          font-size: 68px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -1.5px;
        }

        .hero-section h1 .first-name {
          background: linear-gradient(135deg, #ffffff, ${accentColor});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-section h1 .last-name {
          background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-tagline {
          font-size: 20px;
          color: #b9c3e6;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Section Styles */
        .content-section {
          margin: 80px 0;
        }

        .section-header {
          margin-bottom: 32px;
        }

        .section-header h2 {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(120deg, #ffffff, ${accentColor});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .section-header .subtitle {
          color: #8f99b8;
          font-size: 16px;
          margin-top: 12px;
          letter-spacing: 0.3px;
        }

        /* Story Text - Clean Typography */
        .story-text {
          font-size: 18px;
          line-height: 1.9;
          color: #cdd9ff;
        }

        .story-text p {
          margin-bottom: 28px;
        }

        .story-text .highlight {
          color: ${accentColor};
          font-weight: 600;
          border-bottom: 2px dotted ${accentColor};
        }

        .story-text .emphasis {
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          border-left: 3px solid ${accentColor};
          padding-left: 28px;
          margin: 40px 0;
          font-style: normal;
          line-height: 1.5;
        }

        /* Skills Row - Minimal Chips */
        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        .skill-chip {
          padding: 8px 22px;
          background: rgba(192, 132, 252, 0.08);
          border-radius: 40px;
          font-size: 14px;
          font-weight: 500;
          color: #cdd9ff;
          transition: all 0.2s ease;
          border: 1px solid rgba(192, 132, 252, 0.15);
        }

        .skill-chip:hover {
          background: rgba(192, 132, 252, 0.2);
          color: ${accentColor};
          transform: translateY(-2px);
          border-color: ${accentColor};
        }

        /* Timeline - Clean Lines */
        .timeline {
          margin-top: 20px;
        }

        .timeline-item {
          display: flex;
          gap: 40px;
          padding: 32px 0;
          border-bottom: 1px solid rgba(192, 132, 252, 0.1);
        }

        .timeline-item:last-child {
          border-bottom: none;
        }

        .timeline-year {
          min-width: 120px;
          font-weight: 700;
          color: ${accentColor};
          font-size: 18px;
          letter-spacing: -0.3px;
        }

        .timeline-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .timeline-content .company {
          color: ${secondaryAccent};
          font-size: 14px;
          margin-bottom: 14px;
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        .timeline-content p {
          color: #b0b8d4;
          line-height: 1.7;
          font-size: 15px;
        }

        /* Projects - Simple Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 20px;
        }

        .project-item {
          padding: 28px;
          background: rgba(192, 132, 252, 0.03);
          border-radius: 24px;
          transition: all 0.3s ease;
          border: 1px solid rgba(192, 132, 252, 0.1);
        }

        .project-item:hover {
          background: rgba(192, 132, 252, 0.08);
          transform: translateY(-4px);
          border-color: rgba(192, 132, 252, 0.3);
        }

        .project-icon {
          font-size: 36px;
          margin-bottom: 18px;
        }

        .project-item h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: ${accentColor};
        }

        .project-item p {
          font-size: 14px;
          color: #b0b8d4;
          line-height: 1.6;
        }

        /* Traits - Clean List */
        .traits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin: 20px 0;
        }

        .trait-item {
          padding: 20px 0 20px 20px;
          border-left: 2px solid ${accentColor};
          transition: all 0.2s;
        }

        .trait-item:hover {
          border-left-width: 4px;
          padding-left: 22px;
        }

        .trait-item strong {
          color: #ffffff;
          font-weight: 700;
          font-size: 18px;
          display: block;
          margin-bottom: 8px;
        }

        .trait-item span {
          color: #9aa2c2;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Volunteer & Hobbies Row */
        .info-row {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          margin: 30px 0;
        }

        .info-block {
          flex: 1;
          min-width: 200px;
        }

        .info-block h3 {
          font-size: 20px;
          font-weight: 600;
          color: ${accentColor};
          margin-bottom: 16px;
        }

        .info-block p {
          color: #b0b8d4;
          line-height: 1.7;
        }

        .hobby-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
                    margin-top: 20px;

        }

        .hobby-tag {
          padding: 6px 18px;
          background: rgba(192, 132, 252, 0.08);
          border-radius: 40px;
          font-size: 14px;
          font-weight: 500;
          color: #f0f3fa;
          transition: all 0.2s ease;
          border: 1px solid rgba(192, 132, 252, 0.15);
        }

        /* Quote Section */
        .quote-section {
          margin: 80px 0;
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, rgba(192, 132, 252, 0.05), rgba(249, 115, 22, 0.02));
          border-radius: 60px;
          border: 1px solid rgba(192, 132, 252, 0.15);
        }

        .quote-icon {
          font-size: 56px;
          opacity: 0.6;
          margin-bottom: 24px;
          color: ${accentColor};
        }

        .quote-section blockquote {
          font-size: 28px;
          font-weight: 400;
          line-height: 1.4;
          color: #e8edff;
          font-style: italic;
          max-width: 700px;
          margin: 0 auto;
        }

        .quote-author {
          margin-top: 24px;
          color: ${accentColor};
          font-size: 14px;
          letter-spacing: 1px;
          font-weight: 500;
        }

        /* Contact Section */
        .contact-section {
          margin: 60px 0 40px;
          padding: 40px 0;
          border-top: 1px solid rgba(192, 132, 252, 0.15);
          border-bottom: 1px solid rgba(192, 132, 252, 0.15);
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #cdd9ff;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.2s;
          padding: 8px 16px;
          border-radius: 40px;
          background: rgba(192, 132, 252, 0.05);
        }

        .contact-link:hover {
          color: ${accentColor};
          background: rgba(192, 132, 252, 0.15);
          transform: translateY(-2px);
        }

        /* Certifications List */
        .cert-list {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 20px;
        }

        .cert-item {
          padding: 10px 20px;
          background: rgba(192, 132, 252, 0.05);
          border-radius: 40px;
          font-size: 14px;
          color: #cdd9ff;
          border: 1px solid rgba(192, 132, 252, 0.15);
        }

        /* Footer */
        .footer {
          text-align: center;
       
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 44px;
          }
          .hero-tagline {
            font-size: 17px;
          }
          .timeline-item {
            flex-direction: column;
            gap: 12px;
          }
          .timeline-year {
            min-width: auto;
          }
          .quote-section blockquote {
            font-size: 22px;
          }
          .section-header h2 {
            font-size: 28px;
          }
          .story-text {
            font-size: 16px;
          }
          .story-text .emphasis {
            font-size: 20px;
            padding-left: 20px;
          }
          .contact-links {
            gap: 20px;
          }
        }

        @media (max-width: 550px) {
          .hero-section {
            padding: 50px 0 40px;
          }
          .hero-section h1 {
            font-size: 36px;
          }
          .traits-grid {
            grid-template-columns: 1fr;
          }
          .info-row {
            flex-direction: column;
            gap: 24px;
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
/* Simple fade-in + slide-up effect */

        }
      `}</style>

      <Nav />

      <div className="about-page">
        {/* Hero Section */}
        <div className="hero-section  fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="hero-badge">✦ GET TO KNOW ME ✦</div>
          <h1>
            <span className="first-name">Adila</span>{" "}
            <span className="last-name">Farhana</span>
          </h1>
          <div className="hero-tagline">
            Crafting elegant code and meaningful digital experiences with Laravel & React
          </div>
        </div>

        {/* My Story - Narrative Style */}
        <div className="content-section  fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="section-header">
            <h2>My Story</h2>
            <div className="subtitle">The journey behind the code</div>
          </div>
          <div className="story-text">
            <p>
              I'm <span className="highlight">Adila Farhana VV</span>, a software developer driven by curiosity and a deep love for building things that matter. Growing up, I was fascinated by how technology could solve real-world problems, and that fascination turned into a career. I earned my <span className="highlight">Master of Computer Applications (MCA)</span> from FISAT, Angamaly, graduating with an SGPA of 7.7 — but my real education came from countless hours of coding, debugging, and creating.
            </p>
            <p>
              My journey started with <span className="highlight">PHP and Laravel</span>, where I discovered the beauty of clean backend architecture. The elegance of Eloquent ORM and the power of MVC pattern captivated me. Later, I expanded into the <span className="highlight">MERN stack</span>, embracing the world of full-stack development with React and Node.js. Today, I specialize in building scalable web applications that don't just work — they <span className="highlight">delight users and empower businesses</span>.
            </p>
            <div className="emphasis">
              "I believe great software is born from simplicity, empathy, and an obsession with details."
            </div>
            <p>
              Beyond code, I'm a lifelong learner who loves exploring emerging technologies, contributing to meaningful projects, and collaborating with creative minds. Every line of code I write is an opportunity to solve a problem, and every project is a chance to make someone's day a little easier.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="content-section fade-in-up" style={{ animationDelay: "0.2s" }} >
          <div className="section-header">
            <h2>Tech Arsenal</h2>
            <div className="subtitle">Tools I wield with confidence</div>
          </div>
          <div className="skills-row">
            {["PHP", "Laravel", "MySQL", "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Python", "Git", "REST API", "Postman"].map(skill => (
              <span key={skill} className="skill-chip">{skill}</span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="content-section fade-in-up"  style={{ animationDelay: "0.2s" }}>
          <div className="section-header">
            <h2>Journey So Far</h2>
            <div className="subtitle">Where I've been and what I've built</div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2025 → Present</div>
              <div className="timeline-content">
                <h3>PHP Developer</h3>
                <div className="company">Bpract Software Solutions, Kozhikode</div>
                <p>I develop and maintain web applications using Laravel, ensuring they are reliable and efficient. I use Eloquent ORM to handle database operations in a clean and structured way. I work closely with senior developers to fix bugs, improve performance, and enhance existing features. I follow the MVC architecture to keep the code organized and easy to maintain. I also contribute to developing new features, optimizing performance, and improving overall code quality.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Jan 2025 → may 2025</div>
              <div className="timeline-content">
                <h3>MERN Stack Developer Intern</h3>
                <div className="company">Ipix Technologies Pvt Ltd, Kozhikode</div>
                <p>Developed full-stack applications using MongoDB, Express, React, and Node.js. Integrated third-party APIs, implemented JWT authentication with role-based access control, and collaborated using Git in an agile environment with daily stand-ups and sprint planning.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023 → 2025</div>
              <div className="timeline-content">
                <h3>Master of Computer Applications (MCA)</h3>
                <div className="company">FISAT, Angamaly | SGPA: 7.7 </div>
               <p>
Pursued postgraduate studies with a focus on core computer science concepts including software development, algorithms, and system design. 
Developed strong analytical and problem-solving skills through academic projects and practical implementation.
</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        {/* <div className="content-section">
          <div className="section-header">
            <h2>Featured Work</h2>
            <div className="subtitle">Projects I'm proud of</div>
          </div>
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-icon">🚗</div>
              <h3>Vehicle Marketplace Platform</h3>
              <p>A comprehensive car rental and used car sales system featuring booking management, secure payments, return tracking, user reviews, blogs, and admin dashboard with demand forecasting analytics.</p>
            </div>
            <div className="project-item">
              <div className="project-icon">📚</div>
              <h3>Academic Task System</h3>
              <p>An intelligent platform for managing assignments, seminars, and placements with deadline tracking, automated reminders, internal mark calculation, and real-time progress monitoring for students and faculty.</p>
            </div>
            <div className="project-item">
              <div className="project-icon">👗</div>
              <h3>Kallose E-commerce</h3>
              <p>A modern online shopping platform specializing in women's products including bridal dresses, accessories, and a unique ornament rental system built with MERN stack and secure payment integration.</p>
            </div>
          </div>
        </div> */}

        {/* Personal Traits */}
        <div className="content-section fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="section-header">
            <h2>What Defines Me</h2>
            <div className="subtitle">Beyond the technical skills</div>
          </div>
          <div className="traits-grid">
            <div className="trait-item">
              <strong>Time Management</strong>
              <span>Balancing multiple projects with precision and delivering on deadlines consistently</span>
            </div>
            <div className="trait-item">
              <strong>Problem Solving</strong>
              <span>Breaking down complex challenges into elegant, maintainable solutions</span>
            </div>
            <div className="trait-item">
              <strong> Team Collaboration</strong>
              <span>Thriving in diverse teams and believing that the best ideas emerge from collective creativity</span>
            </div>
            <div className="trait-item">
              <strong> Adaptability</strong>
              <span>Quickly mastering new tools, frameworks, and methodologies as technology evolves</span>
            </div>
            <div className="trait-item">
              <strong> Self-Motivation</strong>
              <span>Driven by curiosity and a genuine passion for building things that matter</span>
            </div>
          </div>
        </div>

        {/* Volunteer & Hobbies */}
        <div className="content-section fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="section-header">
            <h2>Heart & Soul</h2>
            <div className="subtitle">What fuels my creativity</div>
          </div>
          <div className="info-row">
            <div className="info-block">
              <h3> Volunteer Experience</h3>
              <p>Junior Red Cross Member — contributing to community welfare initiatives and awareness programs.<br />
              Online Hackathon Participant — collaborating with developers globally to solve real-world problems through code.</p>
            </div>
            <div className="info-block">
              <h3> Hobbies & Interests</h3>
              <div className="hobby-list">
                <span className="hobby-tag"> Travel</span>
                <span className="hobby-tag"> Badminton</span>
                <span className="hobby-tag"> Singing</span>
                <span className="hobby-tag"> Reading</span>
                <span className="hobby-tag">Creative Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        {/* <div className="quote-section">
          <div className="quote-icon">"</div>
          <blockquote>
            Building software that scales and makes life easier isn't just my job — it's my passion. Every line of code is an opportunity to create something meaningful.
          </blockquote>
          <div className="quote-author">— Adila Farhana</div>
        </div> */}

        {/* Certifications */}
        <div className="content-section fade-in-up" style={{ animationDelay: "0.2s" }} >
          <div className="section-header">
            <h2>Certifications</h2>
            <div className="subtitle">Continuous learning journey</div>
          </div>
          <div className="cert-list">
            {[
              "NPTEL - Problem Solving Through Programming in C",
              "Udemy - Java Programming (Beginner to Master)",
              "MERN Stack Development - FISAT & Link Ur Codes",
              "Introduction to Data Science - Infosys Springboard",
              "MERN Stack Developer - Ipix Technologies Pvt Ltd"
            ].map(cert => (
              <span key={cert} className="cert-item">{cert}</span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
       
          
 <div className="contact-section fade-in-up" style={{ animationDelay: "0.2s" }} >
        {/* Footer */}
        <div className="footer" id="contact">
            <h3> Let's Connect</h3>
            <p><a href="mailto:adilafarhana637@gmail.com">adilafarhana637@gmail.com</a></p>
           <p style={{ marginTop: 12 }}>
              <a href="https://github.com/adilafarhana" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/in/adilafarhana-vv-69b924272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="footer-copy">© 2026 Adila Farhana — Crafting digital experiences with Laravel & React</p>
          </div>  </div>
      </div>
    </>
  );
};

export default memo(About);