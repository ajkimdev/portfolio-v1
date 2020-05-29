import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="min-w-full text-gray-700">
        <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
          <Link to="/">
            <span className="font-semibold text-sm tracking-tight md:text-lg">
              Andrew J. Kim
            </span>
          </Link>
          {/* <div className="flex flex-shrink-0 mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
          </div> */}

          <ul className="flex text-xs md:text-base">
            <li className="mr-4 md:mr-6">
              <a className="text-gray-600 hover:text-gray-800" href="/#about">
                About Me
              </a>
            </li>
            <li className="mr-4 md:mr-6">
              <a
                className="text-gray-600 hover:text-gray-800"
                href="/#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </div>
      <footer>
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm text-gray-700 md:p-8">
          <p>
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
          </p>
          <p>
            <a
              className="font-bold no-underline"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
