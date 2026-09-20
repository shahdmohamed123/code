import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import ProblemSolution from '../components/ProblemSolution';
import WhyCodevias from '../components/WhyCodevias';
import Process from '../components/Process';
import CRMShowcase from '../components/CRMShowcase';
import Projects from '../components/Projects';
import Technology from '../components/Technology';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <ProblemSolution />
      <WhyCodevias />
      <Process />
      <CRMShowcase />
      <Projects />
      <Technology />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
