'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import Works from '@/components/home/Works';
import Footer from '@/components/shared/Footer';
import Skills from '@/components/shared/Skills';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
    </>
  );
}
