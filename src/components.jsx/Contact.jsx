import { memo, useState } from "react";
import Nav from "./Nav";

const Contact = () => {
  const accentColor = "#c084fc";
  const secondaryAccent = "#f97316";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Nav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Inter', 'Segoe UI', 'Poppins', system-ui, sans-serif;
          background: radial-gradient(circle at 20% 30%, #0a0f1e, #03060f);
          color: #f0f3fa;
          overflow-x: hidden;
        }

        /* Contact Page */
        .contact-page { max-width: 900px; margin: 0 auto; padding: 40px 24px 80px; text-align: center; }

        /* Header */
        .contact-header { margin: 30px 0 50px; }
        .hero-badge {
          display: inline-block; padding: 6px 16px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 40px; font-size: 13px; font-weight: 500;
          color: ${accentColor}; margin-bottom: 24px;
          letter-spacing: 0.5px;
        }
        .contact-header h1 {
          font-size: 48px; font-weight: 800;
          background: linear-gradient(135deg, #ffffff 30%, ${accentColor} 70%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          margin-bottom: 20px;
        }
        .contact-header h1 span {
          background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent});
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .contact-header p {
          max-width: 600px; margin: 0 auto; font-size: 18px; line-height: 1.7; color: #b9c3e6;
        }

        /* Stats Row */
        .stats-row { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; margin: 40px 0 60px; padding: 24px 0; border-top: 1px solid rgba(192, 132, 252, 0.15); border-bottom: 1px solid rgba(192, 132, 252, 0.15); }
        .stat-item { text-align: center; }
        .stat-number { font-size: 32px; font-weight: 800; background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent}); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .stat-label { font-size: 13px; color: #8f99b8; margin-top: 4px; letter-spacing: 0.5px; }

        /* Contact Info Centered */
        .contact-grid { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; margin: 40px 0 60px; }
        .info-card {
          max-width: 450px;
          width: 100%;
          background: rgba(15, 20, 40, 0.65);
          backdrop-filter: blur(12px);
          border-radius: 32px;
          padding: 40px;
          border: 1px solid rgba(192, 132, 252, 0.2);
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .info-card h2 {
          font-size: 28px; font-weight: 700; margin-bottom: 28px;
          background: linear-gradient(135deg, #ffffff, ${accentColor});
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .contact-detail { display: flex; align-items: center; gap: 18px; margin-bottom: 28px; padding: 12px 0; border-bottom: 1px solid rgba(192, 132, 252, 0.1); justify-content: center; }
        .contact-icon { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; font-size: 24px; background: rgba(192, 132, 252, 0.12); border-radius: 16px; }
        .contact-detail-content { text-align: left; }
        .contact-detail-content h3 { font-size: 14px; font-weight: 500; color: ${accentColor}; margin-bottom: 6px; }
        .contact-detail-content p, .contact-detail-content a { font-size: 16px; color: #cdd9ff; text-decoration: none; }
        .contact-detail-content a:hover { color: ${accentColor}; }

        .social-section { margin-top: 32px; }
        .social-section h3 { font-size: 18px; margin-bottom: 20px; color: #ffffff; }
        .social-icons { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .social-icon { display: flex; align-items: center; gap: 10px; padding: 12px 24px; background: rgba(192, 132, 252, 0.08); border-radius: 40px; border: 1px solid rgba(192, 132, 252, 0.2); color: #cdd9ff; text-decoration: none; font-weight: 500; transition: all 0.3s; }
        .social-icon:hover { background: rgba(192, 132, 252, 0.2); border-color: ${accentColor}; transform: translateY(-3px); color: ${accentColor}; }

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


        @media (max-width: 768px) {
          .contact-header h1 { font-size: 36px; }
          .contact-header p { font-size: 16px; }
          .info-card { padding: 28px; }
          .contact-detail { flex-direction: column; gap: 8px; text-align: center; }
          .contact-detail-content { text-align: center; }
        }

        @media (max-width: 500px) {
          .contact-header h1 { font-size: 32px; }
          .contact-detail { gap: 12px; }
          .contact-icon { width: 40px; height: 40px; font-size: 20px; }
          .social-icon { padding: 8px 18px; font-size: 14px; }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-header">
          <div className="hero-badge">✦ LET'S CONNECT ✦</div>
          <h1>Get In <span>Touch</span></h1>
          <p>Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        </div>


        <div className="contact-grid">
          <div className="info-card">
            <h2>Contact Info</h2>
            <div className="contact-detail"><div className="contact-icon">📧</div><div className="contact-detail-content"><h3>EMAIL</h3><a href="mailto:adilafarhana637@gmail.com">adilafarhana637@gmail.com</a></div></div>
            <div className="contact-detail"><div className="contact-icon">📍</div><div className="contact-detail-content"><h3>LOCATION</h3><p>Calicut, Koyilandy 673307, Kerala, India</p></div></div>
            <div className="contact-detail"><div className="contact-icon">📞</div><div className="contact-detail-content"><h3>PHONE</h3><a href="tel:+918606425684">+91 86064 25684</a></div></div>

            <div className="social-section">
              <h3>🔗 Connect with me</h3>
              <div className="social-icons">
                <a href="https://github.com/adilafarhana" target="_blank" rel="noopener noreferrer" className="social-icon"><span>🐙</span> GitHub</a>
                <a href="https://www.linkedin.com/in/adilafarhana-vv-69b924272/" target="_blank" rel="noopener noreferrer" className="social-icon"><span>💼</span> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

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
    </>
  );
};

export default memo(Contact);