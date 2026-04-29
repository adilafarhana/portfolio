import { memo, useState, useEffect } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const pdfUrl = "/resume.pdf";
  const accentColor = "#c084fc";

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setOpen(false); // close menu on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto 30px;
          padding: 30px 24px;
          background: #0a0f1e;
          border-radius: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .nav-links a {
          margin-right: 20px;
          color: #dbe3ff;
          text-decoration: none;
          font-size: 15px;
        }

        .nav-btn {
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid ${accentColor};
          background: #9655ff;
          color: #fff;
          text-decoration: none;
          margin-left: 10px;
          font-size: 15px;
                   

        }

        .menu-toggle {
          font-size: 24px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        /* MOBILE OVERLAY */
        .mobile-overlay {
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background: #0a0f1e;
          padding: 20px;
            padding-bottom: 200px;
          border-radius: 12px;
          z-index: 999;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-menu a {
          color: #dbe3ff;
          text-decoration: none;
          font-size: 16px;
        }

          .mobile-btn {
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid ${accentColor};
          background: #9655ff;
          color: #fff;
          text-decoration: none;
          margin-left: 10px;
          font-size: 13px;
          width:50%;
          display:flex ;
          justify-content:center;
        }
      `}</style>

      <nav className="navbar">
        {/* ===== DESKTOP VIEW ===== */}
        {!isMobile && (
          <>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/project">Projects</a>
              <a href="/contact">Contact</a>
            </div>

            <div>
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="nav-btn">
                View Resume
              </a>
              <a href={pdfUrl} download className="nav-btn">
                Download Resume
              </a>
            </div>
          </>
        )}

        {/* ===== MOBILE VIEW ===== */}
        {isMobile && (
          <>
            <button
              className="menu-toggle"
              onClick={() => setOpen(!open)}
            >
            ☰
            </button>

            {open && (
              <div className="mobile-overlay">
                <div className="mobile-menu">
                  <a href="/" onClick={() => setOpen(false)}>Home</a>
                  <a href="/about" onClick={() => setOpen(false)}>About</a>
                  <a href="/project" onClick={() => setOpen(false)}>Projects</a>
                  <a href="/contact" onClick={() => setOpen(false)}>Contact</a>

                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-btn"
                    onClick={() => setOpen(false)}
                  >
                    View Resume
                  </a>

                  <a
                    href={pdfUrl}
                    download
                    className="mobile-btn"
                    onClick={() => setOpen(false)}
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </nav>
    </>
  );
};

export default memo(Nav);