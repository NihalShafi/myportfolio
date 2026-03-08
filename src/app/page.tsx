import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
