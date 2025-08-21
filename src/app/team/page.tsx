// // 'use client'

// // import { useState } from "react"
// // import { IoMenu, IoClose } from 'react-icons/io5';
// // import Link from 'next/link'
// // import Image from 'next/image'
// // import {
// //    Instagram,
// //   Facebook,
// //   Twitter,
// //   Linkedin,
// //   Share2,
// // } from 'lucide-react'
// // import teamMembers from '@/constants/data'
// // import ScrollToTopButton from '@/components/ScrollToTopButton'
// // import { useTheme } from 'next-themes'





// // const SocialIcon = ({ icon: Icon, href, label }: { icon: any; href: string; label: string }) => (
// //   <li>
// //     <a
// //       href={href}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       aria-label={label}
// //       className="inline-grid h-[35px] w-[35px] place-items-center rounded-lg bg-gray-700 text-white transition-colors hover:bg-blue-600"
// //     >
// //       <Icon size={16} />
// //     </a>
// //   </li>
// // )

// // const TeamMemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
// //   <div className="group w-full max-w-[350px]">
// //     <div className="relative z-10 overflow-hidden rounded-lg after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-10 after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-500 group-hover:after:ease-linear">
// //       <Image
// //         src={member.image || "/placeholder.svg"}
// //         alt={member.name}
// //         width={640}
// //         height={480}
// //         className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100 w-full h-[300px]"
// //       />

// //       <div className="absolute bottom-0 left-8">
// //         <div className="pt-2.5">
// //           <div className="inline-grid h-[65px] w-[65px] cursor-pointer place-items-center rounded-lg bg-blue-600 transition-colors duration-300">
// //             <Share2 size={18} className="text-white" />
// //           </div>
// //           <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute bottom-full left-0 mb-2 space-y-2">
// //             <SocialIcon icon={Instagram} href={member.socialLinks.instagram} label={`${member.name}'s Instagram`} />
// //             <SocialIcon icon={Twitter} href={member.socialLinks.twitter} label={`${member.name}'s Twitter`} />
// //             <SocialIcon icon={Linkedin} href={member.socialLinks.linkedin} label={`${member.name}'s LinkedIn`} />
// //           </ul>
// //         </div>
// //       </div>
// //     </div>

// //     <div className="mt-[-70px] rounded-lg bg-white p-5 pr-12 pt-24 text-center dark:bg-gray-800 shadow-lg">
// //       <h3 className="text-xl font-semibold mb-2">
// //         <a
// //           href="#"
// //           className="text-gray-900 transition-colors duration-300 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
// //         >
// //           {member.name}
// //         </a>
// //       </h3>
// //       <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
// //     </div>
// //   </div>
// // )

// // export default function TeamPage() {
// //   const { theme } = useTheme()
// //   const [isOpen, setIsOpen] = useState(false)

// //   return (
// //     <>
// //       {/* Mobile Drawer */}
// //       {isOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/50 z-[9999] lg:hidden"
// //           onClick={() => setIsOpen(false)}
// //         >
// //           <div
// //             className="fixed top-0 left-0 w-full h-full dark:bg-[#161B22] bg-[#F4F6FB] shadow-2xl transform transition-transform duration-300 translate-x-0"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <div className="p-6">
// //               <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="text-2xl mb-6 dark:text-white text-black hover:opacity-70 transition-opacity"
// //               >
// //                 <IoClose />
// //               </button>
// //               <nav>
// //                 <ul className="space-y-4 dark:text-white text-black">
// //                   <li>
// //                     <Link 
// //                       href="/" 
// //                       onClick={() => setIsOpen(false)}
// //                       className="block py-2 hover:text-blue-500 transition-colors"
// //                     >
// //                       HOME
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link 
// //                       href="/about" 
// //                       onClick={() => setIsOpen(false)}
// //                       className="block py-2 hover:text-blue-500 transition-colors"
// //                     >
// //                       ABOUT US
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link 
// //                       href="/team" 
// //                       onClick={() => setIsOpen(false)}
// //                       className="block py-2 hover:text-blue-500 transition-colors"
// //                     >
// //                       TEAM
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link 
// //                       href="/community" 
// //                       onClick={() => setIsOpen(false)}
// //                       className="block py-2 hover:text-blue-500 transition-colors"
// //                     >
// //                       COMMUNITY
// //                     </Link>
// //                   </li>
// //                 </ul>
// //               </nav>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="min-h-screen flex flex-col justify-between dark:bg-[#0D1116] bg-[#F4F6FB] text-white overflow-x-hidden">
// //         <div className="relative z-10">
// //           <header className="bg-white text-black dark:bg-[#30363D]/80 dark:text-white flex justify-between items-center p-3 lg:justify-center">
// //             <Link href="/signup" className="ml-16">Join our community</Link>
// //             {/* Mobile menu icon */}
// //             <button
// //               onClick={() => setIsOpen(true)}
// //               className="lg:hidden dark:text-white text-black text-2xl"
// //             >
// //               <IoMenu />
// //             </button>
// //           </header>

