'use client';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
// @ts-ignore
import { SplitText } from 'gsap/SplitText';
import useOnScreen from './useOnScreen';
import gsap from 'gsap';

export function useSplitText(
  element: React.RefObject<HTMLDivElement>,
  type: 'lines' | 'chars' | 'words',
  easeOptions: Pick<
    GSAPTweenVars,
    'duration' | 'stagger' | 'ease' | 'delay'
  > = {
    duration: 0.75,
    stagger: 0.1,
    ease: 'power4.out',
  }
) {
  const splitLinesRef = useRef<null | Element[]>(null);
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(element);

  useGSAP(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useGSAP(() => {
    const split = new SplitText(element.current, { type });
    gsap.set(split[type], { y: 100, opacity: 0 });

    splitLinesRef.current = split[type];
  }, [type, element]);

  useGSAP(() => {
    if (reveal) {
      gsap.to(splitLinesRef.current, {
        y: 0,
        opacity: 1,
        ...easeOptions,
      });
    }
  }, [reveal, easeOptions]);
}
