import { Globe2, Mail, Share2 } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><Logo inverted /><p>Digital products. Built for growth.</p></div>
        <div><b>Navigate</b><a href="#home">Home</a><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a></div>
        <div><b>Services</b><a href="#services">Web Development</a><a href="#services">Mobile Apps</a><a href="#services">UI/UX Design</a><a href="#services">Custom Software</a></div>
        <div><b>Connect</b><a href="mailto:hello@codevias.com">hello@codevias.com</a><a href="#contact">Start a project</a><div className="socials"><a href="mailto:hello@codevias.com" aria-label="Email Codevias"><Mail size={17} /></a><a href="#home" aria-label="Codevias website"><Globe2 size={17} /></a><a href="#contact" aria-label="Share your project"><Share2 size={17} /></a></div></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Codevias. All rights reserved.</span><span>Build. Launch. Grow.</span></div>
    </footer>
  );
}
