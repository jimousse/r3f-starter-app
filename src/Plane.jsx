import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import planeVertexShader from './shaders/plane/vertex.glsl';
import planeFragmentShader from './shaders/plane/fragment.glsl';

// https://github.com/pmndrs/drei#shadermaterial
const PlaneMaterial = shaderMaterial(
  {},
  planeVertexShader,
  planeFragmentShader
);

extend({ PlaneMaterial });

export default function Plane() {
  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry />
      <planeMaterial />
    </mesh>
  );
}
