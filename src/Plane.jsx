import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import planeVertexShader from './shaders/plane/vertex.glsl';
import planeFragmentShader from './shaders/plane/fragment.glsl';
import { useRef } from 'react';
import * as THREE from 'three';

// https://github.com/pmndrs/drei#shadermaterial
const PlaneMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  planeVertexShader,
  planeFragmentShader
);

extend({ PlaneMaterial });

export default function Plane() {
  const planeMaterialRef = useRef();

  useFrame((state) => {
    planeMaterialRef.current.uTime = state.clock.elapsedTime;
  });

  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry />
      <planeMaterial ref={planeMaterialRef} />
    </mesh>
  );
}
