import React from 'react'
import styles from './Skills.module.css'
import Link from 'next/link'
import Ghost from '../../components/Ghost/Ghost'

const Skills = () => {
  return (
        <section className="text-white bg-black">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto text-center">
                <Ghost />
              </div>
              

              <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="block p-8 transition border shadow-md rounded-xl border-teal-400/70 shadow-lime-500/100">
                    <h2 className="mt-4 text-xl font-bold text-teal-500">Frontend Developer</h2>

                    <p className="mt-1 text-sm text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                      possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                  </div>
                  <div className="block p-8 transition border shadow-md rounded-xl border-blue-400/70 shadow-teal-500/100">
                    <h2 className="mt-4 text-xl font-bold text-blue-500">Developer Advocate</h2>

                    <p className="mt-1 text-sm text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                      possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                  </div>
                  <div className="block p-8 transition border shadow-md rounded-xl border-pink-400/70 shadow-indigo-500/100">
                    <h2 className="mt-4 text-xl font-bold text-pink-500">Content Creator</h2>

                    <p className="mt-1 text-sm text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                      possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                  </div>
              </div>
              {/* end skills */}

              <div className="relative px-3 py-1 mx-auto mt-20 max-w-7xl">
                  <h1 className="text-3xl font-bold leading-tight text-center mb-7 text-emerald-500 md:text-4xl">Tech Stack</h1>
                    <div className="grid grid-cols-2 mb-16 text-center gap-7 lg:grid-cols-7 md:grid-cols-4">
                          <div className="flex items-center justify-center p-4 border-2 border-white border-dashed shadow-md rounded-xl">
                            <p className="-mx-2 text-sm font-bold text-center text-white">JavaScript</p>
                          </div>
                          <div className="p-4 border-2 border-white border-dashed shadow-md rounded-xl">
                            <p className="-mx-2 text-sm font-bold text-center text-white">HTML</p>
                          </div>
                          <div className="p-4 border-2 border-white border-dashed shadow-md rounded-xl">
                            <p className="-mx-2 text-sm font-bold text-center text-white">CSS</p>
                          </div>
                          <div className="p-4 border-2 border-white border-dashed shadow-md rounded-xl">
                            <p className="-mx-2 text-sm font-bold text-center text-white">Next.js</p>
                          </div>
                          <div className="p-4 border-2 border-white border-dashed shadow-md rounded-xl">
                            <p className="-mx-2 text-sm font-bold text-center text-white">TypeScript</p>
                          </div>
                          <div className="p-4 border-2 border-white border-dashed shadow-md rounded-xl">
                            <p className="-mx-2 text-sm font-bold text-center text-white">React</p>
                          </div>
                          <div className="p-4 border-2 border-white border-dashed shadow-md rounded-xl">
                            <p className="-mx-2 text-sm font-bold text-center text-white">Tailwind CSS</p>
                          </div>
                      </div>

                  <div className="grid grid-cols-2 gap-16 mb-1 text-center lg:grid-cols-2">
                        <button
                          className="w-32 px-4 py-4 text-white transition border rounded-full border-emerald-600 hover:text-emerald-600 focus:outline-none focus:no-ring active:text-emerald-500"
                        >
                          <Link href='/Main'><span className="text-sm font-medium">Home</span></Link>
                      </button>
                        <button
                          className="absolute right-0 w-32 py-4 text-white transition border border-yellow-600 rounded-full hover:text-yellow-600 focus:outline-none focus:no-ring active:text-yellow-500"
                        >
                          <Link href='/projects'><span className="text-sm font-medium">Projects</span></Link>
                      </button>
                    </div>
                  </div>
            </div>
      </section>
  )
}

export default Skills