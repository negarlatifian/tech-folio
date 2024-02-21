import React, { JSXElementConstructor, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const magnetic = useRef<HTMLElement | null>(null);

  useEffect(() => {
    console.log(children);
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    magnetic.current?.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const height = magnetic.current?.getBoundingClientRect()?.height ?? 0;
      const width = magnetic.current?.getBoundingClientRect()?.width ?? 0;
      const left = magnetic.current?.getBoundingClientRect()?.left ?? 0;
      const top = magnetic.current?.getBoundingClientRect()?.top ?? 0;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    });
    magnetic.current?.addEventListener('mouseleave', (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  // return (
  //     React.cloneElement( children, {ref:magnetic})
  //     )
  return React.cloneElement(
    children as React.ReactElement<any, string | JSXElementConstructor<any>>,
    { ref: magnetic }
  );
}
