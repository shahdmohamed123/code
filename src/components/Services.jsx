import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/content';

const details = {
  web: { short: 'High-performing websites and platforms that make your value obvious and turn attention into action.', deliverables: ['Strategy & architecture', 'Responsive development', 'CMS & integrations'], outcome: 'A fast, accessible platform built to convert.', tag: 'Launch in 6–10 weeks' },
  mobile: { short: 'Polished iOS and Android experiences engineered around real user habits and business outcomes.', deliverables: ['Product definition', 'Cross-platform development', 'Store launch support'], outcome: 'One codebase. A genuinely native feel.', tag: 'Launch in 10–16 weeks' },
  design: { short: 'Research-led product design that makes complex tools feel focused, intuitive, and unmistakably yours.', deliverables: ['UX research & flows', 'Interface design', 'Design systems'], outcome: 'A tested experience ready for development.', tag: 'Design sprint 4–8 weeks' },
  software: { short: 'Custom operations software, portals, CRMs, and automations shaped around how your team really works.', deliverables: ['Workflow mapping', 'Custom dashboard', 'Automation & reporting'], outcome: 'One connected source of operational truth.', tag: 'MVP in 10–14 weeks' },
  marketing: { short: 'Digital growth systems that connect your positioning, content, search presence, and acquisition journey.', deliverables: ['Growth strategy', 'SEO foundation', 'Campaign experiences'], outcome: 'A measurable path from discovery to demand.', tag: 'Momentum in 4–6 weeks' },
};

export default function Services() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const detail = details[selected.visual];
  return (
    <section className="services section" id="services">
      <div className="shell services-layout">
        <div className="services-intro"><span className="section-number">What we do</span><h2>Five ways to move your business forward.</h2><p>Choose the capability you need—or bring us a challenge and we’ll assemble the right team around it.</p><a className="text-link-new" href="#contact">Talk to a product strategist <ArrowUpRight size={17} /></a></div>
        <div className="service-explorer">
          <div className="service-tabs" role="tablist" aria-label="Services">
            {services.map(({ number, title, icon: Icon }, index) => <button key={title} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span>{number}</span><Icon size={20} /><b>{title}</b><ArrowRight size={17} /></button>)}
          </div>
          <motion.article key={selected.title} className={`service-detail service-detail--${selected.visual}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}>
            <div className="service-detail-top"><span>{detail.tag}</span><selected.icon size={28} /></div><h3>{selected.title}</h3><p>{detail.short}</p><ul>{detail.deliverables.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><div className="service-outcome"><small>What you get</small><strong>{detail.outcome}</strong></div><a href="#contact">Plan this project <ArrowUpRight size={17} /></a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
