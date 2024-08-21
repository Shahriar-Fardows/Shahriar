import { Fade, Slide } from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";

const Part_3 = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap justify-around items-center py-16 lg:py-20">

            <div className="px-5 lg:w-1/2">
                <div className="flex gap-5 items-center">
                    <FaLaptopCode className="text-5xl text-hello-10" />
                    <h1 className="text-xl font-bold font-play text-hello-10"> Learning Journey</h1>
                </div>
                <Fade >
                    <p className="  font-mono py-2">As a skilled web developer, I specialize in core technologies such as HTML5, CSS3, Bootstrap, and JavaScript (including ES6). I am proficient in modern frameworks and libraries, including  <span className=" font-bold f text-hello-10">React JS, Next.js, TypeScript, and Astro.</span>   My experience extends to back-end development with Node JS, Express JS, and databases like MongoDB and PostgreSQL. I am also well-versed in Firebase Authentication and JWT for secure user management.
                    </p>
                </Fade>
                <Fade >
                    <p className="  font-mono py-2">In addition to my technical skills, I am familiar with  <span className=" font-bold f text-hello-10">React Native, Redux, Stripe, Tailwind CSS, and Material UI</span> React Native, Redux, Stripe, Tailwind CSS, and Material UI. I regularly use tools such as Git, VS Code, Figma, Jira, Vercel, Heroku, Netlify, and Chrome Dev Tools. I am passionate about creating scalable, high-quality web applications and continuously exploring new technologies to stay at the forefront of web development.
                    </p>
                </Fade>
            </div>
            <div className="px-20 py-5 lg:w-1/2">
                <Slide direction="right" delay={0.2e3} cascade damping={1e-1}>
                    <div className="flex gap-5 items-center pb-5 lg:pb-16 ">
                        <PiBagSimpleFill className="text-5xl text-hello-10" />
                        <h2 className="text-2xl font-bold font-play text-hello-10">Experience</h2>
                    </div>
                    <div className="flex flex-wrap-reverse md:flex-nowrap justify-around items-center">
                        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-hello-30 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:text-hello-30">
                                    <svg className="w-3.5 h-3.5 text-hello-30 dark:text-hello-30" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight">Teachfosys - Software Developer</h3>
                                <p className="text-sm">Gained over 1 year of industrial experience developing web applications using modern technologies and collaborating with teams to deliver quality projects.</p>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                    <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight">Crypzoo - Current Project</h3>
                                <p className="text-sm">Currently working on Crypzoo, a platform for currency exchange and cryptocurrency trading, focusing on React development and integrating new technologies.</p>
                            </li>
                        </ol>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Part_3;