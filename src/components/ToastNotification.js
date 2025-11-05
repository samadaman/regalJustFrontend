'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => resetTimer();
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      >
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300"
          style={{
            WebkitBackdropFilter: 'blur(2px)',
            backdropFilter: 'blur(2px)'
          }}
        />
        <motion.div
          onMouseEnter={() => {
            setIsHovered(true);
            resetTimer();
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            startTimer();
          }}
          className={[
            'relative w-full max-w-md rounded-2xl bg-white/95 shadow-2xl',
            'border border-white/20 backdrop-blur-lg',
            'transform transition-all duration-300',
            isHovered ? 'scale-[1.02] shadow-xl' : 'scale-100',
            'overflow-hidden',
          ].join(' ')}
          style={{
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {/* Decorative gradient border */}
          <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-transparent to-blue-400/30 rounded-2xl" />
          </div>

          <div className="relative p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-50">
                  <svg 
                    className="h-5 w-5 text-amber-600" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H10v-1a1 1 0 00-1-1z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Stock Update</h3>
                <div className="mt-1">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We're currently out of stock, but new inventory is arriving soon. 
                    <span className="block mt-1 text-amber-600 font-medium">Check back in a few days!</span>
                  </p>
                </div>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    onClick={() => setIsVisible(false)}
                    className="inline-flex rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-4">
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                  initial={{ width: '100%' }}
                  animate={{ width: isHovered ? '100%' : '0%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  onAnimationComplete={() => !isHovered && setIsVisible(false)}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToastNotification;
