import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="final-cta">
      <div className="cta-shape shape-one" /><div className="cta-shape shape-two" />
      <div className="shell">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Ready when you are</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>You have the idea.<br /><em>We have the code.</em></motion.h2>
        <p>Let's turn your idea into a digital product built around your goals.</p>
        <div><a className="button button--light" href="#contact">Start a project <ArrowUpRight size={18} /></a><a className="button button--outline-light" href="#contact">Tell us your idea</a></div>
      </div>
    </section>
  );
}
