import { memo, useState, useEffect } from "react";
import Nav from "./Nav";

const Contact = () => {
  const accentColor = "#c084fc";
  const secondaryAccent = "#f97316";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);



  return (
    <>
      <Nav />

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

        .contact-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 24px 80px;
          text-align: center;
        }

        .contact-header {
          margin: 30px 0 50px;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 40px;
          font-size: 13px;
          color: ${accentColor};
          margin-bottom: 24px;
        }

        .contact-header h1 {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 30%, ${accentColor} 70%);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 20px;
        }

        .contact-header span {
          background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent});
          -webkit-background-clip: text;
          color: transparent;
        }

        .contact-header p {
          max-width: 600px;
          margin: 0 auto;
          font-size: 18px;
          color: #b9c3e6;
        }

        .contact-grid {
          display: flex;
          justify-content: center;
          margin: 40px 0 60px;
        }

        .info-card {
          width: 100%;
          max-width: 450px;
          padding: 40px;
          border-radius: 32px;
          background: rgba(15, 20, 40, 0.65);
          border: 1px solid rgba(192, 132, 252, 0.2);
        }

        .info-card h2 {
          font-size: 28px;
          margin-bottom: 28px;
          background: linear-gradient(135deg, #ffffff, ${accentColor});
          -webkit-background-clip: text;
          color: transparent;
        }

        .contact-detail {
          margin-bottom: 24px;
        }

        .contact-detail h3 {
          font-size: 14px;
          color: ${accentColor};
          margin-bottom: 6px;
        }

        .contact-detail p,
        .contact-detail a {
          font-size: 16px;
          color: #cdd9ff;
          text-decoration: none;
        }

        .contact-detail a:hover {
          color: ${accentColor};
        }

        .social-icons {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .social-icon {
          padding: 10px 20px;
          border-radius: 30px;
          background: rgba(192, 132, 252, 0.08);
          border: 1px solid rgba(192, 132, 252, 0.2);
          color: #cdd9ff;
          text-decoration: none;
          transition: 0.3s;
        }

        .social-icon:hover {
          color: ${accentColor};
          transform: translateY(-3px);
        }

        .footer {
          margin-top: 60px;
          padding-top: 20px;
          border-top: 1px solid rgba(192, 132, 252, 0.2);
        }

        .footer-copy {
          margin-top: 10px;
          font-size: 13px;
          color: #7e8bb6;
        }
      `}</style>

      <div className="contact-page fade-in-up">
        {/* Header */}
        <div className="contact-header">
          <div className="hero-badge">✦ LET'S CONNECT ✦</div>
          <h1>
            Get In <span>Touch</span>
          </h1>
          <p>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact-grid">
          <div className="info-card">
            <h2>Contact Info</h2>

            <div className="contact-detail">
              <h3>Email</h3>
              <a href="mailto:adilafarhana637@gmail.com">
                adilafarhana637@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <h3>Location</h3>
              <p>Calicut, Kerala, India</p>
            </div>

            <div className="contact-detail">
              <h3>Phone</h3>
              <a href="tel:+918606425684">+91 86064 25684</a>
            </div>

            <div className="social-icons">
              <a
                href="https://github.com/adilafarhana"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/adilafarhana-vv-69b924272/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>adilafarhana637@gmail.com</p>
          <p className="footer-copy">
            © 2026 Adila Farhana — Laravel & React Developer
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(Contact);