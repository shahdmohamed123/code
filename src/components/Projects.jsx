import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag, Smartphone, Workflow } from 'lucide-react';
import { projects } from '../data/content';
import SectionHeader from './SectionHeader';

function ProjectVisual({ type }) {
  const icon = type === 'commerce' ? <ShoppingBag /> : type === 'mobile' ? <Smartphone /> : <Workflow />;
  return <div className={`project-visual project-visual--${type}`}>{icon}<div className="pv-window"><span /><span /><span /><i /><i /><i /></div></div>;
}

export default function Projects() {
  return (
    <section className="projects section" id="work">
      <div className="shell">
        <SectionHeader label="Selected concepts" title="What we can build." subtitle="Product thinking made tangible through interfaces, systems, and useful digital experiences." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index % 2 * .08 }}>
              <ProjectVisual type={project.visual} />
              <div className="project-copy"><span>{project.type}</span><h3>{project.title}</h3><p>{project.text}</p><div className="project-tags">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</div><a href="#contact">View project <ArrowUpRight size={17} /></a></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
