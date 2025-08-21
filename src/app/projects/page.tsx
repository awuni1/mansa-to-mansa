// 'use client';
// import React, { useState } from 'react';
// import '../../styles/globals.css'// Tailwind import
// import Link from 'next/link';
// import Image from 'next/image'
// // import { Card } from '@/components/card';
// import ScrollToTopButton from '@/components/ScrollToTopButton'
// import { IoMenu, IoClose, IoRocketOutline } from 'react-icons/io5';
// // import NetworkCard from '@/components/NetworkCard';
// import { useTheme } from 'next-themes'
// import ProjectCard from '@/components/projectcard';
// import { ongoingProjects, futureProjects } from '@/constants/projectsData';
// import CountUpText from '@/components/CountUpText'

// export default function ProjectsPage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('future'); // Changed default to 'future'
//   const { theme } = useTheme();
  
//   return (
//     <div className="relative flex flex-col min-h-screen dark:bg-[#0D1116] bg-[#F4F6FB] text-white overflow-x-hidden">
//       <main className="relative">
//         {/* Background Image - Fixed positioning */}
//         {/* <div
//           className="absolute top-24 right-0  
//                     w-40 sm:w-64 md:w-80 lg:w-[480px] xl:w-[600px]
//                     h-32 sm:h-48 md:h-64 lg:h-80 xl:h-[500px]
//                     bg-cover bg-center pointer-events-none hidden sm:block md:top-52"
//           style={{ backgroundImage: "url('/Component 15.png')" }}
//         ></div> */}

//         {/* Header and Navigation */}
//         <div className="relative z-10">
//           <header className="relative bg-white text-black dark:bg-[#30363D]/80 dark:text-white flex justify-between items-center p-3 lg:justify-center">
//             <Link href="/signup" className="dark:text-white text-black text-xs sm:text-base ml-24 sm:ml-20 md:ml-80 lg:ml-20">Join our community</Link>
//             {/* Mobile menu icon */}
//             <button
//               onClick={() => setIsOpen(true)}
//               className="absolute right-4 lg:hidden dark:text-white text-black text-xl sm:text-2xl"
//               aria-label="Open menu"
//             >
//               <IoMenu />
//             </button>
//           </header>

//           {/* Main nav */}
//           <div className="flex flex-col lg:flex-row items-center px-2 sm:px-6 py-2 sm:py-4 md:flex-row">
//             <Image
//               src={theme === 'light' ? '/logo2.png' : '/logo.png'}
//               width={150}
//               height={75}
//               alt="logo"
//             />

//             {/* Desktop nav */}
//             <nav className="hidden lg:flex flex-grow justify-center">
//               <ul className="flex flex-wrap space-x-4 lg:space-x-6 xl:space-x-8 dark:text-white text-black">
//                 <li><Link href="/" className="hover:underline text-sm lg:text-base transition-colors">HOME</Link></li>
//                 <li><Link href="/about" className="hover:underline text-sm lg:text-base transition-colors">ABOUT US</Link></li>
//                 <li><Link href="/team" className="hover:underline text-sm lg:text-base transition-colors">TEAM</Link></li>
//                 <li><Link href="/community" className="hover:underline text-sm lg:text-base transition-colors">COMMUNITY</Link></li>
//                 <li><Link href="/projects" className="hover:underline text-sm lg:text-base transition-colors text-[#3FB950]">PROJECTS</Link></li>
//               </ul>
//             </nav>
            
//             {/* Mobile Menu Overlay */}
//             <div
//               className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
//                 isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               <div
//                 className={`fixed top-0 left-0 w-full h-full p-6 transform transition-transform duration-300 dark:bg-[#161B22] bg-[#F4F6FB] ${
//                   isOpen ? 'translate-x-0' : '-translate-x-full'
//                 }`}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="dark:text-white text-black text-2xl mb-6"
//                   aria-label="Close menu"
//                 >
//                   <IoClose />
//                 </button>
//                 <nav>
//                   <ul className="space-y-4 dark:text-white text-black">
//                     <li><Link href="/" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">HOME</Link></li>
//                     <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">ABOUT US</Link></li>
//                     <li><Link href="/team" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">TEAM</Link></li>
//                     <li><Link href="/community" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">COMMUNITY</Link></li>
//                     <li><Link href="/projects" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors text-[#3FB950]">PROJECTS</Link></li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
          
