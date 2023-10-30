import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function RotateCube() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  }, []);

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
