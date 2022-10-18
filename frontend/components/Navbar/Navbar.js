import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.row}>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          
            {/* menu items */}
            <a className="border-b-2 border-transparent hover:text-blue-600 hover:border-red-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6 ">About</a>

            <a className="border-b-2 border-transparent hover:border-pink-800 hover:text-indigo-600 transition-colors duration-300 transform mx-1.5 sm:mx-6">Skills</a>

            <a className="hover:border-blue-800 border-b-2 border-transparent hover:text-pink-600 transition-colors duration-300 transform mx-1.5 sm:mx-6">Work</a>
        </div>
    </nav>
  )
}

export default Navbar