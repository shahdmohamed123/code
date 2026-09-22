import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Process from '../components/Process';
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SocialRail from '../components/SocialRail';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Codevias — Digital products built for growth';
  }, []);

  return (
    <main>
      <Navbar />
      <SocialRail />
      <Hero />
      <Intro />
      <Services />
      <Process />
      <Blog />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