//           {/* Hero Section */}
//           <div className='flex flex-col items-start mt-4 sm:mt-6 md:mt-8 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-black dark:text-white lg:ml-40 md:ml-30'>
//             <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
//               <IoRocketOutline className="text-2xl sm:text-3xl text-[#3FB950]" />
//               <h2 className='text-base sm:text-xl md:text-2xl font-semibold'>Our Projects</h2>
//             </div>
//             <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 leading-tight max-w-4xl">
//               Transforming Communities Through Collaborative Innovation
//             </h1>
//             <p className="text-xs sm:text-base lg:text-lg mt-2 sm:mt-4 text-black dark:text-gray-300 max-w-2xl">
//               Discover the ambitious projects that will shape the future of African communities worldwide. From innovative tech solutions to community-driven initiatives.
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* Projects Section */}
//       <section className='mt-12 sm:mt-20 md:mt-24 lg:mt-32 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-8 sm:mb-12">
//           <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
//             <button
//               onClick={() => setActiveTab('ongoing')}
//               className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === 'ongoing'
//                   ? 'bg-[#3FB950] text-white'
//                   : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
//               }`}
//             >
//               Ongoing Projects
//             </button>
//             <button
//               onClick={() => setActiveTab('future')}
//               className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === 'future'
//                   ? 'bg-[#3FB950] text-white'
//                   : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
//               }`}
//             >
//               Future Projects
//             </button>
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {activeTab === 'ongoing' 
//             ? ongoingProjects.length > 0 ? ongoingProjects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               )) : (
//                 <div className="col-span-full text-center py-12">
//                   <div className="text-gray-400 dark:text-gray-500 text-lg mb-4">
//                     <IoRocketOutline className="mx-auto text-4xl mb-4" />
//                     No ongoing projects at the moment
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     Check out our exciting future projects below!
//                   </p>
//                 </div>
//               )
//             : futureProjects.map((project) => (
//                 <ProjectCard key={project.id} project={project} isFuture={true} />
//               ))
//           }
//         </div>

//         {/* Project Statistics */}
//         <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#3FB950]/10 to-[#33B3AE]/10 rounded-2xl p-6 sm:p-8">
//           <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6 text-center">
//             Future Impact Vision
//           </h3>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center">
//               <CountUpText  target={14} duration={3000} />
//               <div className="text-sm text-gray-600 dark:text-gray-400">Future Projects</div>
//             </div>
//             <div className="text-center">
//               <div className="modal-field"><CountUpText  target={90} duration={3000}/><span className="text-2xl sm:text-3xl font-bold text-[#155DFC] mb-2">+</span></div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">Expected Participants</div>
//             </div>
//             <div className="text-center">
//                  <div className="modal-field"><CountUpText  target={6} duration={3000}/><span className="text-2xl sm:text-3xl font-bold text-[#155DFC] mb-2">+</span></div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">Countries to Impact</div>
//             </div>
//             <div className="text-center">
//               <CountUpText  target={2025} duration={2000}/>
//               <div className="text-sm text-gray-600 dark:text-gray-400">Launch Year</div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 sm:mt-20 text-center">
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
//             Ready to Make an Impact?
//           </h3>
//           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
//             Join our community and be part of projects that will transform lives across Africa and beyond.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
//             <button className="px-6 sm:px-8 py-2 sm:py-3 rounded bg-[#3FB950] hover:bg-[#2EA043] transition-colors text-white text-sm sm:text-base">
//               <Link href="/signup">Join a Project</Link>
//             </button>
//             <button className="px-6 sm:px-8 py-2 sm:py-3 rounded border border-[#3FB950] text-[#3FB950] hover:bg-[#3FB950] hover:text-white transition-colors text-sm sm:text-base">
//               <Link href="/community">Learn More</Link>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-16 px-4 py-6 sm:px-8 sm:py-8 text-xs sm:text-sm text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-900">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <p className="text-center md:text-left">
//             &copy; 2025 Mansa-to-Mansa. All rights reserved.
//           </p>
//           <div className="flex gap-4 sm:gap-6">
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
//         </div>
//       </footer>

//       <ScrollToTopButton />
//     </div>
//   );
// }








'use client';
import React, { useState } from 'react';
import '../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { IoMenu, IoClose, IoRocketSharp, IoPersonAdd, IoCheckmarkCircle, IoWarning, IoGlobe, IoCalendar, IoSettings, IoMail, IoBriefcase } from 'react-icons/io5';
import { useTheme } from 'next-themes';
import { ongoingProjects, futureProjects } from '@/constants/projectsData';
import { Project, FutureProject } from '@/types/projects';
import FutureImpactStats from '@/components/FutureImpactStats';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectId: number;
}

