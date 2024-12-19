import {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import RustLogo from "../components/RustLogo.jsx";
import EthereumLogo from "../components/EthereumLogo.jsx";
import SolanaLogo from "../components/SolanaLogo.jsx";
import JavascriptLogo from "../components/JavascriptLogo.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import brand from "../assets/brand-logo.png";

const Hero = () => {
    // const controls = useControls(
    //     "RustLogo", {
    //         positionX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         positionY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         positionZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         rotationX: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         rotationY: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         rotationZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         scale: {
    //             value: 1,
    //             min: 0.1,
    //             max: 10,
    //         },
    //     }
    // );
    const isSmall = useMediaQuery({maxWidth: 640});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl text-white text-center font-generalsans">Hello! I'm Cosmin <span
                    className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building the future today!</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 25]}/>
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom scale={sizes.deskScale}

                                        position={sizes.deskPosition}
                                        rotation={[0, -Math.PI, 0]}/>
                        </HeroCamera>
                        <group>
                            <RustLogo position={sizes.rustLogoPosition}
                                      rotation={[
                                          -4.8,
                                          -3.8,
                                          0.2,
                                      ]}/>
                            <Rings position={sizes.ringPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <EthereumLogo position={sizes.ethereumLogoPosition}/>
                            <SolanaLogo position={sizes.solanaLogoPosition}/>
                            {/*    add the controls to the js logo component*/}
                            <JavascriptLogo position={sizes.javascriptLogoPosition}
                                            rotation={[
                                                0,
                                                -3,
                                                -6.2,
                                            ]}
                                            scale={10}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Have a look around!" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    );
}

export default Hero;