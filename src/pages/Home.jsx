import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Codevias — Digital products built for growth';
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Projects />
      <Process />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
