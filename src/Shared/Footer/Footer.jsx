import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <NavLink to='/' id="logo" aria-label="logo" aria-current="page" className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1" >
                     {/* <img src={logo} alt="" /> */}

                        <span className="text-4xl font-bold text-hello-10 hover:text-lemon-20  transition duration-300 font-play">Shahriar</span>

                    </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
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
                Follow us
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="https://Shahriar.com/" className="hover:underline">
              Shahriar™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
