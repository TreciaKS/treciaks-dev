import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="relative h-screen text-gray-600 bg-black">
      <div className="relative flex flex-col justify-center p-10 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-purple-300 sm:text-3xl title-font">
            Projects
          </h1>
          <p className="mx-auto text-base leading-relaxed text-gray-300 lg:w-2/3">
            I like building things that work, look good, and sometimes surprise
            a little. These projects give a peek into how I think, code, and
            solve problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mx-auto mb-1 text-center sm:w-4/5 lg:grid-cols-2">
          {/* gitstation */}
          <div className="relative p-4">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                src="/photos/gitstation.png"
                fill
                sizes="100vw" />
              <div className="relative z-10 w-full px-8 py-10 transition bg-gray-900 border shadow-md opacity-0 rounded-xl border-blue-400/70 shadow-indigo-500/100 hover:opacity-95 h-[20rem]">
                <div className="absolute top-0">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/TreciaKS/git-station"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="absolute top-0 right-8">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://git-station.vercel.app/"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-8 h-8 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-400 title-font"></h2>
                <h1 className="mb-3 text-lg font-medium title-font text-gray-50">
                  Git Station
                </h1>
                <p className="leading-relaxed text-gray-300">
                  Angular 19, GitHub API, TypeScript, TailwindCSS, Responsive
                  Web Design
                </p>
              </div>
            </div>
          </div>

          {/* Stillroom */}
          <div className="relative p-4">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                src="/photos/stillroom.png"
                fill
                sizes="100vw" />
              <div className="relative z-10 w-full px-8 py-10 transition bg-gray-900 border shadow-md opacity-0 rounded-xl border-blue-400/70 shadow-indigo-500/100 hover:opacity-95 h-[20rem]">
                <div className="absolute top-0">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/TreciaKS/stillroom"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Stillroom"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="absolute top-0 right-8">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://stillroom-red.vercel.app/"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-8 h-8 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-400 title-font"></h2>
                <h1 className="mb-3 text-lg font-medium title-font text-gray-50">
                  Stillroom
                </h1>
                <p className="leading-relaxed text-gray-300">
                  NextJS (Page Routes), Groq AI, TypeScript, TailwindCSS, Framer
                  Motion, LottieFiles, NodeJS, Express, Responsive Web Design
                </p>
              </div>
            </div>
          </div>

          {/* Lorde */}
          <div className="relative p-4">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                src="/photos/lorde.png"
                fill
                sizes="100vw" />
              <div className="relative z-10 w-full px-8 py-10 transition bg-gray-900 border shadow-md opacity-0 rounded-xl border-blue-400/70 shadow-indigo-500/100 hover:opacity-95 h-[20rem]">
                <div className="absolute top-0">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/TreciaKS/lorde-fansite"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Lorde"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="absolute top-0 right-8">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://lorde-fansite.vercel.app/"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-8 h-8 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-400 title-font"></h2>
                <h1 className="mb-3 text-lg font-medium title-font text-gray-50">
                  Lorde Fansite
                </h1>
                <p className="leading-relaxed text-gray-300">
                  React, TypeScript, TailwindCSS, Framer, Responsive Web Design
                </p>
              </div>
            </div>
          </div>

          {/* Haptechs */}
          <div className="relative p-4">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                src="/photos/haptechs.png"
                fill
                sizes="100vw" />
              <div className="relative z-10 w-full px-8 py-10 transition bg-gray-900 border shadow-md opacity-0 rounded-xl border-blue-400/70 shadow-indigo-500/100 hover:opacity-95 h-[20rem]">
                <div className="absolute top-0">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/TreciaKS/haptechs"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Haptechs"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="absolute top-0 right-8">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://haptechs.vercel.app/"
                    className="mx-2 text-white transition-colors duration-300 hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-8 h-8 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-400 title-font"></h2>
                <h1 className="mb-3 text-lg font-medium title-font text-gray-50">
                  Haptechs
                </h1>
                <p className="leading-relaxed text-gray-300">
                  React 18, JSON, TailwindCSS, Responsive Web Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="left-0 right-0 flex justify-between pb-6 mx-auto text-center md:bottom-0 sm:w-3/4 md:relative">
        <button className="w-32 px-4 py-4 ml-5 text-white transition border rounded-full border-fuchsia-600 hover:text-fuchsia-600 focus:outline-none focus:no-ring active:text-fuchsia-500">
          <Link href="/Main">
            <span className="text-sm font-medium">Home</span>
          </Link>
        </button>
        <button className="w-32 py-4 mr-5 text-white transition border border-teal-600 rounded-full right-40 hover:text-teal-600 focus:outline-none focus:no-ring active:text-teal-500">
          <Link href="/videos">
            <span className="text-sm font-medium">Videos</span>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Projects;
