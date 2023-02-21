import { angleToRadians } from "../../utils/angle";
import {PerspectiveCamera} from '@react-three/drei';

export default function Three() {
    return(
        <>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color='#ffffff'/>
        </mesh>
        
        <mesh rotation={[-angleToRadians(90), 0 , 0]}>
            <planeGeometry args={[7,7]} />
            <meshStandardMaterial color='#1ea3d8' transparent opacity={0.7} />
         </mesh>
        <ambientLight args={["#ffffff", 1]} />
        </>
    )
}