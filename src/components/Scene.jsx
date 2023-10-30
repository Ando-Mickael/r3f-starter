import { Environment, OrbitControls, Stats } from '@react-three/drei';
import RotateCube from './RotateCube';

export default function Scene() {
    return (
        <>
            <Stats />
            <OrbitControls />
            <Environment preset='sunset' />
            <RotateCube />
        </>
    );
}