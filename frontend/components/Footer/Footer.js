import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className='relative'>
        <div className={styles.row}>
            <div className={`${styles.col12} ${styles.textCenter} ${styles.author}`}>
                
            {/* logo */}
            <div className='flex justify-center mb-5 align-middle'>
                <img
                src='/logo1.png'
                width='40px'
                height='40px'
                className="transition-colors duration-300 transform mr-15" />
            </div>
            
            TM &amp; &copy; 2022 2023 TreciaKS.
            <p className={styles.name}>Trecia Kat, @TreciaKS.</p>
            <span className={styles.license}>Licensed By MIT</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer