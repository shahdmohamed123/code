import { motion } from 'framer-motion';

const pillars = [
  ['01', 'Strategy', 'Understand the goal.'],
  ['02', 'Product', 'Design the right experience.'],
  ['03', 'Technology', 'Build the solution.'],
];

export default function Intro() {
  return (
    <section className="intro section" id="about">
      <div className="shell">
        <div className="section-heading intro-heading">
          <div><span className="section-number">01 / Foundation</span><h2>Your idea is only<br />the beginning.</h2></div>
          <p>We transform ideas, business requirements, and operational challenges into digital products that people can actually use.</p>
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
