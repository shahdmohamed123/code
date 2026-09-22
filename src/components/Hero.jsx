import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}><span /> Cairo · Building worldwide</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }}>
            Digital products <em>built to move.</em>
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .65 }}>
            Strategy, design, and engineering in one senior product team. We turn ambitious ideas and complex workflows into clear, scalable digital experiences.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>
            <a className="button" href="#contact">Start a project <ArrowUpRight size={19} /></a>
            <a className="button button--ghost" href="#services">Explore services <ArrowDown size={17} /></a>
          </motion.div>
          <motion.div className="hero-proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}><span><CheckCircle2 size={15} /> Senior product team</span><span><CheckCircle2 size={15} /> Weekly progress</span><span><CheckCircle2 size={15} /> Built to scale</span></motion.div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-scroll"><span>Scroll to explore</span><i /></div>
    </section>
  );
}
