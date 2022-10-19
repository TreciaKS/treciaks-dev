import React from 'react'
import Link from 'next/link'
import styles from './Menu.module.css'

const Menu = () => {
  return (
        <div className={styles.container}>
            <div class={styles.wrap}>
                <div class={styles.links}>
                    <ul>
                        <Link href='/about'><li><a class={styles.link}>About</a></li></Link>
                        <Link href='/skills'><li><a class={styles.link}>Skills</a></li></Link>
                        <Link href='/projects'><li><a class={styles.link}>Projects</a></li></Link>
                        <Link href='/videos'><li><a class={styles.link}>Videos</a></li></Link>
                        <Link href='/socials'><li><a class={styles.link}>Contact</a></li></Link>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Menu