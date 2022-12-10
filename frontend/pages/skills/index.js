import React from 'react'
import styles from './Skills.module.css'
import Link from 'next/link'
import Ghost from '../../components/Ghost/Ghost'
const Skills = () => {
  return (
    <div className=''>
        <section class={`${styles.skills} ${styles.section}`}>
            <div class={`${styles.skillsContainer} ${styles.bgGrid}`}>
              <div class={styles.skillsBox}>
                <span class={styles.skillsName}>HTML</span>
                <span class={styles.skillsName}>CSS</span>
                <span class={styles.skillsName}>JavaScript</span>
                <span class={styles.skillsName}>Git</span>
                <span class={styles.skillsName}>APIs</span>
                <span class={styles.skillsName}>Tailwind CSS</span>
                <span class={styles.skillsName}>Responsive Web Design</span>
                <br />
                <div className={styles.buttons}>
                  <Link href='/Main'><button class={styles.back}>Back</button></Link>
                  <Link href='/Projects'><button class={styles.forward}>Projects</button></Link>
                </div>
              </div>

              {/* <div class={styles.skillsImg}>
                <img className ='img' src="/logo1.png" loading="lazy" /> 
              </div> */}
            </div>
        </section>
    </div>
  )
}

export default Skills