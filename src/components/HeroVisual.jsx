import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, Check, Code2, Layers3, MousePointer2, Sparkles } from 'lucide-react';

export default function HeroVisual() {
  const reduce = useReducedMotion();
  const float = (delay, distance = 10) => reduce ? {} : {
    animate: { y: [0, -distance, 0] },
    transition: { duration: 5, delay, repeat: Infinity, ease: 'easeInOut' },
  };

  return (
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
      <div className="visual-glow" />
      <motion.div className="browser-card" {...float(0)}>
        <div className="browser-top"><i /><i /><i /><span>codevias / product</span></div>
        <div className="browser-content">
          <div className="browser-copy">
            <span className="mini-kicker">DIGITAL PRODUCT</span>
            <strong>Make the complex<br />feel simple.</strong>
            <span className="mini-button">Explore product</span>
          </div>
          <div className="browser-art"><Sparkles /><span /><span /></div>
        </div>
      </motion.div>

      <motion.div className="phone-card" {...float(.8, 14)}>
        <div className="phone-notch" />
        <span className="avatar-dot" />
        <small>Welcome back</small>
        <strong>Design smarter.</strong>
        <div className="phone-stat"><span>Growth</span><b>+28%</b></div>
        <div className="phone-bars"><i /><i /><i /><i /><i /></div>
      </motion.div>

      <motion.div className="crm-card" {...float(.25, 8)}>
        <div><BarChart3 size={17} /><span>Pipeline</span><b>Live</b></div>
        <strong>$84.2K</strong>
        <div className="crm-lines"><i /><i /><i /></div>
      </motion.div>

      <motion.div className="code-card" {...float(1.2, 7)}>
        <Code2 size={16} /><code><em>const</em> idea = <b>build</b>();</code>
      </motion.div>

      <motion.div className="status-card" {...float(.5, 9)}>
        <span><Check size={14} /></span><div><b>Ready to launch</b><small>All systems go</small></div>
      </motion.div>

      <div className="orbit orbit-a" /><div className="orbit orbit-b" />
      <div className="node node-a"><Layers3 size={14} /></div>
      <div className="node node-b"><MousePointer2 size={14} /></div>
    </motion.div>
  );
}
