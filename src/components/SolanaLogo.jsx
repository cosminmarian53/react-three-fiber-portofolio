/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Jeremy.Guyet (https://sketchfab.com/Jeremy.Guyet)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/solana-logo-ai-generated-bb1493a7ff9d4555b86f2909ebe013f0
Title: Solana Logo - AI GENERATED
*/

import {Float, useGLTF} from '@react-three/drei'

export function SolanaLogo(props) {
    const {nodes, materials} = useGLTF('/models/solana_logo_-_ai_generated.glb')
    return (
        <Float floatIntensity={2}>
            <group {...props} dispose={null}>
                <mesh
                    geometry={nodes.Object_5.geometry}
                    material={materials['Scene_-_Root']}
                    rotation={[0, 0, 0]}
                />
            </group>
        </Float>
    )
}

export default SolanaLogo;
useGLTF.preload('/models/solana_logo_-_ai_generated.glb')