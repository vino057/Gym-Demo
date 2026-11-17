
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowUpRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <Link to="/" className="brand">
            <Dumbbell size={24} />
            <span>IRON<span className="gold-text">CORE</span></span>
          </Link>

          <p>
            Build strength, improve your fitness, and become the strongest
            version of yourself.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
          </div>
        </div>

        <div>
          <h3>QUICK LINKS</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/trainers">Trainers</Link>
        </div>

        <div>
          <h3>MEMBERSHIP</h3>
          <Link to="/membership">Membership Plans</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>CONTACT</h3>
          <p>Ambattur, Chennai, Tamil Nadu</p>
          <p>Monday – Saturday</p>
          <p>5:00 AM – 10:00 PM</p>
          <Link to="/contact" className="footer-contact">
            Get in touch <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IRON CORE FITNESS. All rights reserved.</p>
        <p>Designed for strength. Built for life.</p>
      </div>
    </footer>
  );
}

export default Footer;
