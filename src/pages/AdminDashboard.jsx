import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, BriefcaseBusiness, CalendarDays,
  Check, ChevronDown, CircleDollarSign, CircleHelp, FileText, Inbox, LayoutDashboard,
  Menu, MoreHorizontal, Plus, Search, Settings, Sparkles, Users, X,
} from 'lucide-react';

const projects = [
  { id: 'CV-024', name: 'Nile Commerce Platform', client: 'Northstar Retail', service: 'Web platform', value: 32000, progress: 72, status: 'In progress', due: 'Oct 18' },
  { id: 'CV-023', name: 'Orion Mobile Experience', client: 'Orion Finance', service: 'Mobile app', value: 48000, progress: 46, status: 'In progress', due: 'Nov 04' },
  { id: 'CV-022', name: 'Meridian Brand System', client: 'Meridian Labs', service: 'Product design', value: 18500, progress: 92, status: 'Review', due: 'Sep 28' },
  { id: 'CV-021', name: 'FlowOps Automation', client: 'Apex Logistics', service: 'Custom software', value: 41000, progress: 100, status: 'Completed', due: 'Sep 12' },
];

const inquiries = [
  { name: 'Maya R.', company: 'Cedar Health', service: 'Custom software', budget: '$30k+', age: '12 min', priority: 'High' },
  { name: 'Omar Khalil', company: 'Finora', service: 'Mobile app', budget: '$15–30k', age: '2 hr', priority: 'High' },
  { name: 'Lina Hassan', company: 'Atelier Nine', service: 'Website', budget: '$5–15k', age: '5 hr', priority: 'Normal' },
  { name: 'Adam N.', company: 'Nomad Foods', service: 'Product design', budget: '$15–30k', age: 'Yesterday', priority: 'Normal' },
];

const navItems = [
  ['Overview', LayoutDashboard], ['Projects', BriefcaseBusiness], ['Inquiries', Inbox],
  ['Clients', Users], ['Content', FileText], ['Settings', Settings],
];

const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

function LogoMark() {
  return <Link className="admin-brand" to="/" aria-label="Codevias website"><span>CV</span><strong>codevias</strong></Link>;
}

function Metric({ label, value, change, icon: Icon, negative = false }) {
  return (
    <article className="metric-card">
      <div className="metric-head"><span>{label}</span><i><Icon size={18} /></i></div>
      <strong>{value}</strong>
      <p className={negative ? 'negative' : ''}>{negative ? <ArrowDownRight size={14} /> : <ArrowUpRight size={14} />}{change} <span>vs. last month</span></p>
    </article>
  );
}

