import { Link, NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border">
            <div className="mx-auto w-full  p-4 py-6 lg:py-8">
                <div className="container mx-auto md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 md:w-1/2">
                        <NavLink to='/' id="logo" aria-label="logo" aria-current="page" className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1" >
                            {/* <img src={logo} alt="" /> */}

                            <span className="text-4xl font-bold text-hello-10 hover:text-lemon-20  transition duration-300 font-play">Shahriar</span>

                        </NavLink>
                        <p className="text-gray-500 font-mono dark:text-gray-400">
                            Self-driven, focused, and dedicated Web Developer with over 2 years of experience,  including 1+ years in an industrial setting. I am passionate about coding, creating  innovative web solutions, and exploring emerging technologies. Proficient in modern  web technologies and version control systems, I am a committed team player with a  strong dedication to achieving goals. While I take a methodical approach to learning,  I am determined to deliver high-quality results with a focus on excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Explore
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        to="about"
                                        className="hover:underline "
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="projects"
                                        className="hover:underline "
                                    >
                                        Project
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Contact Me
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        to="https://github.com/Shahriar-Fardows"
                                        className="hover:underline "
                                        target='_blank'
                                    >
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://www.linkedin.com/in/shahriar-fardows/"
                                        className="hover:underline"
                                        target='_blank'
                                    >
                                        Linkedin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200  dark:border-gray-700 lg:my-8" />
                <div className="container mx-auto sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{' '}
                        
                            Shahriar™
                        
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-10">
                        <Link
                            to="https://www.facebook.com/profile.php?id=100085970036969"
                            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                            target='_blank'
                        >
                            <span className="sr-only">Facebook</span>
                            <FaFacebook className="w-5 h-5" />
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/shahriar-fardows/ "
                            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                            target='_blank'
                        >
                            <span className="sr-only">Linkedin</span>
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            to="https://github.com/Shahriar-Fardows"
                            className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                            target='_blank'
                        >
                            <span className="sr-only">Git Hub</span>
                            <FaGithub className="w-5 h-5" />
                        </Link>

                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
