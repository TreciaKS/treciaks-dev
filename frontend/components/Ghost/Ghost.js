import React from 'react'
import styles from './Ghost.module.css'

const Ghost = () => {
    return (
        <section>
          <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.ghost} ${styles.ghost1}`}></div>
                <div className={`${styles.ghost} ${styles.ghost2}`}></div>
                <div className={`${styles.ghost} ${styles.ghost3}`}></div>
                <div className={`${styles.ghost} ${styles.ghost4}`}></div>
            </div>
          </div>
      </section>
    )
}

export default Ghost