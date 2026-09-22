import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const links = [
  ['Services', 'services'], ['Work', 'work'], ['Process', 'process'], ['About', 'about'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-30% 0px -58% 0px', threshold: [0, .15, .4] });
    [['Home', 'home'], ...links].forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-wrap--scrolled' : ''}`}>
      <nav className="nav shell" aria-label="Primary navigation">
        <Logo />
        <div className="nav-links">
          {links.map(([label, id]) => <a className={active === id ? 'active' : ''} key={id} href={`#${id}`}>{label}</a>)}
        </div>
        <Link className="nav-admin-link" to="/admin">Dashboard</Link>
        <a className="button button--small nav-cta" href="#contact">Start a project <ArrowUpRight size={17} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
            <Link to="/admin" onClick={() => setOpen(false)}>Dashboard</Link>
            <a className="button" href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={18} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
