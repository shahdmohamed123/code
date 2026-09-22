import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';

const initial = { name: '', company: '', email: '', phone: '', industry: '', service: '', budget: '', timeline: '', description: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const update = event => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = event => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.service) next.service = 'Please choose a service.';
    if (!form.description.trim()) next.description = 'Tell us a little about your project.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('loading');
    window.setTimeout(() => { setStatus('success'); setForm(initial); }, 900);
  };

  return (
    <section className="contact section" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy"><span className="section-number">Start a conversation</span><h2>Let&apos;s build<br />something.</h2><p>Tell us what you&apos;re working on. We&apos;ll turn the moving parts into a clear product path.</p><div><span>01</span><p><b>Share the idea</b>Give us the context, goals, and challenges.</p></div><div><span>02</span><p><b>Get a clear next step</b>We&apos;ll review it and shape the right direction.</p></div></div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-grid">
            <label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your name" aria-invalid={!!errors.name} />{errors.name && <small>{errors.name}</small>}</label>
            <label>Company name<input name="company" value={form.company} onChange={update} placeholder="Company or brand" /></label>
            <label>Email<input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" aria-invalid={!!errors.email} />{errors.email && <small>{errors.email}</small>}</label>
            <label>Phone<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+20 000 000 0000" /></label>
            <label>Industry<input name="industry" value={form.industry} onChange={update} placeholder="Your industry" /></label>
            <label>Required service<select name="service" value={form.service} onChange={update} aria-invalid={!!errors.service}><option value="">Choose a service</option><option>Web Development</option><option>Mobile App</option><option>UI/UX Design</option><option>Custom Software</option><option>Digital Marketing</option></select>{errors.service && <small>{errors.service}</small>}</label>
            <label>Budget range<select name="budget" value={form.budget} onChange={update}><option value="">Select a range</option><option>$2k – $5k</option><option>$5k – $15k</option><option>$15k – $30k</option><option>$30k+</option></select></label>
            <label>Expected timeline<select name="timeline" value={form.timeline} onChange={update}><option value="">Select timeline</option><option>As soon as possible</option><option>1 – 2 months</option><option>3 – 6 months</option><option>Flexible</option></select></label>
            <label className="form-wide">Project description<textarea name="description" value={form.description} onChange={update} placeholder="What are you hoping to build, improve, or solve?" rows="5" aria-invalid={!!errors.description} />{errors.description && <small>{errors.description}</small>}</label>
          </div>
          <button className="button submit-button" disabled={status === 'loading'}>{status === 'loading' ? <><LoaderCircle className="spinner" size={18} /> Sending inquiry...</> : <>Send project inquiry <ArrowRight size={18} /></>}</button>
          <AnimatePresence>{status === 'success' && <motion.output className="form-success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><CheckCircle2 size={18} /> Thanks! Your project inquiry has been received.</motion.output>}</AnimatePresence>
        </form>
      </div>
    </section>
  );
}
