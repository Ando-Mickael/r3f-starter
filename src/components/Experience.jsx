import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Experience = () => {
    const cubeRef = useRef();

    useFrame(() => {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
    }, []);

    return (
        <>
            <OrbitControls />
            <mesh ref={cubeRef}>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    );
}

export default Experience;