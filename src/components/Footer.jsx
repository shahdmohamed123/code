import { Camera, Mail, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><Logo inverted /><p>Digital products. Built for growth.</p></div>
        <div><b>Navigate</b><a href="#home">Home</a><a href="#services">Services</a><a href="#process">Process</a><Link to="/admin">Dashboard</Link></div>
        <div><b>Services</b><a href="#services">Web Development</a><a href="#services">Mobile Apps</a><a href="#services">UI/UX Design</a><a href="#services">Custom Software</a></div>
        <div><b>Connect</b><a href="mailto:codeviassolutions@gmail.com">codeviassolutions@gmail.com</a><a href="#contact">Start a project</a><div className="socials"><a href="mailto:codeviassolutions@gmail.com" aria-label="Email Codevias"><Mail size={17} /></a><a href="https://www.instagram.com/codevias_solutions/" target="_blank" rel="noreferrer" aria-label="Codevias on Instagram"><Camera size={17} /></a><a href="https://www.facebook.com/profile.php?id=61594397583998" target="_blank" rel="noreferrer" aria-label="Codevias on Facebook"><UsersRound size={17} /></a></div></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Codevias. All rights reserved.</span><span>Build. Launch. Grow.</span></div>
    </footer>
  );
}
