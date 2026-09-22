import { motion } from 'framer-motion';

const pillars = [
  ['01', 'Product strategy', 'The right problem, clearly defined.'],
  ['02', 'Experience design', 'Simple journeys people want to use.'],
  ['03', 'Scalable engineering', 'Reliable systems ready for growth.'],
];

export default function Intro() {
  return (
    <section className="intro section" id="about">
      <div className="shell">
        <div className="section-heading intro-heading">
          <div><span className="section-number">Built for the next move</span><h2>Less friction.<br />More momentum.</h2></div>
          <div className="intro-copy"><p>Most digital products fail in the gaps between strategy, design, and development. Codevias closes those gaps with one focused team from first idea to launch.</p><a href="#process">See how we work <span>↘</span></a></div>
        </div>
        <div className="pillar-grid">
          {pillars.map(([number, title, text], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .1 }}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
