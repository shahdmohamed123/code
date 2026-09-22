import { motion } from 'framer-motion';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const posts = [
  {
    category: 'Product strategy',
    date: 'Sep 12, 2026',
    readTime: '6 min read',
    title: 'How to build an AI-ready product without rebuilding twice',
    excerpt: 'A practical approach to product architecture, data readiness, and human-centered workflows that can evolve with AI.',
  },
  {
    category: 'Design systems',
    date: 'Aug 28, 2026',
    readTime: '5 min read',
    title: 'A practical design system for faster product teams',
    excerpt: 'How shared rules, reusable components, and clear ownership turn consistency into real delivery speed.',
  },
  {
    category: 'Engineering',
    date: 'Aug 10, 2026',
    readTime: '7 min read',
    title: 'From MVP to scalable platform: the decisions that matter',
    excerpt: 'The technical choices worth making early—and the ones that can safely wait until your product proves demand.',
  },
];

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="shell">
        <div className="blog-heading">
          <SectionHeader label="Codevias insights" title="Ideas for products built to last." subtitle="Straightforward thinking on product strategy, design, engineering, and sustainable digital growth." />
          <a className="blog-heading-link" href="#contact">Suggest a topic <ArrowUpRight size={16} /></a>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <motion.article className={index === 0 ? 'blog-card blog-card--featured' : 'blog-card'} key={post.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .08 }}>
              <div className="blog-card-top"><span>{post.category}</span><b>0{index + 1}</b></div>
              <div className="blog-card-meta"><time>{post.date}</time><span><Clock3 size={13} /> {post.readTime}</span></div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#contact" aria-label={`Discuss ${post.title}`}>Discuss this insight <ArrowUpRight size={16} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
