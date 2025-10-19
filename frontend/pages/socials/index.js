import React from "react";
import Ghost from "../../components/Ghost/Ghost";
import Link from "next/link";

const Socials = () => {
  return (
    <section className="flex min-h-screen text-center bg-black ">
      <div className="flex flex-col items-center justify-center w-full p-8">
        <Ghost />
        <h1 className="pt-5 text-3xl font-semibold capitalize text-fuchsia-300 lg:text-5xl">
          Reach Out, 200?
        </h1>

        <div className="mt-4 text-lg text-gray-500 lg:w-1/2 ">
          <p>
            I don&apos;t bite, hehe. Do feel free to reach out. I like talking
            code, projects, or anything that sparks curiosity.
          </p>
          <p className="mt-4">
            Got an open source project, want to collaborate? Ping me!
          </p>
        </div>

        <div className="relative mt-6 md:mt-8">
          <div className="flex flex-wrap items-center justify-center w-full mx-auto mt-4 space-x-6 cursor-pointer gap-y-4">
            <a
              className="transition-colors duration-300 transform border rounded-full shadow-md border-cyan-400 shadow-cyan-600 hover:text-cyan-500 text-cyan-400 "
              href="https://x.com/TreciaKS"
              target="_blank"
            >
              <svg
                className="h-16 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
              </svg>
            </a>

            <a
              className="p-2 text-yellow-400 transition-colors duration-300 transform border border-yellow-400 rounded-full shadow-md shadow-yellow-600 hover:text-yellow-500"
              href="https://www.linkedin.com/in/treciaks "
              target="_blank"
            >
              <svg
                className="w-12 h-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                  fill="currentColor"
                />
                <path
                  d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                  fill="currentColor"
                />
                <path
                  d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://github.com/TreciaKS"
              className="p-3 text-orange-400 transition-colors duration-300 transform border border-orange-400 rounded-full shadow-md shadow-orange-600 hover:text-orange-500"
              aria-label="Github"
            >
              <svg
                className="w-10 h-10 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.tiktok.com/@TreciaKS"
              className="p-3 text-white transition-colors duration-300 transform border border-white rounded-full shadow-md shadow-gray-50 hover:text-gray-200"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-10 h-10 fill-current"
              >
                <path d="M204.3 64.1c-22.5-5.4-39.1-22.1-44.5-44.5h-30.2v137.8c0 17.2-14 31.2-31.2 31.2s-31.2-14-31.2-31.2 14-31.2 31.2-31.2c3.3 0 6.5.5 9.5 1.5V97.3c-3.1-.4-6.3-.6-9.5-.6-34.5 0-62.5 28-62.5 62.5s28 62.5 62.5 62.5 62.5-28 62.5-62.5V86.4c12.2 9.1 26.9 15.1 42.8 16.8V64.1z" />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.youtube.com/@TreciaKS"
              className="p-3 text-red-400 transition-colors duration-300 transform border border-red-500 rounded-full shadow-md shadow-red-600 hover:text-red-500"
              aria-label="YouTube"
            >
              <svg
                className="w-10 h-10 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a2.995 2.995 0 0 0-2.115-2.12C19.47 3.5 12 3.5 12 3.5s-7.47 0-9.383.566a2.995 2.995 0 0 0-2.115 2.12C0 8.12 0 12 0 12s0 3.88.502 5.814a2.995 2.995 0 0 0 2.115 2.12c1.913.566 9.383.566 9.383.566s7.47 0 9.383-.566a2.995 2.995 0 0 0 2.115-2.12C24 15.88 24 12 24 12s0-3.88-.502-5.814zM9.546 15.568V8.432l6.182 3.568-6.182 3.568z"></path>
              </svg>
            </a>

            <a
              target="_blank"
              href="https://treciaks.hashnode.dev"
              className="p-3 text-green-400 transition-colors duration-300 transform border border-green-400 rounded-full shadow-md shadow-green-600 hover:text-green-500"
              aria-label="Blog"
            >
              <svg
                className="w-10 h-10 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16v16H4V4zm2 2v2h12V6H6zm0 4v2h12v-2H6zm0 4v2h8v-2H6z"></path>
              </svg>
            </a>
          </div>

          <Link href="/Main">
            <p className="flex justify-center w-64 h-14 px-4 py-3.5 mx-auto mt-12 text-indigo-300 transition-colors duration-300 transform border border-indigo-200 rounded-full shadow-md cursor-pointer shadow-indigo-600 hover:text-indigo-500">
              Home
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Socials;
