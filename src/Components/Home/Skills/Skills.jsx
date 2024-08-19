import { Fade} from 'react-awesome-reveal';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaNodeJs, } from 'react-icons/fa';
import { SiTypescript, SiJsonwebtokens, SiTailwindcss, SiNextdotjs, SiMongodb, SiFirebase, SiRedux, SiAstro, SiFramer, SiExpress } from 'react-icons/si';


const Skills = () => {
    return (
        <section id="skills" className=" h-fit  bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-stone-900 dark:to-neutral-900 py-10 lg:py-60 ">
            <div className="p-6 container mx-auto">
                <Fade delay={1e3} cascade damping={1e-1} className='text-center'>
                    <h2 className="text-7xl text-hello-10 font-mono font-bold pb-10 ">Skills </h2>
                    <p className='font-mono text-lemon-20 font-bold pb-10'>Programming Languages, Frameworks, Libraries, Tools, and Technologies I&apos;m working on.</p>
                </Fade>
                <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-5 md:px-0 gap-10">
                    <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <FaHtml5
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    HTML
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="HTML5"
                                        >
                                            HTML5
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <FaCss3Alt
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    CSS
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="CSS3"
                                        >
                                            CSS3
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <FaJs
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    JavaScript
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="JavaScript"
                                        >
                                            JavaScript
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiTypescript
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    TypeScript
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="TypeScript"
                                        >
                                            TypeScript
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <FaReact
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    React
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="React JS"
                                        >
                                            React JS
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiNextdotjs
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Next.js
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Next.js"
                                        >
                                            Next.js
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiTailwindcss
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Tailwind CSS
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Tailwind CSS"
                                        >
                                            Tailwind CSS
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiMongodb
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    MongoDB
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="MongoDB"
                                        >
                                            MongoDB
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <FaNodeJs
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Node.js
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Node.js"
                                        >
                                            Node.js
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiFirebase
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Firebase Auth
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Firebase Authentication"
                                        >
                                            Firebase Authentication
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiRedux
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Redux Toolkit
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Redux Toolkit"
                                        >
                                            Redux Toolkit
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiAstro
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Astro
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Astro"
                                        >
                                            Astro
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiFramer
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Framer Motion
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Framer Motion"
                                        >
                                            Framer Motion
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiExpress
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Express.js
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Express.js"
                                        >
                                            Express.js
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <FaSass
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    Sass
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Sass"
                                        >
                                            Sass
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade direction='left' delay={1e3} cascade damping={1e-1} >
                        <div className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300 bg-gradient-to-l from-white to-zinc-50 dark:bg-gradient-to-l dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 select-none group">
                            <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-xl rotate-45 duration-200">
                                <SiJsonwebtokens
                                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                                    aria-hidden="true"
                                />
                            </span>
                            <div className="p-4 rounded-2xl w-full">
                                <h6 className="text-md font-semibold text-zinc-800 dark:text-zinc-300">
                                    JWT
                                </h6>
                                <div className="grid grid-cols-5 gap-2 items-center">
                                    <div className="col-span-3">
                                        <h5
                                            className="text-zinc-400 dark:text-zinc-400 truncate"
                                            title="Express.js"
                                        >
                                            Encryption tool
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Skills;
