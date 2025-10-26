import React from 'react'
// @ts-ignore
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.row}>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          
            {/* menu items */}
            <a href='#' className="hover:border-blue-800 border-b-2 border-transparent hover:text-pink-600 transition-colors duration-300 transform mx-1.5 sm:mx-6">1UP <br /> 656 </a>

            <a href='#' className="border-b-2 border-transparent hover:border-pink-800 hover:text-indigo-600 transition-colors duration-300 transform mx-1.5 sm:mx-6">HIGH SCORE <br /> 200113 </a>

            <a href='#' className="hover:border-blue-800 border-b-2 border-transparent hover:text-pink-600 transition-colors duration-300 transform mx-1.5 sm:mx-6">2UP <br /> 1018</a>
        </div>
    </nav>
  )
}

export default Navbar