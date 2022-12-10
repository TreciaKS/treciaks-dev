import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const about = () => {
  return (
    <section className="">
      <Head>
        <title>Trecia Kat's Personal Portfolio</title>
        <meta name="description" content="Trecia Kat @TreciaKS Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name='robots' content='index, follow'/>
        <meta name="keywords" content="Trecia Kat, TreciaKS, @TreciaKS, Trecia Sekgalo, Trecia Kat Twitter" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      
      <main className="flex items-center justify-center bg-black">
          <div className="px-6 py-10 mx-auto lg:mt-32 md:mt-20">
              <div className="lg:-mx-6 lg:flex lg:items-center">
                  <Image
                    src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className='object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-full lg:h-[36rem] shadow shadow-amber-900'
                  />

                  <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                      <h1 className="text-3xl font-semibold text-violet-600 lg:text-4xl lg:w-96">
                          Help us improve our productivity 🐜
                      </h1>

                      <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                          “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                          tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                          aperiam dolorum, obcaecati corrupti aspernatur a. ”
                      </p>

                      <h3 className="mt-6 text-lg font-medium text-yellow-500">Mia Brown</h3>
                      <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

                      <div className="flex items-center justify-between mt-12 lg:justify-start">
                          <button className="p-2 px-4 py-2 text-gray-200 transition-colors duration-300 border border-teal-700 rounded-full rtl:-scale-x-100 lg:mx-6 hover:text-teal-700">
                             <Link href={'/'}>Home</Link>
                          </button>

                          <button className="p-2 px-4 py-2 text-gray-200 transition-colors duration-300 border border-indigo-700 rounded-full rtl:-scale-x-100 lg:mx-6 hover:text-indigo-700">
                             <Link href={'/skills'}> Skills</Link>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </section>
  )
}

export default about