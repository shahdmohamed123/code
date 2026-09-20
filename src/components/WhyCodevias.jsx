import { motion } from 'framer-motion';
import { reasons } from '../data/content';
import SectionHeader from './SectionHeader';

export default function WhyCodevias() {
  return (
    <section className="why section" id="about-us">
      <div className="shell">
        <SectionHeader label="Why Codevias" title={<>Made for the way<br />your business moves.</>} />
        <div className="why-grid">
          {reasons.map(({ title, text, icon: Icon }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
              <div className="why-icon"><Icon size={23} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