// //           {/* Main nav */}
// //           <div className="flex flex-col lg:flex-row items-center px-4 sm:px-6 py-4">
// //             <Image
// //               src={theme === 'light' ? '/logo2.png' : '/logo.png'}
// //               width={200}
// //               height={100}
// //               className="block mb-0 ml-[-200] lg:mb-0 w-24 sm:w-32 md:w-48 lg:w-auto lg:ml-0"
// //               alt="logo"
// //             />

// //             {/* Desktop nav */}
// //             <nav className="hidden lg:flex flex-grow justify-center">
// //               <ul className="flex flex-wrap space-x-4 lg:space-x-6 dark:text-white text-black">
// //                 <li><Link href="/" className="hover:underline text-sm lg:text-base">HOME</Link></li>
// //                 <li><Link href="/about" className="hover:underline text-sm lg:text-base">ABOUT US</Link></li>
// //                 <li><Link href="/team" className="hover:underline text-sm lg:text-base">TEAM</Link></li>
// //                 <li><Link href="/community" className="hover:underline text-sm lg:text-base">COMMUNITY</Link></li>
// //               </ul>
// //             </nav>
// //           </div>
// //         </div>

// //         {/* Team Section */}
// //         <section className="py-16 md:py-20 flex-grow">
// //           <div className="container mx-auto px-4">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
// //               {teamMembers.map((member, index) => {
// //                 const totalMembers = teamMembers.length;
// //                 const isLastRow = index >= totalMembers - (totalMembers % 3);
// //                 const remainingInLastRow = totalMembers % 3;
                
// //                 // Center the last 2 cards if there are exactly 2 remaining
// //                 if (remainingInLastRow === 2 && isLastRow) {
// //                   return (
// //                     <div 
// //                       key={member.id} 
// //                       className={`${index === totalMembers - 2 ? 'lg:col-start-1' : ''}`}
// //                     >
// //                       <TeamMemberCard member={member} />
// //                     </div>
// //                   );
// //                 }
                
// //                 return <TeamMemberCard key={member.id} member={member} />;
// //               })}
// //             </div>
// //           </div>
// //         </section>

// //         <footer className="mt-16 dark:bg-gray-900 bg-white p-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
// //           <div className="text-center md:text-left dark:text-gray-300 text-black">
// //             <p>&copy; 2025 Mansa-to-Mansa. All rights reserved.</p>
// //           </div>
// //           <div className="flex gap-4 sm:gap-6 dark:text-gray-300 text-black">
// //             <a href="https://www.instagram.com/mansa_to_mansa?igsh=MTh6eDFpazY2Njl1Yg%3D%3D&utm_source=qr" className="hover:text-[#3FB950] transition-colors">
// //               Instagram
// //             </a>
// //             <a href="https://x.com/Mansa_to_Mansa" className="hover:text-[#3FB950] transition-colors">
// //               X
// //             </a>
// //             <a href="https://www.linkedin.com/company/mansa-to-mansa/" className="hover:text-[#3FB950] transition-colors">
// //               LinkedIn
// //             </a>
// //           </div>
// //         </footer>

// //         <ScrollToTopButton />
// //       </div>
// //     </>
// //   )
// // }


// 'use client'

// import { useState } from "react"
// import { IoMenu, IoClose } from 'react-icons/io5';
// import Link from 'next/link'
// import Image from 'next/image'
// import {
//   Instagram,
//   Twitter,
//   Linkedin,
//   Share2,
//   LucideIcon,
// } from 'lucide-react'
// import teamMembers from '@/constants/data'
// import ScrollToTopButton from '@/components/ScrollToTopButton'
// import { useTheme } from 'next-themes'

