import React from 'react'
import Image from "next/image";
// @ts-ignore
import styles from './Footer.module.css'

const Footer = () => {
 const currentYear = new Date().getFullYear();
 
  
  return (
    <footer className="relative">
      <div className={styles.row}>
        <div
          className={`${styles.col12} ${styles.textCenter} ${styles.author}`}
        >
          {/* logo */}
          <div className="flex justify-center mb-5 align-middle">
            <Image
              alt="TreciaKS Logo Icon"
              src="/logo1.png"
              width={40}
              height={40}
              className="transition-colors duration-300 transform mr-15"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          &copy; {currentYear} Trecia Kat
          <p className={styles.name}>@TreciaKS | All Rights Reserved</p>
          <span className={styles.license}>Licensed By MIT</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer