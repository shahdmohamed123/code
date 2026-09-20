import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, subtitle, light = false, compact = false }) {
  return (
    <motion.div className={`section-title ${light ? 'section-title--light' : ''} ${compact ? 'section-title--compact' : ''}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .45 }} transition={{ duration: .65 }}>
      <span>{label}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}
