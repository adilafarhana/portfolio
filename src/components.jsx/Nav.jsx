import { memo, useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const pdfUrl = "/resume.pdf";
  const accentColor = "#c084fc";

  return (
    <>
      <style>{`
        .custom-navbar {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto 30px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
          position: sticky;
          top: 20px;
          z-index: 1000;
        }

        .nav-logo {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
        }

        .nav-logo span {
          color: ${accentColor};
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          text-decoration: none;
          color: #dbe3ff;
          font-size: 15px;
          font-weight: 500;
          position: relative;
          transition: 0.3s;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: ${accentColor};
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #ffffff;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          gap: 10px;
        }

        /* Updated View Resume Button */
        .nav-btn {
          padding: 9px 16px;
          border-radius: 10px;
          border: 1px solid ${accentColor};
          color: ${accentColor};
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;  background: linear-gradient(105deg, ${accentColor}, #923be4);
          color: #fff;
          box-shadow: 0 5px 28px rgba(180, 132, 252, 0.4);
          
          
nav-btn        }

        .nav-btn:hover {
          background: ${accentColor};
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(192, 132, 252, 0.4);
        }

        .menu-toggle {
          display: none;
          font-size: 26px;
          background: none;
          border: none;
          color: white;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: rgba(10, 15, 30, 0.95);
            padding: 20px;
            gap: 18px;
            display: ${open ? "flex" : "none"};
          }

          .nav-actions {
            display: none;
          }
        }
      `}</style>

      <nav className="custom-navbar">
        {/* Logo */}
        {/* <a href="/" className="nav-logo">
          Adila<span>.</span>
        </a> */}

        {/* Links */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/project">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Resume Actions */}
        <div className="nav-actions">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="nav-btn">
            View Resume
          </a>
          <a
            className="nav-btn"
            href={pdfUrl}
            download="Adila_Farhana_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>
    </>
  );
};

export default memo(Nav);