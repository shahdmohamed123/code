import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="final-cta">
      <div className="cta-shape shape-one" /><div className="cta-shape shape-two" />
      <div className="shell">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Your next move starts here</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Build what’s next.<br /><em>Build it right.</em></motion.h2>
        <p>Bring us the challenge. We’ll bring product thinking, design craft, and engineering momentum.</p>
        <div><a className="button button--light" href="#contact">Start a conversation <ArrowUpRight size={18} /></a><a className="button button--outline-light" href="#work">Explore our work</a></div>
      </div>
    </section>
  );
}
