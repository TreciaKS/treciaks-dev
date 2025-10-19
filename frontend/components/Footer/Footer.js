import React from 'react'
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
            <img
              src="/logo1.png"
              width="40px"
              height="40px"
              className="transition-colors duration-300 transform mr-15"
            />
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