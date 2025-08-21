

'use client';
import React, { useState, useEffect } from 'react';
import '../styles/globals.css'; // Tailwind import
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/card';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { IoMenu, IoClose } from 'react-icons/io5';
import NetworkCard from '@/components/NetworkCard';
import { useTheme } from 'next-themes';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
   
   
  
  return (
    <div className=" relative flex flex-col min-h-screen dark:bg-[#0D1116] bg-[#F4F6FB] text-white overflow-x-hidden">
                  <header className="relative bg-white text-black dark:bg-[#30363D]/80 dark:text-white flex justify-between items-center p-3 lg:justify-center">
            <Link href="/signup" className="dark:text-white text-black text-xs sm:text-base ml-24 sm:ml-20 md:ml-80 lg:ml-20 ">Join our community</Link>
            {/* Mobile menu icon */}
            <button
              onClick={() => setIsOpen(true)}
              className="absolute right-4 lg:hidden dark:text-white text-black text-xl sm:text-2xl"
              aria-label="Open menu"
            >
              <IoMenu />
            </button>
          </header>
    <div className='container mx-auto'> 
      <main className="relative container ">
        {/* Background Image - Fixed positioning */}
      <div
        className="absolute top-24 right-0  
                  w-40 sm:w-64 md:w-80 lg:w-[480px] xl:w-[600px]
                  h-32 sm:h-48 md:h-64 lg:h-80 xl:h-[500px]
                  bg-cover bg-center pointer-events-none hidden sm:block md:top-52"
        style={{ backgroundImage: "url('/Component 15.png')" }}
      ></div>


        {/* Header and Navigation */}
        <div className="relative z-10">


          {/* Main nav */}
          <div className="flex flex-col lg:flex-row items-center px-2 sm:px-6 py-2 sm:py-4 md:flex-row">
            <Image
              src={mounted && theme === 'light' ? '/logo2.png' : '/logo.png'}
              width={150}
              height={75}
              className="block mb-0 lg:mb-0 w-24 sm:w-32 md:w-48 lg:w-auto lg:ml-0 object-contain"
              alt="logo"
            />

            {/* Desktop nav */}
            <nav className="hidden lg:flex flex-grow justify-center">
              <ul className="flex flex-wrap space-x-4 lg:space-x-6 xl:space-x-8 dark:text-white text-black">
                <li><Link href="/" className="text-base hover:text-gray-300 transition-colors text-[#3FB950]">HOME</Link></li>
                <li><Link href="/about" className="hover:underline text-sm lg:text-base transition-colors">ABOUT US</Link></li>
                <li><Link href="/team" className="hover:underline text-sm lg:text-base transition-colors">TEAM</Link></li>
                <li><Link href="/community" className="hover:underline text-sm lg:text-base transition-colors">COMMUNITY</Link></li>
                <li><Link href="/projects" className="hover:underline text-sm lg:text-base">PROJECTS</Link></li>

              </ul>
            </nav>
            
            {/* Mobile Menu Overlay */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div
                className={`fixed top-0 left-0 w-full h-full p-6 transform transition-transform duration-300 dark:bg-[#161B22] bg-[#F4F6FB]  ${
                  isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="dark:text-white text-black text-2xl mb-6"
                  title="Close menu"
                  aria-label="Close menu"
                >
                  <IoClose />
                </button>
                <nav>
                  <ul className="space-y-4 dark:text-white text-black">
                    <li><Link href="/" onClick={() => setIsOpen(false)}  className="text-base hover:text-gray-300 transition-colors text-[#3FB950]">HOME</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">ABOUT US</Link></li>
                    <li><Link href="/team" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">TEAM</Link></li>
                    <li><Link href="/community" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">COMMUNITY</Link></li>
                    <li><Link href="/projects" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">PROJECTS</Link></li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Hero Section - Fixed margins */}
          <div className=' flex flex-col items-start mt-4 sm:mt-6 md:mt-8 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-black dark:text-white lg:ml-40 md:ml-30'>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 leading-tight max-w-4xl">
              Building the Future, One Mansa at a Time
            </h1>
            <div className='mb-5'>
              Connecting African students worldwide through mentorship, networking, collaboration,
              <br />
               and shared opportunities.
            </div>
     
          </div>
          
          {/* CTA Section */}
          <div className='flex flex-col items-center mt-20 sm:mt-12 md:mt-16 space-y-3 sm:space-y-4 text-black dark:text-white px-3 sm:px-4 md:mt-4'>
            <p className='text-[#2EA043] text-xs sm:text-base font-medium '>Join The Community</p>
            <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2'>
              <button className='px-4 sm:px-6 py-2 rounded hover:bg-[#2EA043] transition-colors border border-[#2EA043] text-xs sm:text-base'>
                <Link href="/signup">Become a member</Link>
              </button>
            </div>
          </div>
          
          {/* Trusted by section */}
          {/* <p className='dark:text-[#9198A1] text-black text-center px-3 sm:px-6 md:px-8 lg:px-12 mt-6 sm:mt-12 md:mt-16 mb-4 sm:mb-6 text-xs sm:text-base lg:ml-[-300] lg:mb-[-35]'>
            Trusted by world leading organizations
          </p> */}
        </div>
      </main>

      {/* Timeline/Progress Section - Simplified */}
      <div className="relative px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6 sm:mt-12">
        <div className="flex flex-col space-y-6 sm:space-y-12 md:space-y-16">
          <div className="relative flex items-start space-x-3 sm:space-x-6 md:space-x-8">
            <div className="hidden sm:block md:hidden lg:block ">
              <Image src="/Gradient.png" alt="" width={5} height={5} className='lg:mt-[-400] lg:ml-5 md:mt-[-300] md:ml-15'/>
            </div>
            {/* <div className="flex-1 mt-[-45] ml-[-50] mb-4 md:mt-10 lg:mt-[-50]">
              <Image
                src="/Component 1.png" 
                alt="console"
                width={25}
                height={25}
                className='rounded-xl bg-[#7C72FF]/40 backdrop-blur-lg shadow-lg shadow-[#7C72FF]/50 sm:w-[30px] sm:h-[30px] hidden sm:block md:hidden lg:block '
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Community Section - Fixed positioning issues */}
      <section className='mt-12 sm:mt-20 md:mt-24 lg:mt-[-240] px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-12'>
          {/* Left Content */}
          <div className='flex-1 space-y-4 sm:space-y-6 max-w-3xl '>
            {/* <div className='hidden sm:block md:hidden lg:block lg:mt-[-125] lg:ml-15 md:ml-15 md:mt-[-100]'>
              <Image src="/gradient2.png" alt="" width={5} height={5} className=''/>
            </div> */}
            
            <div className="flex items-center space-x-3 sm:space-x-4 lg:ml-2 md:ml-12 ">
              <Image
                src="/community.png" 
                alt="community icon"
                width={30}
                height={30}
                className='rounded-xl bg-[#3FB950]/40 backdrop-blur-lg shadow-lg shadow-[#3FB950]/50 w-6 h-6 sm:w-10 sm:h-10'
              />
              <h2 className='text-base sm:text-xl md:text-2xl font-semibold dark:text-white text-black'>Community</h2>
            </div>
            
            <div className='space-y-3 sm:space-y-4 text-black dark:text-white ml-10 sm:ml-12 lg:ml-35 md:ml-35'>
              <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3FB950] leading-tight'>
                Grow Together, Thrive Together
              </h1>
              <div className='space-y-2 '>
                <p>Join a vibrant network of learners and leaders. At Mansa-to-Mansa, every member helps shape the future by</p>
                <p>sharing knowledge, support, and collaboration</p>
                
              </div>
            </div>

            <div className='hidden sm:block md:hidden lg:block  lg:mt-[-215] lg:ml-5'>
              <Image src="/gradient3.png" alt="" width={5} height={10} className=''/>
            </div>
          </div>
          
          {/* Right Content - Fixed positioning */}
          <div className='flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end mt-4  lg:mt-90 md:mt-[-120]'>
            <Image
              src="/shape1.png" 
              alt="animated shape"
              width={150}
              height={150}
              className='animate-spin-slow w-32 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto max-w-[40vw]'
            />
          </div>
        </div>

        {/* Community Image */}
        <div className="mt-[-100] mb-20 sm:mt-12 flex justify-center lg:mt-[-240] lg:ml-[-5] z-[2000]">
          <Image
            src="/Frame 30.png" 
            alt="community frame"
            width={850}
            height={400}
            className='w-full max-w-4xl h-auto rounded-lg'
          />
        </div>
      </section>

      {/* Mentorship Section - Fixed layout */}
      <section className='mt-12 sm:mt-20 md:mt-24 lg:mt-32 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
        <div className='space-y-6 sm:space-y-12'>
          {/* Section Header - Mobile Optimized */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* <div className='block sm:hidden'>
              <Image src="/gradient8.png" alt="" width={3} height={3} className=''/>
            </div> */}
            <div className='hidden sm:block md:hidden lg:block   lg:ml-5 lg:mt-[-250]'>
              <Image src="/gradient8.png" alt="" width={5} height={5} className=''/>
            </div>
            <Image
              src="/git.png" 
              alt="git icon"
              width={50}
              height={50}
              className='lg:ml-[-20] ml-[-14] hidden sm:block md:hidden lg:block '
            />
          </div>
          
          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-12 lg:mt-[-340] md:mt-[-100] '>
            <div className='flex-1 space-y-3 sm:space-y-4 text-black dark:text-white ml-6 sm:ml-12 lg:ml-35 lg:mt-[-30]'>
              <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3FB950] leading-tight'>
                Mentorship
              </h1>
              <div className='space-y-2 '>
                <p>Access one-on-one or group mentorship sessions with experienced professionals</p>
                <p>and academics committed to helping you grow</p>
              </div>
            </div>
            
            <div className='flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end lg:absolute lg:left-120 mt-[-70] mb-10 '>
              <Image
                src="/shape2.png" 
                alt="animated shape"
                width={150}
                height={150}
                className='animate-spin-slow w-32 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto'
              />
            </div>
          </div>
          
          {/* Mentorship Cards - Mobile Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 mt-8 lg:mt-40">
            <Card
              title="Personal Mentorship"
              description={`Get matched with experienced mentors who provide tailored 
              guidance, One-on-one feedback sessions.`}
              imageUrl='/cardimage9.jpg'
              // imageClassName='absolute w-full h-24 sm:h-40 object-cover top-0 left-0'
              // className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-52 sm:h-72 lg:h-80"
                className='relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-64 sm:h-80 lg:h-96'
              imageClassName='absolute w-full h-full object-cover top-0 left-0'

              titleClassName='absolute bottom-16 sm:bottom-16 left-4 text-black dark:text-white font-semibold text-sm sm:text-lg lg:mb-8'
              descriptionClassName="absolute bottom-2 sm:bottom-4 left-4 right-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line"
            />

            <Card
              title='Peer-to-Peer Learning'
              description={`Join a mentorship circle where peers support each other, share resources, and grow together through shared experience`}
              imageUrl='/peer-learning2.jpeg'
              // className='relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-52 sm:h-72 lg:h-80 lg:mb-8'
              // imageClassName='absolute w-full h-24 sm:h-40 object-cover top-0 left-0'
           className='relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-64 sm:h-80 lg:h-96'
            imageClassName='absolute w-full h-full object-cover top-0 left-0'

              descriptionClassName="absolute bottom-2 sm:bottom-4 left-4 right-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line"
              titleClassName='absolute bottom-16 sm:bottom-20 left-4 text-black dark:text-white font-semibold text-sm sm:text-lg'
            />

            <Card
              title='Knowledge Sharing '
              description={`Join a mentorship circle where peers support each other, share resources, and grow together through shared experience`}
              imageUrl='/Frame 33.png'
              // className='relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-52 sm:h-72 lg:h-80 lg:col-span-2 xl:col-span-1'
              // imageClassName='absolute w-full h-24 sm:h-40 object-cover top-0 left-0'
                className='relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-64 sm:h-80 lg:h-96'
              imageClassName='absolute w-full h-full object-cover top-0 left-0'

              descriptionClassName="absolute bottom-2 sm:bottom-4 left-4 right-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line"
              titleClassName='absolute bottom-16 sm:bottom-20 left-4 text-black dark:text-white font-semibold text-sm sm:text-lg'
            />
          </div>
        </div>
      </section>

      {/* Knowledge Hub Section */}
      <section className='mt-12 sm:mt-20 md:mt-24 lg:mt-32 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
        <div className='space-y-6 sm:space-y-12'>
          {/* Section Header - Mobile Optimized */}
          {/* <div className='block sm:hidden'>
            <Image src="/gradient4.png" alt="" width={3} height={3} className=''/>
          </div> */}
          <div className='hidden sm:block md:hidden lg:block  lg:ml-5 lg:mt-[-170]'>
            <Image src="/gradient4.png" alt="" width={5} height={5} className=''/>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-4 lg:ml-2  lg:mt-[-30]">
            <Image
              src="/knowledgehub.png" 
              alt="knowledge hub icon"
              width={25}
              height={25}
              className='rounded-xl bg-[#33B3AE]/40 backdrop-blur-lg shadow-lg shadow-[#33B3AE]/50 w-6 h-6 sm:w-[30px] sm:h-[30px]'
            />
            <h2 className='text-base sm:text-xl md:text-2xl font-semibold text-black dark:text-white lg:ml-10'>Knowledge Hub</h2>
          </div>
          
          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-12 lg:ml-22'>
            <div className='flex-1 space-y-3 sm:space-y-4 text-black dark:text-white ml-6 sm:ml-12'>
              <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#33B3AE] leading-tight'>
                Learn Freely, Learn Together
              </h1>
              <div className='space-y-2 '>
                <p>Work with peers on real-world projects, research, and ideas that solve problems</p>
                <p>and create impact within and beyond your community</p>
              </div>
            </div>
             
            <div className='flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end lg:absolute mt-[-30] '>
              <Image
                src="/shape3.png" 
                alt="animated shape"
                width={150}
                height={150}
                className='animate-spin-slow w-32 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto'
              />
            </div>
          </div>
          
          <div className='hidden sm:block md:hidden lg:block  lg:ml-5 lg:mt-[-220]'>
            <Image src="/gradient4.png" alt="" width={5} height={5} className=''/>
          </div>

          {/* Knowledge Hub Cards - Mobile Optimized */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mt-6 lg:mt-30">
            <Card
              imageUrl='/Frame 35.png'
              imageClassName='absolute w-full h-full object-cover'
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-36 sm:h-56 md:h-64"
              title={''} 
              description={''}            
            />
             
            <NetworkCard 
              text='Join a global network where connection, growth,and mentorship begins'
              imageUrl='/kannect 1.png'
            />
          </div> */}

          {/* Additional Knowledge Hub Cards - Mobile Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
            <NetworkCard 
              text='Together we learn'
              
              imageUrl='/Frame 29.png'
            />

            <NetworkCard 
              text='Join a mentorship circle where peers support each other, share resources, and grow together through shared experience'
              imageUrl='/Frame 34.png'
              
            />
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className='mt-12 sm:mt-20 md:mt-24 lg:mt-32 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
        <div className='space-y-6 sm:space-y-12'>
          {/* Section Header - Mobile Optimized */}
          {/* <div className='block sm:hidden'>
            <Image src="/gradient6.png" alt="" width={3} height={3} className=''/>
          </div> */}
          <div className='hidden sm:block md:hidden lg:block  lg:ml-5 lg:mt-[-130]'>
            <Image src="/gradient6.png" alt="" width={5} height={5} className=''/>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-4 lg:ml-2 lg:mt-[-30]">
            <Image
              src="/collaboration.png" 
              alt="collaboration icon"
              width={25}
              height={25}
              className='rounded-xl bg-[#F778BA]/40 backdrop-blur-lg shadow-lg shadow-[#F778BA]/50 w-6 h-6 sm:w-[30px] sm:h-[30px]'
            />
            <h2 className='text-base sm:text-xl md:text-2xl font-semibold text-black dark:text-white lg:ml-3'>Collaboration</h2>
          </div>
          
          <div className='space-y-3 sm:space-y-4 text-black dark:text-white ml-6 sm:ml-12 lg:ml-32'>
            <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F778BA] leading-tight'>
              Build Projects That Matter
            </h1>
            <div className='space-y-2 text-xs sm:text-base text-gray-700 dark:text-gray-300'>
              <p>Work with peers on real-world projects, research, and ideas that solve problems</p>
              <p>and create impact within and beyond your community</p>
            </div>
          </div>
          
          <div className='hidden sm:block md:hidden lg:block  lg:ml-5 lg:mt-[-220]'>
            <Image src="/gradient6.png" alt="" width={5} height={5} className=''/>
          </div>

          {/* Collaboration Images - Mobile Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="lg:col-span-2">
              <Image
                src="/picture.png" 
                alt="collaboration picture"
                width={1220}
                height={500}
                className='w-full h-auto rounded-lg shadow-lg object-cover lg:ml-0'
              />
            </div>
            <div className="    relative
    w-[150px] sm:w-[180px] md:w-[300px] lg:w-[400px]
    mt-[-80px] sm:mt-[-100px] md:mt-[-210px] lg:mt-[-150px]
    ml-6 sm:ml-10 md:ml-100 lg:ml-10
    lg:col-span-1 lg:absolute lg:right-50 lg:top-[63%]">
              <Image
                src="/picture2.png" 
                alt="collaboration picture 2"
                width={300}
                height={300}
                className='w-full h-auto rounded-lg shadow-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
       <section className='mt-12 sm:mt-20 md:mt-24 lg:mt-32 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
        <div className='space-y-6 sm:space-y-12'>
          {/* Section Header - Mobile Optimized */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:mt-[-50]">
            {/* <div className='block sm:hidden'>
              <Image src="/gradient9.png" alt="" width={3} height={3} className=''/>
            </div> */}
            <div className='hidden sm:block md:hidden lg:block lg:ml-5 lg:mt-[-150]'>
              <Image src="/gradient9.png" alt="" width={5} height={5} className=''/>
            </div>
            <Image
              src="/git2.png" 
              alt="global network icon"
              width={50}
              height={50}
              className='lg:ml-[-20] ml-[-14] hidden sm:block md:hidden lg:block  '
            />
          </div>
          
          <div className='space-y-3 sm:space-y-4 text-black dark:text-white ml-6 sm:ml-12 lg:ml-40 lg:mt-[-400] mt-2'>
            <h1 className='text-xs sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F778BA] leading-tight'>
              Global Network
            </h1>
            <p className='text-xs sm:text-base text-gray-700 dark:text-gray-300'>
              Whether you are in Accra, Nairobi, London, or New York — you will find a fellow Mansa ready to connect, collaborate, and uplift
            </p>
          </div>

          {/* Global Network Cards - Mobile Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mt-6 lg:mt-50">
            <NetworkCard 
              text="From campus to continent, we are connected"
              imageUrl='/CONNECT 1.png'
            />

            <NetworkCard 
              text="Global community"
              imageUrl='/connection 2.png'
            />
          </div>

          {/* Call to Action Card - Mobile Optimized */}
      
          <div className="w-100 h-full  lg:ml-130">
                      <Image src="/Container.png" alt="" width={800} height={320} className=" h-48 sm:h-64 lg:h-80 mt-6 sm:mt-10 lg:mt-20 lg:ml-0" />


          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className='flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-[-130] lg:mt-[-150] lg:ml-[-400]'>
            <button className='group px-8 sm:px-8 py-2 sm:py-3 rounded bg-[#3D444D] hover:bg-[#2EA043] transition-colors border-2 sm:border-4 border-[#2EA043] text-sm sm:text-base'>
              <Link href="/signup" className='text-white'>
                <span className='group-hover:text-white text-[#2EA043] transition-colors'>Join</span> Now
              </Link>
            </button>
            <button className='px-6 sm:px-8 py-2 sm:py-3 rounded bg-[#3D444D] hover:bg-[#B82222] transition-colors border-2 sm:border-4 border-[#B82222] text-sm sm:text-base'>
              <Link href="/about" className='text-white'>Learn more</Link>
            </button>
          </div>

          {/* Animated Shapes - Mobile Optimized */}
          <div className="flex justify-between items-center mt-8 sm:mt-12 relative lg:absolute">
            <div className='w-24 sm:w-48 md:w-64 lg:absolute lg:left-30 lg:mt-44 mb-[-100]'>
              <Image
                src="/Border.png" 
                alt="border animation"
                width={150}
                height={150}
                className='animate-spin-slow w-full h-auto lg:w-250'
              />
            </div>
            <div className='w-24 sm:w-48 md:w-64 lg:absolute lg:left-180 lg:mt-32 mb-[-100]'>
              <Image
                src="/shape3.png" 
                alt="shape animation"
                width={150}
                height={150}
                className='animate-spin-slow w-full h-auto'
              />
            </div>
          </div>
          
          <div className='hidden sm:block md:hidden lg:block  '>
            <Image src="/gradient7.png" alt="" width={5} height={5} className=''/>
          </div>

          {/* Final Message - Mobile Optimized */}
          <div className='text-center space-y-3 sm:space-y-4 mt-8 sm:mt-12 text-black dark:text-white lg:mt-[-300]'>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-2 sm:px-0">
              Mansa-To-Mansa is where potential meets opportunity—and no one walks alone
            </h1>
          </div>

          {/* Globe Image - Mobile Optimized */}
          <div className="flex justify-center mt-6 sm:mt-8 px-2 sm:px-0">
            <Image
              src="/globe.png" 
              alt="global network globe"
              width={800}
              height={400}
              className='w-full max-w-4xl h-auto'
            />
          </div>
        </div>
      </section>
        
      {/* Footer */}
<footer className="mt-16 px-4 py-6 sm:px-8 sm:py-8 text-xs sm:text-sm text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-900">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <p className="text-center md:text-left">
      &copy; 2025 Mansa-to-Mansa. All rights reserved.
    </p>
    <div className="flex gap-4 sm:gap-6">
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
    </div>

    );
}  