function Overview({ onNewProject }) {
  return (
    <>
      <div className="admin-title-row">
        <div><p>Tuesday, September 22</p><h1>Good morning, Alex.</h1><span>Here’s what’s moving across Codevias today.</span></div>
        <button className="admin-primary" onClick={onNewProject}><Plus size={17} /> New project</button>
      </div>
      <section className="metrics-grid" aria-label="Business metrics">
        <Metric label="Pipeline value" value="$184.2K" change="12.8%" icon={CircleDollarSign} />
        <Metric label="Active projects" value="12" change="3 new" icon={BriefcaseBusiness} />
        <Metric label="New inquiries" value="28" change="18.4%" icon={Inbox} />
        <Metric label="Conversion rate" value="31.6%" change="2.1%" icon={Activity} negative />
      </section>
      <div className="dashboard-grid">
        <section className="dashboard-panel revenue-panel-new">
          <div className="panel-heading"><div><span>Revenue overview</span><strong>$126,400</strong></div><button>Last 6 months <ChevronDown size={14} /></button></div>
          <div className="chart-wrap" aria-label="Revenue rose from $11,000 in April to $31,000 in September">
            <div className="chart-y"><span>$40k</span><span>$30k</span><span>$20k</span><span>$10k</span><span>$0</span></div>
            <div className="bars">
              {[38, 52, 47, 68, 61, 83].map((height, index) => <div key={height}><i style={{ height: `${height}%` }}><b>{index === 5 ? '$31k' : ''}</b></i><span>{['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][index]}</span></div>)}
            </div>
          </div>
        </section>
        <section className="dashboard-panel pipeline-panel">
          <div className="panel-heading"><div><span>Sales pipeline</span><small>42 active leads</small></div><button aria-label="More pipeline options"><MoreHorizontal /></button></div>
          <div className="pipeline-ring"><div><strong>31.6%</strong><span>Won</span></div></div>
          <div className="pipeline-legend"><p><i className="qualified" />Qualified <b>18</b></p><p><i className="proposal" />Proposal <b>14</b></p><p><i className="won" />Won <b>10</b></p></div>
        </section>
      </div>
      <ProjectTable rows={projects.slice(0, 3)} />
    </>
  );
}

function ProjectTable({ rows = projects }) {
  return (
    <section className="dashboard-panel project-table-panel">
      <div className="panel-heading"><div><span>Active projects</span><small>Delivery health and milestones</small></div><button>View all <ArrowUpRight size={14} /></button></div>
      <div className="table-scroll"><table><thead><tr><th>Project</th><th>Service</th><th>Value</th><th>Progress</th><th>Status</th><th>Due</th></tr></thead><tbody>
        {rows.map(project => <tr key={project.id}><td><span className="project-avatar">{project.name.split(' ').map(word => word[0]).slice(0, 2).join('')}</span><div><b>{project.name}</b><small>{project.client} · {project.id}</small></div></td><td>{project.service}</td><td>{money(project.value)}</td><td><div className="progress-cell"><progress aria-label={`${project.name} progress`} value={project.progress} max="100" /><b>{project.progress}%</b></div></td><td><em className={`status status-${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</em></td><td>{project.due}</td></tr>)}
      </tbody></table></div>
    </section>
  );
}

function ProjectsView({ onNewProject }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const filtered = projects.filter(project => (status === 'All' || project.status === status) && `${project.name} ${project.client}`.toLowerCase().includes(query.toLowerCase()));
  return <><div className="admin-title-row"><div><p>Delivery</p><h1>Projects</h1><span>Track scope, progress, and project health.</span></div><button className="admin-primary" onClick={onNewProject}><Plus size={17} /> New project</button></div><div className="admin-toolbar"><label><Search size={16} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects…" /></label><select aria-label="Filter projects by status" value={status} onChange={event => setStatus(event.target.value)}><option>All</option><option>In progress</option><option>Review</option><option>Completed</option></select></div><ProjectTable rows={filtered} /></>;
}

function InquiriesView() {
  const [items, setItems] = useState(inquiries);
  const markReviewed = index => setItems(current => current.filter((_, itemIndex) => itemIndex !== index));
  return <><div className="admin-title-row"><div><p>Growth</p><h1>New inquiries</h1><span>Qualify new opportunities while they are warm.</span></div></div><section className="dashboard-panel inquiry-list">{items.length ? items.map((item, index) => <article key={`${item.name}-${item.company}`}><span className="inquiry-avatar">{item.name[0]}</span><div className="inquiry-main"><b>{item.name} <small>{item.company}</small></b><p>{item.service} · {item.budget}</p></div><em className={item.priority === 'High' ? 'priority-high' : ''}>{item.priority}</em><span>{item.age}</span><button onClick={() => markReviewed(index)}><Check size={15} /> Reviewed</button></article>) : <div className="empty-state"><Check size={28} /><h2>Inbox zero</h2><p>Every inquiry has been reviewed.</p></div>}</section></>;
}

function ComingSoon({ title }) {
  return <div className="placeholder-panel"><Sparkles size={28} /><h1>{title}</h1><p>This workspace is ready for your live business data and team workflows.</p><button className="admin-primary">Configure workspace</button></div>;
}

function NewProjectModal({ onClose }) {
  const [saved, setSaved] = useState(false);
  return <div className="modal-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}><dialog className="admin-modal" open aria-labelledby="new-project-title"><button className="modal-close" onClick={onClose} aria-label="Close"><X /></button>{saved ? <div className="modal-success"><span><Check /></span><h2>Project created</h2><p>The new workspace is ready for planning.</p><button className="admin-primary" onClick={onClose}>Done</button></div> : <><p>New workspace</p><h2 id="new-project-title">Create a project</h2><form onSubmit={event => { event.preventDefault(); setSaved(true); }}><label>Project name<input required placeholder="e.g. Atlas commerce platform" /></label><label>Client<input required placeholder="Client or company" /></label><div><label>Service<select><option>Web platform</option><option>Mobile app</option><option>Product design</option><option>Custom software</option></select></label><label>Budget<input type="number" min="0" placeholder="25000" /></label></div><label>Target date<input type="date" /></label><button className="admin-primary">Create project <ArrowUpRight size={16} /></button></form></>}</dialog></div>;
}

export default function AdminDashboard() {
  const [active, setActive] = useState('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const content = useMemo(() => {
    if (active === 'Overview') return <Overview onNewProject={() => setModalOpen(true)} />;
    if (active === 'Projects') return <ProjectsView onNewProject={() => setModalOpen(true)} />;
    if (active === 'Inquiries') return <InquiriesView />;
    return <ComingSoon title={active} />;
  }, [active]);
  useEffect(() => {
    document.title = `${active} — Codevias Admin`;
    window.scrollTo(0, 0);
    const robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute('content');
    robots?.setAttribute('content', 'noindex,nofollow,noarchive');
    return () => robots?.setAttribute('content', previous || 'index,follow');
  }, [active]);
  return (
    <div className="admin-app">
      <aside className={`admin-sidebar ${mobileOpen ? 'is-open' : ''}`}><LogoMark /><button className="admin-sidebar-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></button><nav aria-label="Dashboard navigation">{navItems.map(([label, Icon]) => <button key={label} className={active === label ? 'active' : ''} onClick={() => { setActive(label); setMobileOpen(false); }}><Icon size={18} />{label}{label === 'Inquiries' && <b>4</b>}</button>)}</nav><div className="admin-help"><CircleHelp size={20} /><strong>Need a hand?</strong><p>Read the workspace guide or contact support.</p><button>Open help center</button></div><Link className="back-to-site" to="/"><ArrowUpRight size={16} /> View website</Link></aside>
      {mobileOpen && <button className="sidebar-scrim" onClick={() => setMobileOpen(false)} aria-label="Close navigation" />}
      <div className="admin-main"><header className="admin-topbar"><button className="admin-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></button><div className="admin-search"><Search size={17} /><input placeholder="Search projects, clients, tasks…" aria-label="Search dashboard" /><kbd>⌘ K</kbd></div><div className="admin-actions"><button aria-label="Calendar"><CalendarDays size={19} /></button><button aria-label="Notifications" className="notification"><Bell size={19} /><i /></button><span className="admin-user">AM</span><div><b>Alex Morgan</b><small>Administrator</small></div><ChevronDown size={14} /></div></header><main className="admin-content">{content}</main></div>
      {modalOpen && <NewProjectModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
