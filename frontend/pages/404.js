import React from 'react'
import Ghost from '../components/Ghost/Ghost'
import styles from '../components/Navbar/Navbar.module.css'

const NotFoundPage = () => {
  return (
        <div className={styles.myContainer}>
            <section class="px-4 py-24 mx-auto max-w-7xl">
                <Ghost/>
                    <div class="w-full mx-auto text-center lg:w-2/3">
                        <h1 class="mb-4 text-6xl font-thin text-red-500">404</h1>
                        <p class="mb-3 text-md text-gray-200 md:text-2xl">Oh no! You've discovered my secret. I am still working on this page because well, I was tired at this point. Anyways...</p>
                        <p class="mb-3 text-lg font-medium text-gray-200">
                        <a href="/" class="text-red-300">Watch PacMan Eat, AGAIN???</a> <br />
                        <a href="/Main" class="text-red-500">Straight to Menu</a>
                        </p>
                    </div>
            </section>
        </div>
  )
}

export default NotFoundPage