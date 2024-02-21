'use client';
import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from './Magnetic';
import Link from 'next/link';

const Button = ({
  children,
  backgroundColor = '',
  href,
  target,
  ...attributes
}: {
  children: any;
  backgroundColor: string;
  href: string;
  attributes?: React.HTMLAttributes<HTMLButtonElement>;
  className?: string;
  target?: string;
}) => {
  const circle = useRef(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: number | null | NodeJS.Timeout | string = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter'
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit'
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <Link
        className={styles.roundedButton}
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
        href={href}
        rel='noopener noreferrer'
        target={target}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor: backgroundColor }}
          className={styles.circle}
        ></div>
      </Link>
    </Magnetic>
  );
};

export default Button;
