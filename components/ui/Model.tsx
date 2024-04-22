// import React, { useRef } from 'react';
// import {
//   useGLTF,
//   Text,
//   MeshTransmissionMaterial,
//   Text3D,
//   Center,
// } from '@react-three/drei';
// import { ThreeElements, useFrame, useThree } from '@react-three/fiber';
// import { Leva, useControls } from 'leva';
// import {
//   BufferGeometry,
//   Material,
//   Mesh,
//   NormalBufferAttributes,
//   Object3DEventMap,
// } from 'three';

// const Model = () => {
//   const mesh = useRef<Mesh<
//     BufferGeometry<NormalBufferAttributes>,
//     Material | Material[],
//     Object3DEventMap
//   > | null>(null);
//   const { nodes } = useGLTF('media/torrus.glb');
//   const { viewport } = useThree();
//   useFrame(() => {
//     mesh.current && (mesh.current.rotation.x += 0.02);
//   });

//   const materialProps = useControls({
//     thickness: { value: 0.3, min: 0, max: 3, step: 0.05 },
//     roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },
//     transmission: { value: 0.8, min: 0, max: 1, step: 0.1 },
//     ior: { value: 1.3, min: 0, max: 3, step: 0.1 },
//     chromaticAberration: { value: 0.02, min: 0, max: 1 },
//     backside: { value: true },
//   });

//   return (
//     <group scale={viewport.width / 3.5}>
//       {/* <Text
//         font={'/Hagrid-Text-Extrabold-trial.ttf'}
//         position={[0, 0, -1]}
//         fontSize={1}
//         color='#222222'
//         anchorX='center'
//         anchorY='middle'
//       >
//         Hello
//       </Text> */}
//       <Center position={[0, 0, -1]}>
//         <Text3D size={0.5} font={'/Hagrid_Text_Trial_Bold.json'}>
//           Hello
//           {/* <meshNormalMaterial colorWrite /> */}
//           {/* <MeshReflectorMaterial
//             mirror={0.2}
//             metalness={0.21}
//             color={'#383838'}
//             roughness={0.528}
//             emissive={'#212121'}
//           /> */}
//           {/* <meshPhongMaterial
//             color={'#F79675'}
//             emissive={'#F79675'}
//             specular={'#000000'}
//             shininess={70}
//             reflectivity={1}
//             opacity={0}
//             refractionRatio={1}
//             map={null}
//           /> */}
//           {/* <ambientLight color={'#39566a'} intensity={7} /> */}
//         </Text3D>
//       </Center>
//       <Leva hidden />
//       <mesh ref={mesh} {...nodes.Torus002}>
//         <MeshTransmissionMaterial {...materialProps} map={null} />
//       </mesh>
//     </group>
//   );
// };

// export default Model;
// // Everthing that runs in the model is run on webGL, this is why we can't have div as we don't have div inside webGL
