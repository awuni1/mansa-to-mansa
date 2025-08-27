'use client';

import { IoCheckmarkCircle, IoClose } from 'react-icons/io5';

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function ModernSuccessModal({ showModal, setShowModal }: ModalProps) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={() => setShowModal(false)}
      />
      
      {/* Ultra-Compact Modal */}
      <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5 w-full max-w-xs animate-slideUp">
        
        {/* Minimal Close */}
        <button
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center group"
          onClick={() => setShowModal(false)}
        >
          <IoClose className="text-xs text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white" />
        </button>

        <div className="text-center">
          {/* Animated Icon */}
          <div className="relative mx-auto w-12 h-12 mb-3">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center w-full h-full shadow-md animate-scaleIn">
              <IoCheckmarkCircle className="text-2xl text-white" />
            </div>
          </div>

          {/* Compact Text */}
          <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            Welcome! 🎉
          </h1>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Join WhatsApp to connect with 1000+ members
          </p>

          {/* Buttons */}
          <div className="space-y-2">
            <a
              href="https://chat.whatsapp.com/ERMH6rdc1h52aTL6eib793"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-3 py-2 rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              💬 Join WhatsApp
            </a>

            <button
              onClick={() => setShowModal(false)}
              className="w-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs py-1"
            >
              Skip →
            </button>
          </div>

          {/* Mini Footer */}
          <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Active Community
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}