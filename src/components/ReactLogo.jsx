/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import React, {useRef} from 'react'
import {Float, useGLTF} from '@react-three/drei'

export function ReactLogo(props) {
    const {nodes, materials} = useGLTF('/models/react.glb')
    return (
        <Float floatIntensity={1}>
            <group {...props} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.25, 0.25, 0.5 ]}
                />
            </group>
        </Float>
    )
}

export default ReactLogo;
useGLTF.preload('/models/react.glb')

