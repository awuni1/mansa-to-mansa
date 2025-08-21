

"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { IoMenu, IoClose } from 'react-icons/io5';
import { useTheme } from 'next-themes'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0D1116] text-gray-900 dark:text-white overflow-x-hidden">
      {/* Header and Navigation */}
      <div className="relative z-10">
        <header className="bg-white dark:bg-[#30363D] text-black dark:text-white flex justify-between items-center p-4 lg:justify-center shadow-sm">
          <Link href="/signup" className="dark:text-white text-black text-sm sm:text-base ml-4 sm:ml-20 md:ml-80 lg:ml-20 hover:text-[#3FB950] transition-colors">Join our community</Link>
          {/* Mobile menu icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute right-4 lg:hidden dark:text-white text-black text-2xl"
          >
            <IoMenu />
          </button>
        </header>

        {/* Main nav */}
        <div className="flex flex-col lg:flex-row items-center px-4 sm:px-6 py-4">
          <Link href="/">
            <Image
              src={resolvedTheme === 'light' ? '/logo2.png' : '/logo.png'}
              width={200}
              height={100}
              alt="Mansa-to-Mansa logo"
              className="w-40 sm:w-48 md:w-56"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-grow justify-center">
            <ul className="flex flex-wrap space-x-4 lg:space-x-6 dark:text-white text-black">
              <li><Link href="/" className="hover:text-[#3FB950] transition-colors text-sm lg:text-base">HOME</Link></li>
              <li><Link href="/about" className="text-[#3FB950] hover:text-[#2EA043] transition-colors text-sm lg:text-base font-semibold">ABOUT US</Link></li>
              <li><Link href="/team" className="hover:text-[#3FB950] transition-colors text-sm lg:text-base">TEAM</Link></li>
              <li><Link href="/community" className="hover:text-[#3FB950] transition-colors text-sm lg:text-base">COMMUNITY</Link></li>
              <li><Link href="/projects" className="hover:text-[#3FB950] transition-colors text-sm lg:text-base">PROJECTS</Link></li>
            </ul>
          </nav>
          
          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 z-40 transition-opacity duration-300 bg-black bg-opacity-50 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`fixed top-0 left-0 w-4/5 h-full p-6 transform transition-transform duration-300 bg-white dark:bg-[#161B22] ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl mb-6 dark:text-white text-black"
              >
                <IoClose />
              </button>
              <nav>
                <ul className="space-y-4 dark:text-white text-black">
                  <li><Link href="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#3FB950]">HOME</Link></li>
                  <li><Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-[#3FB950] font-semibold">ABOUT US</Link></li>
                  <li><Link href="/team" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#3FB950]">TEAM</Link></li>
                  <li><Link href="/community" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#3FB950]">COMMUNITY</Link></li>
                  <li><Link href="/projects" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#3FB950]">PROJECTS</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-24 px-4 sm:px-6 flex items-center justify-center bg-gradient-to-b from-[#F0F8F0] to-[#E0F0E0] dark:from-[#0D1116] dark:to-[#161B22]">
                                {/* Spinning shape - Fully responsive positioning */}
           <div className="absolute right-2/3">
            <Image
              src="/shape4.png"
              alt=""
              width={400}
              height={400}
              className="animate-spin-slow w-54 h-64 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-86 lg:h-106 xl:w-102 xl:h-172 2xl:w-80 2xl:h-80 object-contain"
            />
          </div>  
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3FB950] mb-4">
              About Mansa-to-Mansa
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering Student Success Through Global Connection
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 opacity-30">
              <div className="w-24 h-24 rounded-full border-4 border-[#3FB950]"></div>
            </div>
            <div className="absolute bottom-10 left-10 opacity-30">
              <div className="w-16 h-16 rounded-full border-4 border-[#3FB950]"></div>
            </div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Mansa-to-Mansa is a purposefully established global community addressing the critical need for mentorship and networking opportunities among African students, professionals, and the diaspora or people of African origin worldwide. Recognizing that Africans and people of African descent remain grossly underrepresented in most industries, especially in tech, we create pathways to success through impactful project or research collaborations, connections and peer-to-peer mentorship. Our name draws inspiration from the legendary Mansa Musa, symbolizing wisdom, leadership, and the transformative power of meaningful connections.
              </p>

       {/* Hero Section with Decorative Elements - Fully Responsive */}
         <section className="relative h-100 flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
           {/* Decorative Images - Responsive positioning */}
           <div className="absolute inset-0 overflow-hidden">
             {/* Central logo circle - Responsive sizing and positioning */}
             <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-34 lg:h-34 rounded-full bg-white overflow-hidden flex items-center justify-center absolute left-40 sm:top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-1  top-45 md:top-55 md:left-100 mobile375:left-40 xl:left-100 xl:mt-42 lg:top-30">
               <Image
                src="/logo2.png"
                width={80}
                height={40}
                className="w-18 h-14 sm:w-10 sm:h-5 md:w-22 md:h-26 lg:w-26 lg:h-24 object-contain"
                alt="logo"
              />
            </div>

            {/* Decorative frames - Responsive positioning and sizing */}
            <div className="absolute left-23 mt-2 top-1/3 sm:top-1/4 transform -translate-x-1/2 -translate-y-1/2 translate-x-16 sm:translate-x-20 md:translate-x-24 lg:translate-x-4 lg:left-100 md:left-80 xl:left-100 ">
              <Image
                src="/Frame 72.png"
                width={150}
                height={75}
                className="w-26 h-28 sm:w-20 sm:h-10 md:w-44 md:h-102 lg:w-4 lg:h-140 xl:w-40 xl:h-120 object-contain"
                alt="decorative frame"
              />
            </div>

            <div className="absolute left-30 top-1/3 mt-6 sm:top-1/4 transform -translate-x-1/2 -translate-y-1/2 -translate-x-16 sm:-translate-x-20 md:-translate-x-24 lg:-translate-x-32 lg:left-92 lg:mt-16 md:mt-16 md:left-82">
              <Image
                src="/Frame 75.png"
                width={150}
                height={75}
                className="w-26 h-28 sm:w-20 sm:h-10 md:w-44 md:h-102 lg:w-52 lg:h-56 xl:w-40 xl:h-60 object-contain"
                alt="decorative frame"
              />
            </div>

            <div className="absolute left-26 top-1/3 sm:top-1/4 transform -translate-x-1/2 -translate-y-1/2 translate-x-16 sm:translate-x-20 md:translate-x-24 lg:translate-x-32 translate-y-12 sm:translate-y-16 md:translate-y-20 lg:translate-y-24 lg:left-70 lg:mt-4 md:left-80 md:mt-[-90]">
              <Image
                src="/Frame 74.png"
                width={150}
                height={75}
                className="w-26 h-28 sm:w-20 sm:h-10 md:w-44 md:h-102 lg:w-52 lg:h-28 xl:w-40 xl:h-40 object-contain"
                alt="decorative frame"
              />
            </div>

            <div className="absolute left-30 top-1/3 sm:top-1/4 transform -translate-x-1/2 -translate-y-1/2 -translate-x-16 sm:-translate-x-20 md:-translate-x-24 lg:-translate-x-32 translate-y-12 sm:translate-y-16 md:translate-y-20 lg:translate-y-24 lg:left-90 lg:mt-4 md:left-82 md:mt-[-90]">
              <Image
                src="/Frame 73.png"
                width={150}
                height={75}
                className="w-26 h-28 sm:w-20 sm:h-10 md:w-44 md:h-102 lg:w-52 lg:h-34 xl:w-40 xl:h-40 object-contain"
                alt="decorative frame"
              />
            </div>
          </div>

       
    
        </section>
                
              <h2 className="text-2xl md:text-3xl font-bold text-[#3FB950] mt-10 mb-4">Why We Exist</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                In industries where African talent remains severely underrepresented, traditional networking and mentorship channels often fail to provide the culturally aware guidance and opportunities our community deserves. Mansa-to-Mansa bridges this gap by connecting African students and professionals with experienced leaders who understand both the unique challenges and immense potential within our global African diaspora.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#3FB950] mt-10 mb-4">What We Do</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#3FB950] mb-2">Professional Mentorship</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We bridge the gap between academic learning and real-world success by connecting students with experienced industry professionals. Our mentors provide invaluable guidance on career navigation, skill development, and industry insights that textbooks simply can&apos;t teach.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#3FB950] mb-2">Strategic Networking</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    In today&apos;s interconnected world, your network is your net worth. Mansa-to-Mansa creates a global community where students build lasting professional relationships with both peers and industry leaders.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#3FB950] mb-2">Portfolio-Building Projects</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Theory alone doesn&apos;t land jobs, demonstrated skills do. Our platform facilitates collaborative projects where students work alongside peers from different backgrounds and disciplines to create tangible, resume-worthy work.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#3FB950] mb-2">Global Community Network</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Connect and collaborate with like-minded students and professionals from every corner of the world. Our diverse community brings together voices from different industries, cultures, and academic backgrounds.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#3FB950] mt-10 mb-4">Why It Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In today&apos;s job market, the traditional model of isolated academic learning followed by independent job searching is outdated and ineffective. Today&apos;s students need:
              </p>
              
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Real-world experience through meaningful projects and collaborations</li>
                <li>Professional networks that create opportunities and open doors</li>
                <li>Mentorship relationships that show commitment to continuous learning</li>
                <li>Professional Guidance: Industry mentors who provide real-world insights and career direction</li>
                <li>Practical Experience: Projects that demonstrate capability and build confidence</li>
                <li>Global Perspective: Access, exposure and connection to the global network</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Mansa-to-Mansa provides all of these advantages, giving our members a significant edge in their career journeys.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#3FB950] mt-10 mb-4">Our Vision: Mansas Everywhere</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We&apos;re building toward an ambitious future where Mansas, our network of students, professionals, and mentors, are present in every major institution, industry, and city around the globe. Imagine a world where:
              </p>

              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 ml-4 mb-6">
                <li>A student in Kumasi can seamlessly connect with a tech professional in Silicon Valley</li>
                <li>A graduate in Lagos finds their first job through a Mansa connection in London</li>
                <li>An engineering student in Brooklyn collaborates on a sustainability project with peers in Kinshasa and Toronto</li>
                <li>A business student in Kigali gets mentored by a successful entrepreneur in Dallas</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This isn&apos;t just networking, it&apos;s a global ecosystem of opportunity, support, and mutual growth that transcends geographical boundaries and creates pathways to success that were previously unimaginable.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#3FB950] mt-10 mb-4">Our Impact</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We&apos;re intentionally working to increase African representation by ensuring our students and professionals have the mentorship, networks, and collaborative opportunities that have historically been less accessible. Every connection we facilitate, every project we support, and every mentorship we foster contributes to a more diverse and inclusive professional landscape globally.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#3FB950] mt-10 mb-4">Join the Movement</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Whether you&apos;re seeking mentorship from industry leaders, looking to expand your professional network, ready to collaborate on meaningful projects, or wanting to connect with peers worldwide, Mansa-to-Mansa is your gateway to career success and personal growth.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Together, we&apos;re not just building careers, we&apos;re creating a global community of empowered students and professionals who understand that success is amplified when we lift each other up.
              </p>

              <div className="bg-[#3FB950]/10 p-6 rounded-lg mt-10 text-center">
                <p className="text-[#3FB950] font-semibold text-lg">
                  Your future starts with your next connection. Let&apos;s build it together, Mansa to Mansa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-[#161B22]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3FB950] text-center mb-12">Community</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#0D1116] p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Mentorship</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  One-on-one and peer-led support to guide your journey.
                </p>
              </div>
              <div className="bg-white dark:bg-[#0D1116] p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Community</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Join interest-based circles that match your passion.
                </p>
              </div>
              <div className="bg-white dark:bg-[#0D1116] p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Knowledge Sharing</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Events, articles, and discussions curated by Mansas.
                </p>
              </div>
              <div className="bg-white dark:bg-[#0D1116] p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 transition-transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Collaboration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Work on real-world projects with fellow learners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3FB950] text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm border-l-4 border-[#3FB950]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We strive for excellence in everything we do, continuously improving and setting high standards.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm border-l-4 border-[#3FB950]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Inclusivity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We welcome and celebrate diversity, ensuring everyone feels valued and heard.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm border-l-4 border-[#3FB950]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Growth</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe in continuous learning and personal development for all our members.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-[#161B22] p-6 rounded-lg shadow-sm border-l-4 border-[#3FB950]">
                <h3 className="text-xl font-semibold text-[#3FB950] mb-3">Impact</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We focus on creating meaningful, lasting impact in our communities and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-[#161B22]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3FB950] mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Have questions or want to get in touch? We would love to hear from you!
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              You can reach us via email at{" "}
              <a href="mailto:mansatomansa@gmail.com" className="text-[#3FB950] hover:underline font-semibold">
                mansatomansa@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 p-6 text-sm text-gray-600 dark:text-gray-400 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>&copy; 2025 Mansa-to-Mansa. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
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