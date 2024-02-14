import React from 'react';
import Paragraph from './Paragraph';
import Word from './Word';

const paragraph =
  "a Full-Stack Developer with a knack for crafting  beautiful, user-friendly interfaces. My skills lie in both front-end development and design, allowing me to bring pixel-perfect interfaces to life while ensuring they're accessible to everyone. When I'm not coding, you might find me exploring the artistic side of things as a photo-based artist. Curious to see what I create? You can check out my work here";

const HeroText = () => {
  return (
    <div>
      <Paragraph value={paragraph} />
      {/* <Word value={paragraph} /> */}
    </div>
  );
};

export default HeroText;
