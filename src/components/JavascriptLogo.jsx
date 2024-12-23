/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import {Float, useGLTF} from '@react-three/drei'

export function JavascriptLogo(props) {
    const {nodes, materials} = useGLTF('/models/1.glb')
    return (
        <Float floatIntensity={2}>
            <group {...props} dispose={null}>
                <mesh

                    geometry={nodes.Cube.geometry}
                    material={materials['Material.001']}
                    position={[-0.228, 0.068, 0.043]}
                    rotation={[0, 0, 0.108]}
                    scale={[0.838, 1, 1]}
                />
                <mesh

                    geometry={nodes.Text.geometry}
                    material={materials['Material.002']}
                    position={[-0.198, 0.022, 0.057]}
                    rotation={[Math.PI / 2, 0.108, -Math.PI / 2]}
                    scale={0.099}
                />
            </group>
        </Float>
    )
}

export default JavascriptLogo;
useGLTF.preload('/models/1.glb')