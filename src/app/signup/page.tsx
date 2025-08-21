// 'use client'

// import Form from '@/components/Form';
// import Link from 'next/link';
// import Image from 'next/image'
// import React from 'react';


// export default function HomePage() {
      
//   return(

//     <div className='relative flex flex-col min-h-screen bg-[#0D1116] text-white  overflow-x-hidden '>
//         <div className="relative z-10">
//           <header className='bg-[#30363D]/80 text-white flex flex-col items-center p-2 '>
           
//             <Link href='/signup'>Join our community </Link>
//           </header>

//           <div className="flex flex-row items-center  px-6 py-4">
//             <img
//               src="/logo.png"
//               width={200}
//               height={100}
//               className="hidden md:block"
//               alt="logo"
//             />
//             <nav className="text-white flex flex-grow justify-center pt-0 -mt-12">
//               <ul className="flex space-x-6 ">
//                 <li><Link href="/" className="hover:underline">HOME</Link></li>
//                 <li><Link href="/about" className="hover:underline">ABOUT US</Link></li>
//                 <li><Link href="/team" className="hover:underline">TEAM</Link></li>
//                 <li><Link href="/community" className="hover:underline">COMMUNITY</Link></li>
//               </ul>
//             </nav>
//           </div>

//         </div>
       
//         <Form />

//         <footer className="mt-16 bg-gray-900 p-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center absolute top-230 w-full">
//             <div className="text-center md:text-left">
//                 <p>&copy; 2025 Mansa-to-Mansa. All rights reserved.</p>
//             </div>
//             <div className="flex gap-4 mt-4 md:mt-0">
//                 <a href="#" className="hover:text-white">Facebook</a>
//                 <a href="#" className="hover:text-white">X</a>
//                 <a href="#" className="hover:text-white">LinkedIn</a>
//             </div>
//         </footer>
//     </div>
        
           
//   )
// }



'use client'

import Form from '@/components/Form';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react"
import { IoMenu, IoClose } from 'react-icons/io5';
import { useTheme } from 'next-themes'
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function HomePage() {
      const [isOpen, setIsOpen] = useState(false);
      const { theme } = useTheme();
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#0D1116] bg-[#F4F6FB] text-black dark:text-white overflow-x-hidden">
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
          <Link href="/"> <Image
                src={theme === 'light' ? '/logo2.png' : '/logo.png'}
                width={200}
                height={100}
                 //className="block mb-0 ml-[-200] lg:mb-0 w-24 sm:w-32 md:w-48 lg:w-auto lg:ml-0 md:ml-0"
                alt="logo"
                /> </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex flex-grow justify-center  ">
                <ul className="flex flex-wrap space-x-4 lg:space-x-6 dark:text-white text-black">
                  <li><Link href="/" className="hover:underline text-sm lg:text-base">HOME</Link></li>
                  <li><Link href="/about" className="hover:underline text-sm lg:text-base">ABOUT US</Link></li>
                  <li><Link href="/team" className="hover:underline text-sm lg:text-base">TEAM</Link></li>
                  <li><Link href="/community" className="hover:underline text-sm lg:text-base">COMMUNITY</Link></li>
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
                      <button
                        onClick={() => setIsOpen(false)}
                        className=" text-2xl mb-6  dark:text-white text-black"
                      >
                        <IoClose />
                      </button>
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

     <div className="flex-1 flex items-center justify-center px-4">
  <Form />
</div>

      <footer className="mt-16 dark:bg-gray-900 bg-white p-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center ">
        <div className="text-center md:text-left dark:text-gray-300 text-black">
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
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
