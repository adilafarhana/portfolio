const Footer = ({ accentColor }) => {
  return (
    <footer style={{ textAlign: 'center', padding: '30px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <h3 style={{ color: accentColor }}>Adila Farhana</h3>
      <p>Full Stack Developer | PHP Laravel | React</p>
      <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;