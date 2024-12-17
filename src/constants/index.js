import spotlight1 from "../assets/spotlight1.png";
import spotlight2 from "../assets/spotlight2.png";
import spotlight3 from "../assets/spotlight3.png";
import spotlight4 from "../assets/spotlight4.png";
import projectLogo1 from "../assets/project-logo1.png";
import projectLogo2 from "../assets/project-logo2.png";
import projectLogo3 from "../assets/project-logo3.png";
import projectLogo4 from "../assets/project-logo4.png";
import react from "../assets/react.svg";
import tailwindcss from "../assets/tailwindcss.png";
import typescript from "../assets/typescript.png";
import solidity from "../assets/solidity.svg";
import nextjs from "../assets/next-js.webp";
import bootstrap from "../assets/bootstrap.svg";
import rust from "../assets/rust.png";
import javascript from "../assets/javascript.png";


export const navLinks = [

    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'Aliens Vs Robots - NFT Arcade Game',
        desc: 'Aliens Vs Robots is an innovative NFT arcade game that combines the thrill of gaming with the excitement of blockchain technology. Players can collect, trade, and battle with unique NFT characters, each with its own set of abilities and attributes.',
        subdesc:
            'Built as a project during my time as a trainee at IBM, using ReactJS, Tailwind CSS and Solidity, Aliens Vs Robots is a testament to my passion for gaming and blockchain technology. It leverages the latest in blockchain technology to create a unique gaming experience that is both fun and rewarding.',
        href: 'https://cosminmarian53.github.io/Aliens-Vs-Robots/',
        texture: '../textures/project/project1.mp4',
        logo: projectLogo1,
        logoStyle: {
            backgroundColor: '#1e2a16',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: spotlight1,
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: react,
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: tailwindcss,
            },
            {
                id: 3,
                name: 'Javacript',
                path: javascript,
            },
            {
                id: 4,
                name: 'Solidity',
                path: solidity,
            },
        ],
    },
    {
        title: 'Style Design - Furniture Presentation App',
        desc: 'Style Design is a cutting-edge furniture presentation app that allows users to visualize and customize furniture in real-time. It features a wide range of furniture models, materials, and textures, enabling users to create their dream living spaces.',
        subdesc:
            'Developed using React.js and Bootstrap CSS, Style Design is a testament to my passion for design and technology. It leverages the latest in web development to create a seamless and immersive user experience that is both functional and visually stunning.',
        href: 'https://style-design-uni-project.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: projectLogo2,
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: spotlight2,
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: react,
            },
            {
                id: 2,
                name: 'BootstrapCSS',
                path: bootstrap,
            },
            {
                id: 3,
                name: 'Javacript',
                path: javascript,
            },
        ],
    },
    {
        title: 'XNFTfy - Wallet-Agnostic Compressed NFT Platform',
        desc: 'XNFTfy is a revolutionary wallet-agnostic compressed NFT platform that allows users to mint, trade, and collect NFTs with ease. It features a user-friendly interface, seamless integration with popular wallets, and a wide range of NFT categories.',
        subdesc:
            'Developed during my time as an intern at SkyTrade, using Next.js, Tailwind CSS, and Solidity for some functionalities, XNFTfy is a testament to my passion for blockchain technology and decentralized applications. It leverages the latest in blockchain technology to create a secure and efficient NFT platform that is both user-friendly and scalable.',
        href: 'https://github.com/cosminmarian53/cNFT-dapp',
        texture: '/textures/project/xnftfy-video.mp4',
        logo: projectLogo3,
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: spotlight3,
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: nextjs,
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: tailwindcss,
            },
            {
                id: 3,
                name: 'TypeScript',
                path: typescript,
            },
        ],
    },
    {
        title: 'Solana Notes - Decentralized Note-Taking App',
        desc: 'Solana Notes is a decentralized note-taking app that allows users to create, store, and share notes securely on the Solana blockchain. It features end-to-end encryption, multi-device sync, and a user-friendly interface, making it the perfect tool for managing notes on the go.',
        subdesc:
            'Built with React.js, Tailwind CSS, and Rust, Solana Notes is a testament to my passion for blockchain technology and decentralized applications. It leverages the latest in blockchain technology to create a secure and efficient note-taking app that is both user-friendly and scalable.',
        href: 'https://solana-notes.vercel.app/',
        texture: '/textures/project/project4.mp4',
        logo: projectLogo4,
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: spotlight4,
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: react,
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: tailwindcss,
            },
            {
                id: 3,
                name: 'TypeScript',
                path: typescript,
            },
            {
                id: 4,
                name: 'Rust',
                path: rust,
            }
        ],
    },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        rustLogoPosition: isMobile ? [2.3, -7, 2.9] : isTablet ? [5.3, -7, 2.9] : [9.5, -4.7, 2.9],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-10, -15, -10] : isMobile ? [-15, -10, 0] : isTablet ? [-15, -13, -10] : [-25, -18, -10],
        ethereumLogoPosition: isSmall ? [-3, 4, 0] : isMobile ? [-5, 4, 0] : isTablet ? [-6, 3, 0] : [-12, 3, 0],
        solanaLogoPosition: isSmall ? [-3.5, -2, 4] : isMobile ? [-2, 6, 0] : isTablet ? [-7, -2, 0] : [-12, -2, 0],
        javascriptLogoPosition: isSmall ? [3, -2, 0] : isMobile ? [2.7, -2, 2.7] : isTablet ? [5, -2, 2.7] : [10, -0.5, 2.7],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];