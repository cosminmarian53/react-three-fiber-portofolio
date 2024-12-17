import avatar from "../assets/grid1.png";
import grid2 from "../assets/grid2.png"
import grid3 from "../assets/grid3.png"
import hobbies from "../assets/hobbies.png"
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={avatar} className="w-full sm:h-[276px] h-fit object-contain" alt="grid1"/>
                        <div>
                            <p className="grid-headtext">Hi, I&#39;m Cosmin!</p>
                            <p className="grid-subtext">Engineering student passionate about building innovative web and
                                Web3 dApps. Skilled in React.js, Node.js, and Solidity, I create impactful blockchain
                                solutions. Currently working on exciting dApps and full-stack projects—always eager to
                                share, learn, and grow!</p>
                        </div>
                    </div>
                </div>


                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={grid2} className="w-full sm:h-[276px] h-fit object-contain" alt="grid2"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in blockchain development, working with Solidity
                                and Rust to build robust smart contracts. My expertise extends to creating innovative
                                decentralized applications (dApps) with modern frameworks and tools like React,
                                TypeScript, and Tailwind CSS. With a passion for secure and efficient blockchain
                                solutions, I bring a full-stack approach to decentralized ecosystems. </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{lat: 40, lng: -100, text: 'Brass, Romania', color: 'white', size: 15}]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Romania and open to remote work
                                worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>


                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container">
                        <img src={grid3} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I’m driven by the challenge of solving problems and creating impactful solutions through
                                code. Programming is not just a career for me—it’s a craft I take pride in. I’m always
                                eager to explore new technologies, enhance my expertise, and deliver work that’s both
                                innovative and reliable.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[226px] h-fit flex justify-center items-center">
                            <img src={hobbies} alt="hobbies"
                                 className="w-1/2 h-1/2"/>
                        </div>
                        <div>
                            <p className="grid-headtext">Hobbies and Passions</p>
                            <p className="grid-subtext">
                                Outside of coding, I enjoy playing guitar, exploring history, philosophy, and mythology,
                                and reading thought-provoking literature. Cooking and fitness help me stay balanced,
                                combining creativity with discipline. These interests reflect my curiosity and drive for
                                continuous growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;