// const SocialIcon = ({ icon: Icon, href, label }: { icon: LucideIcon; href: string; label: string }) => (
//   <li>
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="inline-grid h-[35px] w-[35px] place-items-center rounded-lg bg-gray-700 text-white transition-colors hover:bg-blue-600"
//     >
//       <Icon size={16} />
//     </a>
//   </li>
// )

// const TeamMemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => {
//   const [showSocials, setShowSocials] = useState(false)

//   return (
//     <div className="group w-full max-w-[350px]">
//       <div className="relative z-10 overflow-hidden rounded-lg after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-10 after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-500 group-hover:after:ease-linear">
//         <Image
//           src={member.image || "/placeholder.svg"}
//           alt={member.name}
//           width={640}
//           height={480}
//           className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100 w-full h-[300px]"
//         />

//         <div className="absolute bottom-0 left-8">
//           <div className="pt-2.5">
//             <button
//               onClick={() => setShowSocials(!showSocials)}
//               className="inline-grid h-[40px] w-[40px] lg:h-[65px] lg:w-[65px] cursor-pointer place-items-center rounded-lg bg-blue-600 transition-colors duration-300"
//             >
//               <Share2 size={18} className="text-white" />
//             </button>
//             <ul className={`
//               absolute bottom-full left-0 mb-2 space-y-2
//               transition-all duration-300
//               ${showSocials ? 'opacity-100 visible' : 'opacity-0 invisible'}
//               group-hover:opacity-100 group-hover:visible
//             `}>
//               <SocialIcon icon={Instagram} href={member.socialLinks.instagram} label={`${member.name}&apos;s Instagram`} />
//               <SocialIcon icon={Twitter} href={member.socialLinks.twitter} label={`${member.name}&apos;s Twitter`} />
//               <SocialIcon icon={Linkedin} href={member.socialLinks.linkedin} label={`${member.name}&apos;s LinkedIn`} />
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="mt-[-70px] rounded-lg bg-white p-5 pr-12 pt-24 text-center dark:bg-gray-800 shadow-lg">
//         <h3 className="text-xl font-semibold mb-2">
//           <a
//             href="#"
//             className="text-gray-900 transition-colors duration-300 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
//           >
//             {member.name}
//           </a>
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
//       </div>
//     </div>
//   )
// }

// export default function TeamPage() {
//   const { theme } = useTheme()
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-[9999] lg:hidden"
//           onClick={() => setIsOpen(false)}
//         >
//           <div
//             className="fixed top-0 left-0 w-full h-full dark:bg-[#161B22] bg-[#F4F6FB] shadow-2xl transform transition-transform duration-300 translate-x-0"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-2xl mb-6 dark:text-white text-black hover:opacity-70 transition-opacity"
//               >
//                 <IoClose />
//               </button>
//               <nav>
//                 <ul className="space-y-4 dark:text-white text-black">
//                   <li>
//                     <Link 
//                       href="/" 
//                       onClick={() => setIsOpen(false)}
//                       className="block py-2 hover:text-blue-500 transition-colors"
//                     >
//                       HOME
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       href="/about" 
//                       onClick={() => setIsOpen(false)}
//                       className="block py-2 hover:text-blue-500 transition-colors"
//                     >
//                       ABOUT US
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       href="/team" 
//                       onClick={() => setIsOpen(false)}
//                        className="text-base hover:text-gray-300 transition-colors text-[#3FB950]"
//                     >
//                       TEAM
//                     </Link>
//                   </li>
//                   <li>
//                     <Link 
//                       href="/community" 
//                       onClick={() => setIsOpen(false)}
//                       className="block py-2 hover:text-blue-500 transition-colors"
//                     >
//                       COMMUNITY
//                     </Link>
//                    <li><Link href="/projects" className="hover:underline text-sm lg:text-base">PROJECTS</Link></li>

//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="min-h-screen flex flex-col justify-between dark:bg-[#0D1116] bg-[#F4F6FB] text-white overflow-x-hidden">
//         <div className="relative z-10 mt-0">
//           <header className="bg-white text-black dark:bg-[#30363D]/80 dark:text-white flex justify-between items-center p-3 lg:justify-center">
//             <Link href="/signup" className="dark:text-white text-black text-xs sm:text-base ml-24 sm:ml-20 md:ml-80 lg:ml-20">Join our community</Link>
//             <button
//               onClick={() => setIsOpen(true)}
//               className="lg:hidden dark:text-white text-black text-2xl"
//             >
//               <IoMenu />
//             </button>
//           </header>

