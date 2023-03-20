import { useState, useEffect } from "react";
import { angleToRadians } from "../../utils/angle";
import {PerspectiveCamera, Text, Image, Text3D} from '@react-three/drei';
import {useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import * as Vermin from '../../fonts/Vermin Vibes Mert_Regular.json'

export default function NewThree() {

    useEffect(()=> {
        console.log(window.innerWidth)
    },[])

    return(
        <>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <mesh rotation={[-angleToRadians(90), 0 , 0]}>
            <planeGeometry args={[70, 70]} />
            <meshStandardMaterial color='#1ea3d8' transparent opacity={0.3} />
         </mesh>
         <mesh position={[0, 0, 0]}>
         <Text3D font={Vermin} size={0.3}>
            react
            <meshNormalMaterial />
         </Text3D>
         </mesh>
         
         <Text3D font={Vermin} size={0.3}>
            <meshNormalMaterial />
         </Text3D>
         <mesh>
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color='#1ea3d8' transparent opacity={0.8}/>
         </mesh>
         
        <ambientLight args={["#ffffff", 1]} />
        </>
    )
}