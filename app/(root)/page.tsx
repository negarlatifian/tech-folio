import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import Works from '@/components/home/Works';
import Footer from '@/components/shared/Footer';
import Skills from '@/components/shared/Skills';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
    </>
  );
}
