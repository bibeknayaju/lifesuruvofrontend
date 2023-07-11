import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <div className="text-white h-40 py-4 bottom-0 w-full bg-black text-center">
    //   <div className="bg-transparent">
    //     <h4 className="bg-transparent text-white">©2023 Bibek Nayaju</h4>
    //   </div>
    //   <div className="bg-transparent">
    //     <h2 className="bg-transparent">
    //       Powered by Bibek Nayaju - Work Hard Stay Humble 🚀
    //     </h2>
    //   </div>
    // </div>
    <footer className="bg-white rounded-lg shadow m-4 ">
      <div className="w-full max-w-none mx-auto p-4 md:py-8 ">
        <div className="max-w-6xl m-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to={"/"} className="flex gap-2 items-center mb-4 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>

              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                lifesuruvo
              </span>
            </Link>
            <ul className="flex flex-wrap items-center gap-6 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/bibeknayajushrestha"}>
                  Facebook
                </Link>
              </li>
              <li>
                <Link target="_blank" to={"https://github.com/bibeknayaju"}>
                  Github
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/in/bibeknayaju/"}>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"https://www.pinterest.com/bibeknayaju/"}>
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        </div>

        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a
            href="https://bibeknayaju.com.np/"
            target="_blank"
            className="hover:underline"
            rel="noreferrer">
            Bibek Nayaju™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
