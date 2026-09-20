import { motion } from 'framer-motion';
import { ArrowRight, Check, CircleDot, Mail, MessageCircle, Sheet, StickyNote } from 'lucide-react';

const fragments = [
  ['Excel', Sheet, 'fragment-a'], ['WhatsApp', MessageCircle, 'fragment-b'], ['Email', Mail, 'fragment-c'],
  ['Notes', StickyNote, 'fragment-d'], ['Manual Tasks', Check, 'fragment-e'], ['Repeated Data', CircleDot, 'fragment-f'],
];
const modules = ['Leads', 'Clients', 'Tasks', 'Projects', 'Sales', 'Reports', 'Team'];

export default function ProblemSolution() {
  return (
    <section className="problem section">
      <div className="shell">
        <div className="problem-heading"><span>Before → after</span><h2>Excel here.<br />WhatsApp there.<br /><em>Notes everywhere.</em></h2><p>Your workflow deserves a better system.</p></div>
        <div className="transformation">
          <div className="fragment-field">
            {fragments.map(([label, Icon, cls], index) => (
              <motion.div className={`workflow-fragment ${cls}`} key={label} initial={{ opacity: 0, scale: .7, x: index % 2 ? 30 : -30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .08 }}><Icon size={16} />{label}</motion.div>
            ))}
            <span className="fragment-label">Scattered tools</span>
          </div>
          <motion.div className="flow-arrow" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}><ArrowRight /></motion.div>
          <motion.div className="system-dashboard" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .7 }}>
            <div className="system-sidebar"><span className="system-logo">CV</span>{modules.map((item, index) => <i className={index === 0 ? 'active' : ''} key={item}>{item.slice(0, 1)}</i>)}</div>
            <div className="system-main">
              <div className="system-top"><div><small>Workspace</small><strong>Business overview</strong></div><span>Live system</span></div>
              <div className="system-stats"><div><small>Total leads</small><b>248</b></div><div><small>Active projects</small><b>18</b></div><div><small>Tasks today</small><b>32</b></div></div>
              <div className="system-content"><div className="system-chart"><span>Performance</span><div><i /><i /><i /><i /><i /><i /></div></div><div className="system-list"><span>Connected modules</span>{modules.slice(0, 4).map(item => <i key={item}><Check size={10} />{item}</i>)}</div></div>
            </div>
          </motion.div>
        </div>
        <div className="solution-copy"><span>One connected system.</span><p>We build custom digital systems around your actual workflow — not the other way around.</p><a className="text-link" href="#contact">Build your system <ArrowRight size={17} /></a></div>
      </div>
    </section>
  );
}
