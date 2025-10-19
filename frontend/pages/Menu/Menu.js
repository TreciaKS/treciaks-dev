import React from 'react'
import Link from 'next/link'
// @ts-ignore
import styles from './Menu.module.css'

const Menu = () => {
  return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.links}>
                    <ul>
                        <Link href='/about'><li><a className={styles.link}>About</a></li></Link>
                        <Link href='/skills'><li><a className={styles.link}>Skills</a></li></Link>
                        <Link href='/projects'><li><a className={styles.link}>Projects</a></li></Link>
                        <Link href='/videos'><li><a className={styles.link}>Videos</a></li></Link>
                        <Link href='/socials'><li><a className={styles.link}>Contact</a></li></Link>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Menu