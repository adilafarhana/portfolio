import { memo } from "react";
import Nav from "./Nav";

const Resume = () => {
  // Same color theme as homepage
  const accentColor = "#c084fc";
  const secondaryAccent = "#f97316";
  const pdfUrl = "/resume.pdf";

  return (
    <>
      <style>
        {`
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

          .resume-page {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 24px 80px;
          }

          /* Header Section */
          .resume-header {
            text-align: center;
            margin: 30px 0 50px;
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
            animation: fadeUp 0.6s ease forwards;
          }
          
          .resume-header h1 {
            font-size: 56px;
            font-weight: 800;
            background: linear-gradient(135deg, #ffffff 30%, ${accentColor} 70%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 20px;
            animation: fadeUp 0.6s ease forwards 0.1s;
          }
          
          .resume-header h1 span {
            background: linear-gradient(135deg, ${accentColor}, ${secondaryAccent});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          
          .resume-header p {
            max-width: 650px;
            margin: 0 auto;
            font-size: 18px;
            line-height: 1.7;
            color: #b9c3e6;
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

          /* Resume Card */
          .resume-card {
            background: rgba(15, 20, 40, 0.65);
            backdrop-filter: blur(12px);
            border-radius: 32px;
            padding: 32px;
            border: 1px solid rgba(192, 132, 252, 0.2);
            transition: all 0.35s ease;
            position: relative;
            overflow: hidden;
            animation: fadeUp 0.6s ease forwards 0.4s;
          }

          .resume-card::after {
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

          .resume-card:hover::after {
            opacity: 0.7;
          }

          /* PDF Viewer */
          .pdf-viewer {
            width: 100%;
            height: 700px;
            border: 1px solid rgba(192, 132, 252, 0.3);
            border-radius: 24px;
            background: rgba(10, 12, 26, 0.5);
            margin-bottom: 32px;
            transition: all 0.3s ease;
          }

          .pdf-viewer:hover {
            border-color: ${accentColor};
            box-shadow: 0 10px 30px rgba(192, 132, 252, 0.2);
          }

          /* Download Button */
          .btn-wrapper {
            text-align: center;
          }

          .btn-download {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 14px 36px;
            background: linear-gradient(135deg, ${accentColor}, #a855f7);
            color: #fff;
            border: none;
            border-radius: 40px;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(192, 132, 252, 0.3);
            font-family: inherit;
          }

          .btn-download:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(192, 132, 252, 0.4);
            background: linear-gradient(135deg, #d48eff, ${accentColor});
          }

          /* Info Section */
          .info-section {
            margin-top: 40px;
            padding: 24px;
            background: rgba(192, 132, 252, 0.05);
            border-radius: 24px;
            text-align: center;
            border: 1px solid rgba(192, 132, 252, 0.15);
          }

          .info-section p {
            color: #b9c4f0;
            font-size: 14px;
            line-height: 1.6;
          }

          .info-section a {
            color: ${accentColor};
            text-decoration: none;
            font-weight: 500;
          }

          .info-section a:hover {
            text-decoration: underline;
          }

          /* Footer */
          .footer {
            margin-top: 70px;
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
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .resume-page {
              padding: 30px 20px 60px;
            }
            .resume-header h1 {
              font-size: 36px;
            }
            .resume-header p {
              font-size: 16px;
            }
            .pdf-viewer {
              height: 500px;
            }
            .stats-row {
              gap: 32px;
            }
            .stat-number {
              font-size: 28px;
            }
            .btn-download {
              padding: 12px 28px;
              font-size: 14px;
            }
          }

          @media (max-width: 550px) {
            .resume-header h1 {
              font-size: 32px;
            }
            .resume-card {
              padding: 20px;
            }
            .pdf-viewer {
              height: 400px;
            }
            .stats-row {
              gap: 24px;
            }
            .stat-number {
              font-size: 24px;
            }
            .btn-download {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>

      <div className="resume-page">
        <Nav />

        <div className="resume-header">
          <div className="hero-badge">✦ MY RESUME ✦</div>
          <h1>Professional <span>Resume</span></h1>
          <p>
            A comprehensive overview of my skills, experience, education, and achievements.
            Feel free to download or view my resume below.
          </p>
        </div>

       

        {/* Resume Card */}
        <div className="resume-card">
          {/* PDF Viewer */}
          <iframe
            className="pdf-viewer"
            src={pdfUrl}
            title="Adila Farhana Resume"
            frameBorder="0"
          ></iframe>

          {/* Download Button */}
          <div className="btn-wrapper">
            <a
              className="btn-download"
              href={pdfUrl}
              download="Adila_Farhana_Resume.pdf"
            >
              <span>📄</span> Download Resume
              <span>⬇️</span>
            </a>
          </div>

          {/* Info Section */}
          <div className="info-section">
            <p>
              📌 Can't view the resume? <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Open in new tab</a> or click the download button above.
            </p>
            <p style={{ marginTop: "12px" }}>
              📧 For any inquiries, reach me at <a href="mailto:adilafarhana637@gmail.com">adilafarhana637@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <h3>Adila Farhana</h3>
          <p>
            <a href="https://www.linkedin.com/in/adilafarhana-vv-69b924272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p className="footer-copy">© 2026 Adila Farhana — Crafted with 💜 using Laravel & React</p>
        </div>
      </div>
    </>
  );
};

export default memo(Resume);