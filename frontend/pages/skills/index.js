import React from 'react'
// @ts-ignore
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

        <div className="grid grid-cols-1 gap-8 mt-8 tracking-wide md:grid-cols-2 lg:grid-cols-3">
          <div className="block p-8 transition border shadow-md rounded-xl border-teal-400/70 shadow-lime-500/100">
            <h2 className="mt-4 text-xl font-bold text-teal-500">
              Frontend Developer
            </h2>

            <p className="mt-1 text-gray-300 text-md">
              I like to think UX determines what the UI should be so I build
              interfaces that are both functional and visually thoughtful. I
              enjoy taking designs from concept to reality, solving tricky
              layout or interaction challenges along the way, and learning with
              every project.
            </p>
          </div>
          <div className="block p-8 transition border shadow-md rounded-xl border-pink-400/70 shadow-indigo-500/100">
            <h2 className="mt-4 text-xl font-bold text-pink-500">
              Backend Developer
            </h2>

            <p className="mt-1 text-gray-300 text-md">
              From APIs and databases to server logic. I focus on building
              reliable, efficient systems that support a seamless user
              experience. I enjoy untangling the messy, invisible parts of a
              project, turning complexity into something quietly elegant that
              just works.
            </p>
          </div>
          <div className="block p-8 transition border shadow-md rounded-xl border-blue-400/70 shadow-teal-500/100">
            <h2 className="mt-4 text-xl font-bold text-blue-500">
              Developer Advocate
            </h2>

            <p className="mt-1 text-gray-300 text-md">
              I help make technology more understandable, pleasant and
              accessible. Whether through demos, talks, or writing, I aim to
              explain complex ideas clearly and help other developers navigate
              new tools and concepts. I love finding the &quot;aha&quot; moment
              and I try to create those moments wherever I can and share them
              with others.
            </p>
          </div>
        </div>
        {/* end skills */}

        <div className="relative px-3 py-1 mx-auto mt-20 max-w-7xl">
          <h1 className="text-3xl font-bold leading-tight text-center mb-7 text-emerald-500 md:text-4xl">
            Tech Stack
          </h1>
          <div className="grid grid-cols-2 mb-16 text-center gap-7 lg:grid-cols-4 md:grid-cols-4">
            <div className="flex items-center justify-center p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                JavaScript
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                TypeScript
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                C# .NET
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                SQL
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                SQL Server / SSMS
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                DAPPER
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                HTML5
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                CSS3
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Next.js
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                React.js
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Tailwind CSS
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Angular
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Git
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                REST APIs
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                EF Core
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Docker
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Zod
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Zustand
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                Figma
              </p>
            </div>
            <div className="p-4 border-2 border-gray-500 border-dashed shadow-md rounded-xl">
              <p className="-mx-2 font-medium text-center text-white text-md">
                JIRA
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 mb-1 text-center lg:grid-cols-2">
            <button className="w-32 px-4 py-4 text-white transition border rounded-full border-emerald-600 hover:text-emerald-600 focus:outline-none focus:no-ring active:text-emerald-500">
              <Link href="/Main">
                <span className="text-sm font-medium">Home</span>
              </Link>
            </button>
            <button className="absolute right-0 w-32 py-4 text-white transition border border-yellow-600 rounded-full hover:text-yellow-600 focus:outline-none focus:no-ring active:text-yellow-500">
              <Link href="/projects">
                <span className="text-sm font-medium">Projects</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills