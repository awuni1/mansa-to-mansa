'use client';

import { useState } from 'react';
import { IoPersonAdd, IoMail, IoCall, IoGlobe, IoLocation, IoLink, IoBriefcase, IoSchool, IoCheckmarkCircle, IoClose } from 'react-icons/io5';

export default function BecomeMemberForm() {
  type MemberFormData = {
    name: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    linkedin?: string;
    experience?: string;
    areaOfExpertise?: string;
    school?: string;
    level?: string;
    occupation?: string;
    jobtitle?: string;
    industry?: string;
    major?: string;
  };

  const initialFormState: MemberFormData = {
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    linkedin: '',
    experience: '',
    areaOfExpertise: '',
    school: '',
    level: '',
    occupation: '',
    jobtitle: '',
    industry: '',
    major: '',
  };

  const [formData, setFormData] = useState<MemberFormData>(initialFormState);
  const [membershipType, setMembershipType] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.name || !formData.email || !formData.phone || !membershipType || !gender) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    const cleanedFormData = Object.fromEntries(
      Object.entries(formData).filter(([, v]) => v !== '' && v !== undefined)
    );

    const submissionData = {
      ...cleanedFormData,
      membershiptype: membershipType,
      gender,
    };

    // Dynamic import to avoid SSR issues
    const { supabase } = await import('@/lib/supabase');
    const { error: insertError } = await supabase.from('members').insert([submissionData]);

    if (insertError) {
      console.error('Insert error:', insertError);
      setError(insertError.message || 'Something went wrong. Please try again.');
    } else {
      setFormData(initialFormState);
      setMembershipType('');
      setGender('');
      setShowModal(true);
    }

    setLoading(false);
  };

  const inputStyle =
    'w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl dark:bg-gray-800/50 bg-gray-50 dark:text-white text-gray-900 border border-gray-200 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FB950] focus:border-transparent transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/70';

  const iconStyle = 'absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm sm:text-base';

  return (
    <>
      <style>{`
        /* Removed problematic text-orientation-fix that was breaking layout */
        .floating-label {
          transition: all 0.3s ease;
        }
        .input-group:focus-within .floating-label {
          transform: translateY(-0.5rem) scale(0.85);
          color: #3FB950;
        }
        .form-container {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .dark .form-container {
          background: linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(31,41,55,0.9) 100%);
          border: 1px solid rgba(75,85,99,0.3);
        }
        .gradient-text {
          background: linear-gradient(135deg, #3FB950 0%, #2EA043 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .form-section {
          position: relative;
          opacity: 0;
          animation: slideUp 0.6s ease forwards;
        }
        .form-section:nth-child(1) { animation-delay: 0.1s; }
        .form-section:nth-child(2) { animation-delay: 0.2s; }
        .form-section:nth-child(3) { animation-delay: 0.3s; }
        .form-section:nth-child(4) { animation-delay: 0.4s; }
        .form-section:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* World-class modal animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Modern Success Modal Animations */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center py-4 sm:py-8 px-2 sm:px-4">
        <div className="form-container p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-2xl max-w-5xl w-full backdrop-blur-sm">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-[#3FB950] to-[#2EA043] rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <IoPersonAdd className="text-2xl sm:text-3xl text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
              Become a <span className="gradient-text">Member</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base ma mx-auto leading-relaxed px-2">
              Join our vibrant community and unlock opportunities for collaboration, learning, and professional growth across Africa and beyond.
            </p>
          </div>

          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg sm:rounded-xl text-red-700 dark:text-red-400 text-center text-sm sm:text-base mx-2 sm:mx-0">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Personal Information Section */}
            <div className="form-section">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center px-2 sm:px-0">
                <IoPersonAdd className="mr-2 sm:mr-3 text-[#3FB950] text-lg sm:text-xl" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                <div className="relative">
                  <IoPersonAdd className={iconStyle} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputStyle} pl-11 sm:pl-12`}
                    required
                  />
                </div>
                <div className="relative">
                  <IoMail className={iconStyle} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputStyle} pl-11 sm:pl-12`}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact & Location Section */}
            <div className="form-section">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center px-2 sm:px-0">
                <IoGlobe className="mr-2 sm:mr-3 text-[#3FB950] text-lg sm:text-xl" />
                Contact & Location
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                <div className="relative">
                  <IoCall className={iconStyle} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputStyle} pl-11 sm:pl-12`}
                    required
                  />
                </div>
                <div className="relative">
                  <IoGlobe className={iconStyle} />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country *"
                    value={formData.country}
                    onChange={handleChange}
                    className={`${inputStyle} pl-11 sm:pl-12`}
                    required
                  />
                </div>
                <div className="relative">
                  <IoLocation className={iconStyle} />
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleChange}
                    className={`${inputStyle} pl-11 sm:pl-12`}
                    required
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-4 px-2 sm:px-0">
                <div className="relative">
                  <IoLink className={iconStyle} />
                  <input
                    type="url"
                    name="linkedin"
                    placeholder="LinkedIn Profile (Optional)"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className={`${inputStyle} pl-11 sm:pl-12`}
                  />
                </div>
              </div>
            </div>

            {/* Membership Details Section */}
            <div className="form-section">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center px-2 sm:px-0">
                <IoBriefcase className="mr-2 sm:mr-3 text-[#3FB950] text-lg sm:text-xl" />
                Membership Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                <select
                  aria-label="Membership type"
                  value={membershipType}
                  onChange={(e) => setMembershipType(e.target.value)}
                  className={inputStyle}
                  required
                >
                  <option value="">Select Membership Type *</option>
                  <option value="mentor">🎯 Mentor - Share Your Expertise</option>
                  <option value="student">📚 Student - Learn & Grow</option>
                  <option value="other">🌟 Other - Explore Opportunities</option>
                </select>
                <select
                  aria-label="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={inputStyle}
                  required
                >
                  <option value="">Select Gender *</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Dynamic Fields based on membership type */}
            {membershipType === 'mentor' && (
              <div className="form-section">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center px-2 sm:px-0">
                  <IoBriefcase className="mr-2 sm:mr-3 text-[#3FB950] text-lg sm:text-xl" />
                  Professional Background
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                  <input 
                    type="text" 
                    name="industry" 
                    placeholder="Industry/Field" 
                    value={formData.industry} 
                    onChange={handleChange} 
                    className={inputStyle} 
                  />
                  <input 
                    type="text" 
                    name="jobtitle" 
                    placeholder="Current Job Title" 
                    value={formData.jobtitle} 
                    onChange={handleChange} 
                    className={inputStyle} 
                  />
                  <input 
                    type="text" 
                    name="experience" 
                    placeholder="Years of Experience" 
                    value={formData.experience} 
                    onChange={handleChange} 
                    className={inputStyle} 
                  />
                </div>
              </div>
            )}

            {membershipType === 'student' && (
              <div className="form-section">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center px-2 sm:px-0">
                  <IoSchool className="mr-2 sm:mr-3 text-[#3FB950] text-lg sm:text-xl" />
                  Academic Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                  <input 
                    type="text" 
                    name="school" 
                    placeholder="School/University Name" 
                    value={formData.school} 
                    onChange={handleChange} 
                    className={inputStyle} 
                  />
                  <input 
                    type="text" 
                    name="level" 
                    placeholder="Education Level" 
                    value={formData.level} 
                    onChange={handleChange} 
                    className={inputStyle} 
                  />
                  <input 
                    type="text" 
                    name="major" 
                    placeholder="Field of Study" 
                    value={formData.major} 
                    onChange={handleChange} 
                    className={inputStyle} 
                  />
                </div>
              </div>
            )}

            {membershipType === 'other' && (
              <div className="form-section">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center px-2 sm:px-0">
                  <IoBriefcase className="mr-2 sm:mr-3 text-[#3FB950] text-lg sm:text-xl" />
                  About You
                </h3>
                <div className="px-2 sm:px-0">
                  <input 
                    type="text" 
                    name="occupation" 
                    placeholder="Your Current Occupation" 
                    value={formData.occupation} 
                    onChange={handleChange} 
                    className={inputStyle} 
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6 px-2 sm:px-0">
              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-[#3FB950] to-[#2EA043] hover:from-[#2EA043] hover:to-[#238636] text-white py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 sm:space-x-3 ${loading ? 'opacity-75' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                    <span className="text-sm sm:text-base">Submitting...</span>
                  </>
                ) : (
                  <>
                    <IoCheckmarkCircle className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">Join Mansa-to-Mansa Community</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Responsive Success Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
              {/* Background */}
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
              
              {/* Multi-Screen Responsive Modal Container */}
              <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10  animate-slideUp border border-gray-100 dark:border-gray-800">
                
                {/* Multi-Screen Close Button */}
                <button
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center group hover:scale-110"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                </button>

                {/* Multi-Screen Success Content */}
                <div className="text-center">
                  {/* Responsive Success Icon */}
                  <div className="relative mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-3 sm:mb-4 md:mb-5 lg:mb-6 animate-scaleIn">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center w-full h-full shadow-md">
                      <IoCheckmarkCircle className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white" />
                    </div>
                  </div>

                  {/* Mobile-Responsive Welcome Message */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                    <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
                      Welcome to Mansa! 🎉
                    </h1>
                    
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed px-2 sm:px-0">
                      You&apos;re officially part of our community. Join WhatsApp to connect with 1000+ members.
                    </p>
                  </div>

                  {/* Mobile-Responsive Action Buttons */}
                  <div className="space-y-2">
                    {/* Mobile-Optimized WhatsApp Button */}
                    <a
                      href="https://chat.whatsapp.com/ERMH6rdc1h52aTL6eib793"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base active:scale-95"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span className="text-sm sm:text-base">💬</span>
                        <span>Join WhatsApp</span>
                      </span>
                    </a>

              

                   

                  {/* Mobile-Friendly Footer */}
                  <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] sm:text-xs text-gray-400">1000+ Active</span>
                      </div>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-[10px] sm:text-xs text-gray-400">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </main>
    </>
  );
}
