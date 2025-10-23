import { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function Home() {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // Remove the # character
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to ensure elements are rendered
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default Home;