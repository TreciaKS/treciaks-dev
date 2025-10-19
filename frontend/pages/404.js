import React from "react";
import Link from "next/link";
import Ghost from "../components/Ghost/Ghost";
// @ts-ignore
import styles from "../components/Navbar/Navbar.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.myContainer}>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <Ghost />
        <div className="w-full pt-6 mx-auto text-center lg:w-2/3">
          <h1 className="mb-4 text-6xl font-thin text-fuchsia-200">404</h1>
          <p className="mb-5 text-gray-200 text-md md:text-xl">
            This page will be updated once I get back into developer advocacy
            and when I am creating consistent video content. For now:
          </p>
          <p className="py-2 mb-3 text-lg font-medium text-gray-200 cursor-pointer">
            <Link href="/">
              <span className="text-teal-300">Watch PacMan Eat, AGAIN???</span>
            </Link>
            <br />
            <br />
            <Link href="/Main">
              <span className="text-yellow-300">Straight to Menu</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
