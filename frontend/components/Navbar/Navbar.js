import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <header className={styles.header}>
        {/* <!-- navigation --> */}
        <nav className={`${styles.nav} ${styles.bdGrid}`}>

        {/* <!-- my logo --> */}
        <div className="logo">
            <img src="/logo.png" alt="TreciaKS logo" width = "50px" />
        </div>

        {/* <!-- menu --> */}
        <div className={styles.navMenu} id="navMenu">
        <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#home" className={styles.navLink}>Home</a></li>
            <li className={styles.navItem}><a href="#about" className={styles.navLink}>About</a></li>
            <li className={styles.navItem}><a href="#skills" className={styles.navLink}>Skills</a></li>
            <li className={styles.navItem}><a href="#work" className={styles.navLink}>Work</a></li>
            <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
            <div className={styles.line}></div>
        </ul>
        </div>

        </nav>
    </header>
  )
}

export default Navbar