import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><Logo inverted /><p>Digital products. Built for growth.</p></div>
        <div><b>Navigate</b><a href="#home">Home</a><a href="#services">Services</a><a href="#process">Process</a><a href="#blog">Blog</a><Link to="/admin">Dashboard</Link></div>
        <div><b>Services</b><a href="#services">Web Development</a><a href="#services">Mobile Apps</a><a href="#services">UI/UX Design</a><a href="#services">Custom Software</a></div>
        <div><b>Contact</b><a className="footer-email" href="mailto:codeviassolutions@gmail.com" aria-label="Email Codevias"><Mail size={17} /><span>codeviassolutions@gmail.com</span></a><a href="#contact">Start a project</a><div className="follow-block"><span className="follow-label">Follow us</span><div className="socials follow-socials"><a className="social-instagram" href="https://www.instagram.com/codevias_solutions/" target="_blank" rel="noreferrer" aria-label="Follow Codevias on Instagram"><FaInstagram /><span>Instagram</span></a><a className="social-facebook" href="https://www.facebook.com/profile.php?id=61594397583998" target="_blank" rel="noreferrer" aria-label="Follow Codevias on Facebook"><FaFacebookF /><span>Facebook</span></a></div></div></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Codevias. All rights reserved.</span><span>Build. Launch. Grow.</span></div>
    </footer>
  );
}