//           <div className="flex flex-col lg:flex-row items-center px-2 sm:px-6 py-2 sm:py-4 md:flex-row">
//            <Link href="/"> <Image
//               src={theme === 'light' ? '/logo2.png' : '/logo.png'}
//               width={200}
//               height={100}
//               //className="block mb-0 ml-[-200] lg:mb-0 w-24 sm:w-32 md:w-48 lg:w-auto lg:ml-0"
//               alt="logo"
//             /></Link>

//             <nav className="hidden lg:flex flex-grow justify-center">
//               <ul className="flex flex-wrap space-x-4 lg:space-x-6 dark:text-white text-black">
//                 <li><Link href="/" className="hover:underline text-sm lg:text-base">HOME</Link></li>
//                 <li><Link href="/about" className="hover:underline text-sm lg:text-base">ABOUT US</Link></li>
//                 <li><Link href="/team" className="text-base hover:text-gray-300 transition-colors text-[#3FB950]">TEAM</Link></li>
//                 <li><Link href="/community" className="hover:underline text-sm lg:text-base">COMMUNITY</Link></li>
//                 <li><Link href="/projects" className="hover:underline text-sm lg:text-base">PROJECTS</Link></li>

//               </ul>
//             </nav>
//           </div>
//         </div>

//         <section className="py-16 md:py-20 flex-grow">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//               {teamMembers.map((member, index) => {
//                 const totalMembers = teamMembers.length;
//                 const isLastRow = index >= totalMembers - (totalMembers % 3);
//                 const remainingInLastRow = totalMembers % 3;

//                 if (remainingInLastRow === 2 && isLastRow) {
//                   return (
//                     <div 
//                       key={member.id} 
//                       className={`${index === totalMembers - 2 ? 'lg:col-start-1' : ''}`}
//                     >
//                       <TeamMemberCard member={member} />
//                     </div>
//                   );
//                 }

//                 return <TeamMemberCard key={member.id} member={member} />;
//               })}
//             </div>
//           </div>
//         </section>

//         <footer className="mt-16 dark:bg-gray-900 bg-white p-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-center md:text-left dark:text-gray-300 text-black">
//             <p>&copy; 2025 Mansa-to-Mansa. All rights reserved.</p>
//           </div>
//           <div className="flex gap-4 sm:gap-6 dark:text-gray-300 text-black">
//             <a href="https://www.instagram.com/mansa_to_mansa?igsh=MTh6eDFpazY2Njl1Yg%3D%3D&utm_source=qr" className="hover:text-[#3FB950] transition-colors">
//               Instagram
//             </a>
//             <a href="https://x.com/Mansa_to_Mansa" className="hover:text-[#3FB950] transition-colors">
//               X
//             </a>
//             <a href="https://www.linkedin.com/company/mansa-to-mansa/" className="hover:text-[#3FB950] transition-colors">
//               LinkedIn
//             </a>
//           </div>
//         </footer>

//         <ScrollToTopButton />
//       </div>
//     </>
//   )
// }







'use client'

import { useState } from "react"
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link'
import Image from 'next/image'
import {
  Instagram,
  Twitter,
  Linkedin,
  Share2,
  LucideIcon,
} from 'lucide-react'
import teamMembers from '@/constants/data'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { useTheme } from 'next-themes'

// Updated SocialIcon component with optional href
const SocialIcon = ({ icon: Icon, href, label }: { icon: LucideIcon; href?: string; label: string }) => {
  // Don't render if href is not provided
  if (!href) return null;

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="inline-grid h-[35px] w-[35px] place-items-center rounded-lg bg-gray-700 text-white transition-colors hover:bg-blue-600"
      >
        <Icon size={16} />
      </a>
    </li>
  )
}

const TeamMemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => {
  const [showSocials, setShowSocials] = useState(false)

  return (
    <div className="group w-full max-w-[350px]">
      <div className="relative z-10 overflow-hidden rounded-lg after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-10 after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-500 group-hover:after:ease-linear">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={640}
          height={480}
          className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100 w-full h-[300px]"
        />

        <div className="absolute bottom-0 left-8">
          <div className="pt-2.5">
            <button
              onClick={() => setShowSocials(!showSocials)}
              className="inline-grid h-[40px] w-[40px] lg:h-[65px] lg:w-[65px] cursor-pointer place-items-center rounded-lg bg-blue-600 transition-colors duration-300"
            >
              <Share2 size={18} className="text-white" />
            </button>
            <ul className={`
              absolute bottom-full left-0 mb-2 space-y-2
              transition-all duration-300
              ${showSocials ? 'opacity-100 visible' : 'opacity-0 invisible'}
              group-hover:opacity-100 group-hover:visible
            `}>
              <SocialIcon icon={Instagram} href={member.socialLinks.instagram} label={`${member.name}'s Instagram`} />
              <SocialIcon icon={Twitter} href={member.socialLinks.twitter} label={`${member.name}'s Twitter`} />
              <SocialIcon icon={Linkedin} href={member.socialLinks.linkedin} label={`${member.name}'s LinkedIn`} />
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[-70px] rounded-lg bg-white p-5 pr-12 pt-24 text-center dark:bg-gray-800 shadow-lg">
        <h3 className="text-xl font-semibold mb-2">
          <a
            href="#"
            className="text-gray-900 transition-colors duration-300 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            {member.name}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-full h-full dark:bg-[#161B22] bg-[#F4F6FB] shadow-2xl transform transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl mb-6 dark:text-white text-black hover:opacity-70 transition-opacity"
              >
                <IoClose />
              </button>
              <nav>
                <ul className="space-y-4 dark:text-white text-black">
                  <li>
                    <Link 
                      href="/" 
                      onClick={() => setIsOpen(false)}
                      className="block py-2 hover:text-blue-500 transition-colors"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      onClick={() => setIsOpen(false)}
                      className="block py-2 hover:text-blue-500 transition-colors"
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/team" 
                      onClick={() => setIsOpen(false)}
                       className="text-base hover:text-gray-300 transition-colors text-[#3FB950]"
                    >
                      TEAM
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/community" 
                      onClick={() => setIsOpen(false)}
                      className="block py-2 hover:text-blue-500 transition-colors"
                    >
                      COMMUNITY
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/projects"
                      onClick={() => setIsOpen(false)} 
                      className="block py-2 hover:text-blue-500 transition-colors"
                    >
                      PROJECTS
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen flex flex-col justify-between dark:bg-[#0D1116] bg-[#F4F6FB] text-white overflow-x-hidden">
        <div className="relative z-10 mt-0">
          <header className="bg-white text-black dark:bg-[#30363D]/80 dark:text-white flex justify-between items-center p-3 lg:justify-center">
            <Link href="/signup" className="dark:text-white text-black text-xs sm:text-base ml-24 sm:ml-20 md:ml-80 lg:ml-20">Join our community</Link>
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden dark:text-white text-black text-2xl"
            >
              <IoMenu />
            </button>
          </header>

          <div className="flex flex-col lg:flex-row items-center px-2 sm:px-6 py-2 sm:py-4 md:flex-row">
           <Link href="/"> <Image
              src={theme === 'light' ? '/logo2.png' : '/logo.png'}
              width={200}
              height={100}
              alt="logo"
            /></Link>

            <nav className="hidden lg:flex flex-grow justify-center">
              <ul className="flex flex-wrap space-x-4 lg:space-x-6 dark:text-white text-black">
                <li><Link href="/" className="hover:underline text-sm lg:text-base">HOME</Link></li>
                <li><Link href="/about" className="hover:underline text-sm lg:text-base">ABOUT US</Link></li>
                <li><Link href="/team" className="text-base hover:text-gray-300 transition-colors text-[#3FB950]">TEAM</Link></li>
                <li><Link href="/community" className="hover:underline text-sm lg:text-base">COMMUNITY</Link></li>
                <li><Link href="/projects" className="hover:underline text-sm lg:text-base">PROJECTS</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <section className="py-16 md:py-20 flex-grow">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {teamMembers.map((member, index) => {
                const totalMembers = teamMembers.length;
                const isLastRow = index >= totalMembers - (totalMembers % 3);
                const remainingInLastRow = totalMembers % 3;

                if (remainingInLastRow === 2 && isLastRow) {
                  return (
                    <div 
                      key={member.id} 
                      className={`${index === totalMembers - 2 ? 'lg:col-start-1' : ''}`}
                    >
                      <TeamMemberCard member={member} />
                    </div>
                  );
                }

                return <TeamMemberCard key={member.id} member={member} />;
              })}
            </div>
          </div>
        </section>

        <footer className="mt-16 dark:bg-gray-900 bg-white p-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
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
    </>
  )
}