const JoinProjectModal: React.FC<JoinModalProps> = ({ isOpen, onClose, projectTitle, projectId }) => {
  const [step, setStep] = useState<'details' | 'success' | 'error' | 'not_member' | 'already_applied'>('details');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    motivation: ''
  });

  const checkMembership = async (email: string): Promise<boolean> => {
    try {
      console.log('Checking membership for email:', email);
      
      // Dynamic import to avoid SSR issues
      const { supabase } = await import('@/lib/supabase');
      
      // Check in the members table (where community members are stored)
      const { data, error } = await supabase
        .from('members')
        .select('id, email')
        .eq('email', email.toLowerCase());

      console.log('Membership check response:', { data, error });

      if (error && error.code !== 'PGRST116') {
        console.error('Membership check error:', error);
        return false;
      }

      // Check if we have any data (user found)
      const isFound = Boolean(data && data.length > 0);
      console.log('Membership found:', isFound);
      
      return isFound;
    } catch (error) {
      console.error('Membership check exception:', error);
      return false;
    }
  };

  const checkExistingApplication = async (email: string): Promise<{hasApplied: boolean, projectTitle?: string}> => {
    try {
      console.log('Checking if user has applied to ANY project:', email);
      
      // Dynamic import to avoid SSR issues
      const { supabase } = await import('@/lib/supabase');
      
      // Check if user has applied to ANY project, not just this one
      const { data, error } = await supabase
        .from('project_applications')
        .select('id, status, applied_date, project_id')
        .eq('applicant_email', email.toLowerCase());

      console.log('Application check response:', { data, error });

      if (error && error.code !== 'PGRST116') {
        console.error('Application check error:', error);
        return { hasApplied: false };
      }

      const hasApplied = data && data.length > 0;
      console.log('Has already applied to any project:', hasApplied);
      
      if (hasApplied && data && data.length > 0) {
        // Get project title for the existing application
        const existingProjectId = data[0].project_id;
        console.log('User already applied to project ID:', existingProjectId);
        
        // Find project title from our project data
        const allProjects = [...ongoingProjects, ...futureProjects];
        const existingProject = allProjects.find(p => p.id === existingProjectId);
        const projectTitle = existingProject?.title || `Project ${existingProjectId}`;
        
        return { hasApplied: true, projectTitle };
      }
      
      return { hasApplied: false };
    } catch (error) {
      console.error('Application check exception:', error);
      return { hasApplied: false };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      console.log('Starting form submission for:', formData.email);
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please provide a valid email address');
      }

      console.log('Email format validated');

      // Check if user is a community member
      console.log('Checking membership...');
      const isMember = await checkMembership(formData.email);
      console.log('Membership check result:', isMember);
      
      if (!isMember) {
        console.log('User is not a member, showing not_member modal');
        setStep('not_member');
        setLoading(false);
        return;
      }

      console.log('User is a member, proceeding with application check...');

      // Check if user has already applied to ANY project
      const applicationCheck = await checkExistingApplication(formData.email);
      if (applicationCheck.hasApplied) {
        const existingProjectName = applicationCheck.projectTitle || 'another project';
        setErrorMessage(`You have already applied to "${existingProjectName}". Each user can only join one project. Check your email for updates on your application status.`);
        setStep('already_applied');
        setLoading(false);
        return;
      }

      // Dynamic import to avoid SSR issues
      const { supabase } = await import('@/lib/supabase');
      
      // Try using RPC function first, if it fails, use direct insert
      try {
        const { data, error } = await supabase.rpc('submit_project_application', {
          p_project_id: projectId,
          p_applicant_name: formData.name,
          p_applicant_email: formData.email,
          p_skills: formData.skills || null,
          p_motivation: formData.motivation || null
        });

        if (error) {
          console.warn('RPC function failed, trying direct insert:', error);
          throw error;
        }

        if (data && !data.success) {
          throw new Error(data.message || 'Application submission failed');
        }

        console.log('Application submitted successfully:', data);
      } catch {
        console.log('RPC failed, using direct database insert...');
        
        // Fallback to direct database insert
        const { data, error } = await supabase
          .from('project_applications')
          .insert([
            {
              project_id: projectId,
              applicant_name: formData.name,
              applicant_email: formData.email,
              skills: formData.skills || null,
              motivation: formData.motivation || null,
              status: 'pending',
              applied_date: new Date().toISOString()
            }
          ])
          .select();

        if (error) {
          console.error('Direct insert error:', error);
          throw new Error(`Database error: ${error.message}`);
        }

        console.log('Application submitted successfully:', data);
      }

      // Success
      setStep('success');

    } catch (error: unknown) {
      console.error('Application submission error:', error);
      setErrorMessage((error as Error).message || 'An unexpected error occurred. Please try again.');
      setStep('error');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetModal = () => {
    setStep('details');
    setFormData({ name: '', email: '', skills: '', motivation: '' });
    setErrorMessage('');
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .text-orientation-fix * {
          writing-mode: horizontal-tb !important;
          text-orientation: mixed !important;
          direction: ltr !important;
          unicode-bidi: normal !important;
          -webkit-writing-mode: horizontal-tb !important;
          -webkit-text-orientation: mixed !important;
          -moz-writing-mode: horizontal-tb !important;
          -ms-writing-mode: horizontal-tb !important;
        }
        .modal-container {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .dark .modal-container {
          background: linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(31,41,55,0.9) 100%);
          border: 1px solid rgba(75,85,99,0.3);
        }
        .gradient-text {
          background: linear-gradient(135deg, #3FB950 0%, #2EA043 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .modal-animate {
          animation: modalSlideUp 0.4s ease-out;
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="modal-container modal-animate rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 w-full max-w-4xl max-h-[95vh] overflow-y-auto">
        
        {step === 'details' && (
          <>
            <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Join Project</h3>
              <button onClick={resetModal} title="Close modal" className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <IoClose size={24} className="sm:w-7 sm:h-7" />
              </button>
            </div>
            
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto bg-gradient-to-r from-[#3FB950] to-[#2EA043] rounded-full flex items-center justify-center mb-4 sm:mb-6 md:mb-8 shadow-lg">
                <IoPersonAdd className="text-3xl sm:text-4xl md:text-5xl text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
                {projectTitle}
              </h4>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
                Ready to make an impact? Fill out the form below to join this exciting project.
              </p>
              <div className="text-sm sm:text-base text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg sm:rounded-xl p-4 sm:p-6 mx-2 sm:mx-0">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <IoWarning className="text-amber-500 text-lg sm:text-xl" />
                  <strong className="text-base sm:text-lg">Important</strong>
                </div>
                <p className="text-sm sm:text-base">Use the email address registered with your Mansa-to-Mansa community membership.</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="relative">
                  <IoPersonAdd className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm sm:text-base" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl dark:bg-gray-800/50 bg-gray-50 dark:text-white text-gray-900 border border-gray-200 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FB950] focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/70 disabled:opacity-50"
                    placeholder="Full Name *"
                  />
                </div>
                
                <div className="relative">
                  <IoMail className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm sm:text-base" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl dark:bg-gray-800/50 bg-gray-50 dark:text-white text-gray-900 border border-gray-200 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FB950] focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/70 disabled:opacity-50"
                    placeholder="Email Address *"
                  />
                </div>
              </div>
              
              <div className="relative">
                <IoBriefcase className="absolute left-2.5 sm:left-3 top-3 sm:top-4 text-gray-400 dark:text-gray-500 text-sm sm:text-base" />
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  disabled={loading}
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl dark:bg-gray-800/50 bg-gray-50 dark:text-white text-gray-900 border border-gray-200 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FB950] focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/70 disabled:opacity-50"
                  placeholder="Relevant Skills (e.g., Programming, Design, Research)"
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="motivation"
                  rows={4}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  disabled={loading}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl dark:bg-gray-800/50 bg-gray-50 dark:text-white text-gray-900 border border-gray-200 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FB950] focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/70 disabled:opacity-50 resize-none"
                  placeholder="Why do you want to join this project? Share your motivation and how you can contribute..."
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-[#3FB950] to-[#2EA043] hover:from-[#2EA043] hover:to-[#238636] text-white py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 sm:space-x-3 ${loading ? 'opacity-75' : ''}`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span className="text-sm sm:text-base">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <IoCheckmarkCircle className="text-base sm:text-lg" />
                      <span className="text-sm sm:text-base">Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}

        {step === 'not_member' && (
          <>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <IoWarning className="text-2xl sm:text-3xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-3 sm:mb-4 px-2">
                Membership Required
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-2">
                The email address <strong className="text-gray-900 dark:text-white">{formData.email}</strong> is not registered in our Mansa-to-Mansa community. 
                You must be a community member to join projects.
              </p>
              <div className="bg-gradient-to-r from-[#3FB950]/10 to-blue-50 dark:from-[#3FB950]/10 dark:to-gray-800 border border-[#3FB950]/30 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                  <IoPersonAdd className="mr-2 text-[#3FB950]" />
                  Join Our Community
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 text-left">
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-[#3FB950] flex-shrink-0" />Access to collaborative projects</li>
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-[#3FB950] flex-shrink-0" />Professional networking opportunities</li>
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-[#3FB950] flex-shrink-0" />Exclusive resources and workshops</li>
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-[#3FB950] flex-shrink-0" />Career development support</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Link
                  href="/signup"
                  className="w-full bg-gradient-to-r from-[#3FB950] to-[#2EA043] hover:from-[#2EA043] hover:to-[#238636] text-white px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-center flex items-center justify-center space-x-2"
                  onClick={resetModal}
                >
                  <IoPersonAdd className="text-lg" />
                  <span>Join Mansa-to-Mansa Community</span>
                </Link>
                <button
                  onClick={resetModal}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}

        {step === 'success' && (
          <>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg animate-pulse">
                <IoCheckmarkCircle className="text-2xl sm:text-3xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-3 sm:mb-4 px-2">
                🎉 Application Submitted Successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                Thank you for your interest in <strong className="text-gray-900 dark:text-white">{projectTitle}</strong>. 
                Our team will review your application and contact you within 5-7 business days.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-gray-800 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                  <IoCalendar className="mr-2 text-green-500" />
                  What&apos;s Next?
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 text-left">
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-green-500 flex-shrink-0" />Check your email for confirmation</li>
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-green-500 flex-shrink-0" />Stay connected with our community updates</li>
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-green-500 flex-shrink-0" />Follow project progress on our platforms</li>
                </ul>
              </div>
              <button
                onClick={resetModal}
                className="w-full bg-gradient-to-r from-[#3FB950] to-[#2EA043] hover:from-[#2EA043] hover:to-[#238636] text-white px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <IoCheckmarkCircle className="text-lg" />
                <span>Continue Exploring</span>
              </button>
            </div>
          </>
        )}

        {step === 'already_applied' && (
          <>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <IoWarning className="text-2xl sm:text-3xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3 sm:mb-4 px-2">
                Already Applied to Project
              </h3>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 mb-6 mx-2 sm:mx-0">
                <p className="text-orange-700 dark:text-orange-400 text-sm sm:text-base leading-relaxed">
                  {errorMessage}
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-gray-800 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6 mx-2 sm:mx-0">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center justify-center">
                  <IoCalendar className="mr-2 text-blue-500" />
                  What&apos;s Next?
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 text-left">
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-blue-500 flex-shrink-0" />Check your email for application updates</li>
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-blue-500 flex-shrink-0" />Wait for the project team to review your application</li>
                  <li className="flex items-center"><IoCheckmarkCircle className="mr-2 text-blue-500 flex-shrink-0" />Stay engaged with the community while you wait</li>
                </ul>
              </div>
              <button
                onClick={resetModal}
                className="w-full bg-gradient-to-r from-[#3FB950] to-[#2EA043] hover:from-[#2EA043] hover:to-[#238636] text-white px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <IoCheckmarkCircle className="text-lg" />
                <span>Continue Exploring</span>
              </button>
            </div>
          </>
        )}

        {step === 'error' && (
          <>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <IoWarning className="text-2xl sm:text-3xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 dark:text-red-400 mb-3 sm:mb-4 px-2">
                Application Error
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
                <p className="text-red-700 dark:text-red-400 text-sm sm:text-base leading-relaxed">
                  {errorMessage}
                </p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => setStep('details')}
                  className="w-full bg-gradient-to-r from-[#3FB950] to-[#2EA043] hover:from-[#2EA043] hover:to-[#238636] text-white px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <IoCheckmarkCircle className="text-lg" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={resetModal}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
};

// Enhanced ProjectCard component with Join button
interface EnhancedProjectCardProps {
  project: Project | FutureProject;
  isFuture?: boolean;
  onJoinClick: (projectId: number, projectTitle: string) => void;
}

const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({ project, isFuture = false, onJoinClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl || '/cardimage1.png'}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            isFuture 
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          }`}>
            {project.status || (isFuture ? 'Future' : 'Ongoing')}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400 flex items-center">
              <IoGlobe className="mr-1" size={14} />
              Location:
            </span>
            <span className="text-gray-900 dark:text-white font-medium">{project.location}</span>
          </div>
          {(project.launchDate || (project as Project).duration) && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400 flex items-center">
                <IoCalendar className="mr-1" size={14} />
                {isFuture ? 'Launch:' : 'Duration:'}
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                {isFuture ? project.launchDate : (project as Project).duration}
              </span>
            </div>
          )}
        </div>
        
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>
        
        <button
          onClick={() => onJoinClick(project.id, project.title)}
          className="w-full px-4 py-2 bg-[#3FB950] text-white rounded-lg hover:bg-[#2EA043] transition-all duration-200 font-medium flex items-center justify-center space-x-2 transform hover:scale-[1.02] mt-auto"
        >
          <IoPersonAdd size={18} />
          <span>Join Project</span>
        </button>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('future');
  const [joinModal, setJoinModal] = useState<{isOpen: boolean; projectId: number; projectTitle: string}>({
    isOpen: false,
    projectId: 0,
    projectTitle: ''
  });
  const { theme } = useTheme();

  const handleJoinClick = (projectId: number, projectTitle: string) => {
    setJoinModal({
      isOpen: true,
      projectId,
      projectTitle
    });
  };

  const closeJoinModal = () => {
    setJoinModal({
      isOpen: false,
      projectId: 0,
      projectTitle: ''
    });
  };
  
  return (
    <div className="relative flex flex-col min-h-screen dark:bg-[#0D1116] bg-[#F4F6FB] text-white overflow-x-hidden  ">
      {joinModal.isOpen && (
        <JoinProjectModal
          isOpen={joinModal.isOpen}
          onClose={closeJoinModal}
          projectTitle={joinModal.projectTitle}
          projectId={joinModal.projectId}
        />
      )}
            <header className="relative bg-white text-black dark:bg-[#30363D]/80 dark:text-white flex justify-between items-center p-3 lg:justify-center">
            <Link href="/signup" className="dark:text-white text-black text-xs sm:text-base ml-24 sm:ml-20 md:ml-80 lg:ml-20">Join our community</Link>
            
            {/* Admin Button - Top Right */}
            {/* <Link 
              href="/dashboard" 
              className="absolute right-16 lg:right-20 bg-[#3FB950] hover:bg-[#2EA043] text-white px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <IoSettings size={16} />
              <span className="hidden sm:inline">Admin</span>
            </Link> */}
            
            {/* Mobile menu icon */}
            <button
              onClick={() => setIsOpen(true)}
              className="absolute right-4 lg:hidden dark:text-white text-black text-xl sm:text-2xl"
            >
              <IoMenu />
            </button>
          </header>

      <div className='container mx-auto'>
      <main className="relative ">
        {/* Header and Navigation */}
        <div className="relative z-10">
    

          {/* Main nav */}
          <div className="flex flex-col lg:flex-row items-center px-2 sm:px-6 py-2 sm:py-4 md:flex-row">
            <Link href="/"> 
            <Image
              src={theme === 'light' ? '/logo2.png' : '/logo.png'}
              width={150}
              height={75}
              alt="logo"
            />
            </Link>
            {/* Desktop nav */}
            <nav className="hidden lg:flex flex-grow justify-center">
              <ul className="flex flex-wrap space-x-4 lg:space-x-6 xl:space-x-8 dark:text-white text-black">
                <li><Link href="/" className="hover:underline text-sm lg:text-base transition-colors">HOME</Link></li>
                <li><Link href="/about" className="hover:underline text-sm lg:text-base transition-colors">ABOUT US</Link></li>
                <li><Link href="/team" className="hover:underline text-sm lg:text-base transition-colors">TEAM</Link></li>
                <li><Link href="/community" className="hover:underline text-sm lg:text-base transition-colors">COMMUNITY</Link></li>
                <li><Link href="/projects" className="hover:underline text-sm lg:text-base transition-colors text-[#3FB950]">PROJECTS</Link></li>
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
                className={`fixed top-0 left-0 w-full h-full p-6 transform transition-transform duration-300 dark:bg-[#161B22] bg-[#F4F6FB] ${
                  isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="space-y-4 dark:text-white text-black">
                  <li><Link href="/" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">HOME</Link></li>
                  <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">ABOUT US</Link></li>
                  <li><Link href="/team" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">TEAM</Link></li>
                  <li><Link href="/community" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors">COMMUNITY</Link></li>
                  <li><Link href="/projects" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors text-[#3FB950]">PROJECTS</Link></li>
                  <li><Link href="/admin" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors flex items-center space-x-2"><IoSettings size={16} /><span>Admin</span></Link></li>
                </ul>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-2xl mt-4"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className='container mx-auto'>
                      <div className='flex flex-col items-start mt-4 sm:mt-6 md:mt-8 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-black dark:text-white lg:ml-40 md:ml-30 '>
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <IoRocketSharp className="text-2xl sm:text-3xl text-[#3FB950]" />
              <h2 className='text-base sm:text-xl md:text-2xl font-semibold'>Our Projects</h2>
            </div>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 leading-tight max-w-4xl">
              Transforming Communities Through Collaborative Innovation
            </h1>
            <p className="text-xs sm:text-base lg:text-lg mt-2 sm:mt-4 text-black dark:text-gray-300 ">
              Discover the ambitious projects that will shape the future of African communities worldwide. From innovative tech solutions to community-driven initiatives.
            </p>
          </div>
            
          </div>

        </div>
      </main>

      {/* Projects Section */}
      <section className='mt-12 sm:mt-20 md:mt-24 lg:mt-32 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 container mx-auto'>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'ongoing'
                  ? 'bg-[#3FB950] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveTab('future')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'future'
                  ? 'bg-[#3FB950] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Future Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
          {activeTab === 'ongoing'
            ? ongoingProjects.map((project) => (
                <EnhancedProjectCard
                  key={project.id}
                  project={project}
                  onJoinClick={handleJoinClick}
                />
              ))
            : futureProjects.map((project) => (
                <EnhancedProjectCard
                  key={project.id}
                  project={project}
                  isFuture={true}
                  onJoinClick={handleJoinClick}
                />
              ))
          }
        </div>

        {/* Future Impact Vision Section */}
        <FutureImpactStats />

        {/* Call to Action Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8  mx-auto">
            Join our community and be part of projects that will transform lives across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="/signup"
              className="px-6 sm:px-8 py-3 rounded-lg bg-[#3FB950] hover:bg-[#2EA043] transition-all duration-200 text-white text-sm sm:text-base font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join a Project
            </Link>
            <Link
              href="/community"
              className="px-6 sm:px-8 py-3 rounded-lg border border-[#3FB950] text-[#3FB950] hover:bg-[#3FB950] hover:text-white transition-all duration-200 text-sm sm:text-base font-medium transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 px-4 py-6 sm:px-8 sm:py-8 text-xs sm:text-sm text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-900 container mx-auto">
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
};

export default ProjectsPage;