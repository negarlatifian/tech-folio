'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';

const Scene = () => {
  return (
    <Canvas>
      <ambientLight color={'#39566a'} intensity={7} />
      {/* <directionalLight intensity={3} position={[0, 3, 2]} /> */}
      <Environment preset='city' />
      <Model />
    </Canvas>
  );
};

export default Scene;
