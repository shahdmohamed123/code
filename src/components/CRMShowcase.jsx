import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, CircleUserRound, ListFilter, Search } from 'lucide-react';

const tags = ['Leads', 'Deals', 'Contacts', 'Tasks', 'Projects', 'Sales', 'Reports', 'Commissions'];

export default function CRMShowcase() {
  return (
    <section className="crm-showcase section">
      <div className="shell">
        <div className="crm-intro">
          <div><span className="section-number">Built in-house</span><h2>We don't just build products for clients. <em>We're building our own.</em></h2></div>
          <div><span className="concept-pill">Internal product / concept</span><h3>Codevias CRM</h3><p>A CRM concept built around the way we manage leads, deals, clients, projects, tasks, payments, and sales operations.</p></div>
        </div>
        <motion.div className="crm-frame" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8 }}>
          <aside><b>CV</b><span className="active">OV</span><span>LD</span><span>DL</span><span>TS</span><span>RP</span></aside>
          <div className="crm-body">
            <header><div><small>Workspace / Overview</small><h4>Good morning, Codevias</h4></div><div className="crm-tools"><button aria-label="Search"><Search size={15} /></button><button aria-label="Filter"><ListFilter size={15} /></button><CircleUserRound size={24} /></div></header>
            <div className="crm-metrics"><div><span>Total Leads</span><b>1,284</b><small>↑ 12.4%</small></div><div><span>Active Deals</span><b>86</b><small>↑ 8.1%</small></div><div><span>Revenue</span><b>$118.4K</b><small>↑ 17.8%</small></div><div><span>Tasks</span><b>42</b><small>14 today</small></div></div>
            <div className="crm-panels">
              <div className="revenue-panel"><div><span>Revenue overview</span><button>Last 6 months <ChevronDown size={12} /></button></div><div className="chart-grid"><div className="area-curve"><i /><i /><i /><i /><i /><i /></div></div><div className="chart-labels"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div></div>
              <div className="activity-panel"><div><span>Recent activity</span><b>Live</b></div>{['New lead assigned', 'Proposal accepted', 'Invoice payment received', 'Project task completed'].map((item, i) => <p key={item}><i className={`activity-dot dot-${i}`} />{item}<small>{i + 2}m</small></p>)}</div>
            </div>
            <div className="pipeline"><span>Sales pipeline</span><div>{['New lead 24', 'Qualified 18', 'Proposal 12', 'Won 08'].map((item, i) => <i key={item} className={`pipe-${i}`}>{item}</i>)}</div></div>
          </div>
        </motion.div>
        <div className="crm-bottom"><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href="#contact">Follow the build <ArrowUpRight size={17} /></a></div>
      </div>
    </section>
  );
}
