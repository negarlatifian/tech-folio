import React from 'react';
import Gradient from '../ui/Gradient';
import Titles from '../ui/Titles';
import ScrollIndicator from '../ui/ScrollIndicator';
import dynamic from 'next/dynamic';

// in Order to prevent problems because of the canvas being rendered on the server we use dynamic import
// for importing Canvas
// const Scene = dynamic(() => import('../ui/Scene'), {
//   ssr: false,
// });

const Hero = () => {
  return (
    <div>
      <Titles />
      <Gradient />
      <ScrollIndicator />
      {/* <Scene /> */}
    </div>
  );
};

export default Hero;
