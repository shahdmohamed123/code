import { Braces, ChartNoAxesCombined, Code2, Layers3, Megaphone, PenTool, Rocket, Search, ShieldCheck, Smartphone, Sparkles, Workflow } from 'lucide-react';

export const services = [
  { number: '01', title: 'Web Development', text: 'Fast, responsive, and scalable websites designed around your business goals.', icon: Code2, visual: 'web' },
  { number: '02', title: 'Mobile Apps', text: 'Turn your product idea into a polished mobile experience for iOS and Android.', icon: Smartphone, visual: 'mobile' },
  { number: '03', title: 'UI/UX Design', text: 'Create intuitive digital experiences that look great and make sense to your users.', icon: PenTool, visual: 'design' },
  { number: '04', title: 'Custom Software', text: 'Build systems around the way your business actually works.', icon: Workflow, visual: 'software' },
  { number: '05', title: 'Digital Marketing', text: 'Build the product, build the audience, and strengthen your digital presence.', icon: Megaphone, visual: 'marketing' },
];

export const reasons = [
  { title: 'Built Around Your Business', text: 'We do not force your workflow into a generic template.', icon: Braces },
  { title: 'Design + Technology', text: 'We combine thoughtful user experience with solid engineering.', icon: Sparkles },
  { title: 'Clear Process', text: 'Every project follows a structured path from discovery to launch.', icon: ShieldCheck },
  { title: 'Built to Grow', text: 'We create foundations that can evolve with your business.', icon: ChartNoAxesCombined },
];

export const processSteps = [
  ['01', 'Discover', 'Understand your business, users, goals, and requirements.', Search],
  ['02', 'Plan', 'Define the scope, architecture, features, and roadmap.', Layers3],
  ['03', 'Design', 'Create the user experience and visual direction.', PenTool],
  ['04', 'Develop', 'Build the product using modern technologies.', Code2],
  ['05', 'Test', 'Validate performance, functionality, and usability.', ShieldCheck],
  ['06', 'Launch', 'Deploy, monitor, and improve the product.', Rocket],
];

export const projects = [
  { title: 'Codevias CRM', type: 'Internal product concept', text: 'A unified workspace for leads, deals, clients, projects, tasks, and sales operations.', tags: ['React', 'Laravel', 'MySQL'], visual: 'crm' },
  { title: 'Commerce OS', type: 'E-commerce concept', text: 'A refined storefront paired with a focused management experience for modern sellers.', tags: ['React', 'APIs', 'Payments'], visual: 'commerce' },
  { title: 'Business Flow', type: 'Management system concept', text: 'A connected operational dashboard designed to replace fragmented manual workflows.', tags: ['Dashboard', 'Automation', 'Reports'], visual: 'business' },
  { title: 'Pocket Finance', type: 'Mobile app concept', text: 'A clear, approachable mobile product experience for daily financial decisions.', tags: ['Flutter', 'UI/UX', 'Mobile'], visual: 'mobile' },
];

export const technologies = [
  ['Frontend', 'React · Vite · Next.js · Tailwind CSS'],
  ['Backend', 'Laravel · Node.js · REST APIs'],
  ['Mobile', 'Flutter'],
  ['Database', 'MySQL · PostgreSQL · MongoDB'],
  ['Infrastructure', 'Git · CI/CD · Cloud Deployment · APIs'],
];
