import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}><span /> Digital products studio</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }}>
            We build digital products <em>that move businesses forward.</em>
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .65 }}>
            From websites and mobile apps to custom software and digital experiences, we turn ideas into products built around real business goals.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>
            <a className="button" href="#contact">Start a project <ArrowUpRight size={19} /></a>
            <a className="button button--ghost" href="#services">Explore services <ArrowDown size={17} /></a>
          </motion.div>
          <motion.p className="service-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
            Web Development <i /> Mobile Apps <i /> UI/UX <i /> Custom Software <i /> Digital Marketing
          </motion.p>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-index"><span>01</span><i /><span>13</span></div>
    </section>
  );
}
