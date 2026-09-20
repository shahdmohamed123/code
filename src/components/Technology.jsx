import { motion } from 'framer-motion';
import { Braces, CloudCog, Database, Layers3, Smartphone } from 'lucide-react';
import { technologies } from '../data/content';
import SectionHeader from './SectionHeader';

const icons = [Layers3, Braces, Smartphone, Database, CloudCog];

export default function Technology() {
  return (
    <section className="technology section">
      <div className="shell">
        <SectionHeader label="Our stack" title="The technology behind the product." compact />
        <div className="tech-list">{technologies.map(([title, items], index) => { const Icon = icons[index]; return <motion.div key={title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}><Icon size={19} /><b>{title}</b><span>{items}</span></motion.div>; })}</div>
      </div>
    </section>
  );
}
