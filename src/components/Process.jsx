import { motion } from 'framer-motion';
import { processSteps } from '../data/content';
import SectionHeader from './SectionHeader';

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="shell">
        <SectionHeader label="How we work" title="From idea to launch." light subtitle="A clear, collaborative path from first conversation to a product ready to grow." />
        <div className="timeline">
          <motion.div className="timeline-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: .5 }} transition={{ duration: 1.1 }} />
          {processSteps.map(([number, title, text, Icon], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .1 }}>
              <span className="timeline-dot"><Icon size={16} /></span><small>{number}</small><h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
