import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/content';
import SectionHeader from './SectionHeader';

function ServiceVisual({ type }) {
  return <div className={`service-visual service-visual--${type}`} aria-hidden="true"><span /><span /><span /><i /><i /></div>;
}

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="shell">
        <SectionHeader label="What we do" title={<>One team.<br />Multiple digital solutions.</>} subtitle="From the first idea to the final launch." />
        <div className="services-grid">
          {services.map(({ number, title, text, icon: Icon, visual }, index) => (
            <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }} whileHover={{ y: -8 }}>
              <div className="card-meta"><span>{number}</span><Icon size={21} /></div>
              <ServiceVisual type={visual} />
              <h3>{title}</h3><p>{text}</p>
              <a href="#contact" aria-label={`Start a ${title} project`}>Explore service <ArrowUpRight size={17} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
