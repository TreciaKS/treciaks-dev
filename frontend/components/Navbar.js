import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className="container flex items-center justify-center p-4 mx-auto text-gray-600 capitalize dark:text-gray-300">
            
            {/* logo */}
            <div>
                <img
                src='/logo1.png'
                width='25px'
                height='25px'
                className="transition-colors duration-300 transform mr-10" />
            </div>
            
            {/* menu items */}
            <Link href=''>
            <a className="border-b-2 border-transparent hover:text-blue-600 hover:border-red-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6 ">About</a>
            </Link>

            <Link href=''>
            <a className="border-b-2 border-transparent hover:border-pink-800 hover:text-indigo-600 transition-colors duration-300 transform mx-1.5 sm:mx-6">Skills</a>
            </Link>

            <Link href=''>
            <a className="hover:border-blue-800 border-b-2 border-transparent hover:text-pink-600 transition-colors duration-300 transform mx-1.5 sm:mx-6">Work</a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar