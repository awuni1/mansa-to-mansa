
// import React from 'react';

// import Link from 'next/link';
// import Image from 'next/image'
// import ReusableCard from '@/components/ReusableCard';

// export default function Page () {

//     return (
//        <div className="relative flex flex-col min-h-screen bg-[#0D1116] text-white overflow-y-scroll overflow-x-hidden custom-scrollbar">
//            <main>
                          
//             <div className="relative z-10">
//                 <header className='bg-[#30363D]/80 text-white flex flex-col items-center p-2 '>
//                     <Link href='/signup'>Join our community </Link>
//                 </header>

//                 <div className="flex flex-row items-center  px-6 py-4">
//                     <img
//                     src="/logo.png"
//                     width={200}
//                     height={100}
//                     className="hidden md:block"
//                     alt="logo"
//                     />
//                     <nav className="text-white flex flex-grow justify-center pt-0 -mt-12">
//                     <ul className="flex space-x-6 ">
//                         <li><Link href="/" className="hover:underline">HOME</Link></li>
//                         <li><Link href="/about" className="hover:underline">ABOUT US</Link></li>
//                         <li><Link href="/team" className="hover:underline">TEAM</Link></li>
//                         <li><Link href="/community" className="hover:underline">COMMUNITY</Link></li>
//                     </ul>
//                     </nav>
                    

                   
//                 </div>
                //  <div className='px-6 flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0 mt-2 ml-60'>
                //     <button className=' text-white px-6 py-2 rounded hover:bg-[#2EA043] transition-colors border border-[#2EA043]'>
                //         <Link href="/signup">Become a member</Link>
                //     </button>
                        
                // </div>
//             </div>   
//            </main>

//            <main className='mt-22'>
//               <Image
//                 src="/Frame 8.png" 
//                 alt=""
//                 width={900}
//                 height={500}
//                 className='absolute left-50'
//                 />

//               <div className='flex absolute top-220 left-120'>
//                     <h1 className='text-center text-3xl'>Community Circles</h1>
//               </div>
               
//            </main>

//            <main>
//               <div className=' flex flex-row absolute top-250 space-x-12 rounded-2xl    shadow-sm p-6 transition-colors ml-18'>
//                 <ReusableCard title="Cybersecurity" subtitle="Learn, practice, and discuss how 
// to defend digital systems"  className='rounded-2xl  shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                 <ReusableCard title="Data Science" subtitle="Dive into analytics, Python, 
// data modeling & competitions" className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                 <ReusableCard title="AI and Machine Learning" subtitle='Explore cutting-edge research,
//  tools, and AI challenges.' className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
               
//               </div>

//               <div className='flex flex-row absolute top-310 space-x-12 rounded-2xl shadow-sm p-6 transition-colors ml-18'>
//                   <ReusableCard title="Entrepreneurship" subtitle='Get guidance, pitch 
// ideas, and launch your 
// own venture.' className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                   <ReusableCard title="Software Development" subtitle='Collaborate on code, projects,
//  and open-source contributions'  className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                    <ReusableCard title="Biotech" subtitle='Interdisciplinary group
//  exploring biology + technology' className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                </div>

//                <div className='flex flex-row absolute top-370 space-x-12 rounded-2xl shadow-sm p-6 transition-colors ml-18'>
//                   <ReusableCard title="Blockchain" subtitle='Decentralized systems,
//  smart contracts, and DAOs.' className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                   <ReusableCard title="Automation & Robotics" subtitle=' Innovate in industrial and 
// mechanical automation.' className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                    <ReusableCard title="Mentorship" subtitle=' Connect with mentors
//  for personal and professional 
//  growth'  className='rounded-2xl shadow-sm p-6 transition-colors w-[320px] h-[200px]'/>
//                </div>
//            </main>

//         <footer className="mt-16 bg-gray-900 p-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center absolute top-420 w-full">
//             <div className="text-center md:text-left">
//             <p>&copy; 2025 Mansa-to-Mansa. All rights reserved.</p>
//             </div>
//             <div className="flex gap-4 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white">Facebook</a>
//             <a href="#" className="hover:text-white">X</a>
//             <a href="#" className="hover:text-white">LinkedIn</a>
//             </div>
//         </footer>
//        </div>
//     )
// }


"use client"

import { useState } from "react"

import Link from 'next/link';
import Image from 'next/image'
import ReusableCard from '@/components/ReusableCard';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useTheme } from 'next-themes'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function Page () {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    return (
       <div className="relative flex flex-col min-h-screen dark:bg-[#0D1116] bg-[#F4F6FB] text-white  overflow-x-hidden ">
           <main>
                          
             
        <div className="relative z-10">
            <header className="bg-white text-black dark:bg-[#30363D]/80 dark:text-white flex justify-between items-center p-3 lg:justify-center">
                <Link href="/signup" className="dark:text-white text-black text-xs sm:text-base ml-24 sm:ml-20 md:ml-80 lg:ml-20">Join our community</Link>
                  {/* Mobile menu icon */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="lg:hidden dark:text-white text-black text-2xl"
                >
                  <IoMenu />
                </button>
            </header>

            {/* Main nav */}
            <div className="flex flex-col lg:flex-row items-center px-2 sm:px-6 py-2 sm:py-4 md:flex-row">
           <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                src={theme === 'light' ? '/logo2.png' : '/logo.png'}
                width={200}
                height={100}
                className="block mb-0 w-24 sm:w-32 md:w-48 lg:w-auto cursor-pointer"
                alt="Mansa-to-Mansa logo"
                />
           </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex flex-grow justify-center  ">
                <ul className="flex flex-wrap space-x-4 lg:space-x-6 dark:text-white text-black">
                  <li><Link href="/" className="hover:underline text-sm lg:text-base">HOME</Link></li>
                  <li><Link href="/about" className="hover:underline text-sm lg:text-base">ABOUT US</Link></li>
                  <li><Link href="/team" className="hover:underline text-sm lg:text-base">TEAM</Link></li>
                  <li><Link href="/community"  className="text-base hover:text-gray-300 transition-colors text-[#3FB950]">COMMUNITY</Link></li>
                  <li><Link href="/projects" className="hover:underline text-sm lg:text-base">PROJECTS</Link></li>

                </ul>
              </nav>
               <div
                    className={`fixed inset-0  bg-opacity-50 z-40 transition-opacity duration-300 dark:bg-[#161B22] bg-[#F4F6FB] ${isOpen ? 'opacity-100 pointer-events-auto ' : 'opacity-0 pointer-events-none '}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div
                      className={`fixed top-0 left-0 w-full h-full  p-6 transform transition-transform duration-300 dark:bg-[#161B22] bg-[#F4F6FB] ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                          <Image
                            src={theme === 'light' ? '/logo2.png' : '/logo.png'}
                            width={150}
                            height={75}
                            alt="Mansa-to-Mansa logo"
                            className="cursor-pointer"
                          />
                        </Link>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="text-2xl dark:text-white text-black"
                        >
                          <IoClose />
                        </button>
                      </div>
                      <nav>
                        <ul className="space-y-4  dark:text-white text-black">
                          <li><Link href="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
                          <li><Link href="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link></li>
                          <li><Link href="/team" onClick={() => setIsOpen(false)}>TEAM</Link></li>
                          <li><Link href="/community" onClick={() => setIsOpen(false)}>COMMUNITY</Link></li>
                          <li><Link href="/projects" className="hover:underline text-sm lg:text-base">PROJECTS</Link></li>

                        </ul>
                      </nav>
                    </div>
                  </div>
          </div>
         </div>   
            
              <div className="px-4 sm:px-6 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 lg:ml-40">
                <button className="px-6 py-2 rounded hover:bg-[#2EA043] transition-colors border border-[#2EA043] dark:text-white text-black">
                  <Link href="/signup">Become a member</Link>
                </button>
              </div>
           </main>

           {/* Hero Section */}
           <main className='relative mt-8 md:mt-16 lg:mt-22'>
              <div className="flex justify-center px-4">
                <Image
                  src="/Frame 8.png" 
                  alt=""
                  width={900}
                  height={500}
                  className='w-full max-w-2xl md:max-w-4xl lg:max-w-5xl h-auto'
                />
              </div>

              <div className='flex justify-center mt-6 md:mt-8 px-4'>
                    <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white text-black'>Community Circles</h1>
              </div>
           </main>

           {/* Cards Section */}
           <main className="px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 pb-32">
              {/* First Row */}
              <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12'>
                <ReusableCard 
                  title="Cybersecurity" 
                  subtitle="Learn, practice, and discuss how to defend digital systems"  
                  className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                />
                <ReusableCard 
                  title="Data Science" 
                  subtitle="Dive into analytics, Python, data modeling & competitions" 
                  className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                />
                <ReusableCard 
                  title="AI and Machine Learning" 
                  subtitle='Explore cutting-edge research, tools, and AI challenges.' 
                  className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                />
              </div>

              {/* Second Row */}
              <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12'>
                  <ReusableCard 
                    title="Entrepreneurship" 
                    subtitle='Get guidance, pitch ideas, and launch your own venture.' 
                    className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                  />
                  <ReusableCard 
                    title="Software Development" 
                    subtitle='Collaborate on code, projects, and open-source contributions'  
                    className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                  />
                   <ReusableCard 
                     title="Biotech" 
                     subtitle='Interdisciplinary group exploring biology + technology' 
                     className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                   />
               </div>

               {/* Third Row */}
               <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12'>
                  <ReusableCard 
                    title="Blockchain" 
                    subtitle='Decentralized systems, smart contracts, and DAOs.' 
                    className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                  />
                  <ReusableCard 
                    title="Automation & Robotics" 
                    subtitle=' Innovate in industrial and mechanical automation.' 
                    className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                  />
                   <ReusableCard 
                     title="Mentorship" 
                     subtitle=' Connect with mentors for personal and professional growth'  
                     className='rounded-2xl shadow-lg shadow-gray-900/50 dark:shadow-gray-950/80 p-4 md:p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#2EA043]/30 dark:hover:shadow-[#2EA043]/40 hover:-translate-y-2 w-full md:w-[280px] lg:w-[320px] h-auto md:h-[200px] cursor-pointer bg-gray-800/40 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/30'
                   />
               </div>
           </main>

      <footer className="dark:bg-gray-900 bg-white  p-4 sm:p-6 lg:p-8 text-sm sm:text-sm lg:text-sm text-gray-400  ">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left dark:text-gray-300 text-black">
            <p>&copy; 2025 Mansa-to-Mansa. All rights reserved.</p>
          </div>
          <div className="flex gap-4 sm:gap-6 dark:text-gray-300 text-black">
            <a href="https://www.instagram.com/mansa_to_mansa?igsh=MTh6eDFpazY2Njl1Yg%3D%3D&utm_source=qr" className="hover:text-[#3FB950] transition-colors">
              Instagram
            </a>
            <a href="https://x.com/Mansa_to_Mansa" className="hover:text-[#3FB950] transition-colors">
              X
            </a>
            <a href="https://www.linkedin.com/company/mansa-to-mansa/" className="hover:text-[#3FB950] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
       </div>
    )
}