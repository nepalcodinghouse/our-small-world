import React, { useEffect, useRef, useState } from 'react'
import RulesAccordion from '../components/RulesAccordion'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

function About() {
  const location = useLocation()
  const rulesRef = useRef(null)
  const [isSummaryOpen, setIsSummaryOpen] = useState(false)

  useEffect(() => {
    if (location.state?.fromSeeRules) {
      setTimeout(() => {
        rulesRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  // AI-generated summary content
  const summaryContent = `
    Our Small World is a digital community platform focused on fostering meaningful connections through authentic conversations. 
    
    Key aspects of our community:
    • Mission: Create a welcoming environment where diversity is celebrated and every voice matters
    • Core Values: Respect, inclusivity, authenticity, and privacy
    • Vision: Bridge cultural gaps and inspire positive global connections
    • Ownership: Proudly owned by Pema Gurung
    
    The platform emphasizes secure communications and brings together individuals passionate about making a positive impact. Our community guidelines ensure a respectful and engaging environment for all members.
  `;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>About Our Small World - Community Guidelines & Values</title>
        <meta name="description" content="Learn about Our Small World community platform, our mission, values, and guidelines. Discover how we foster meaningful connections through authentic conversations." />
        <meta name="keywords" content="about, community guidelines, values, mission, vision, digital platform, authentic conversations, community rules" />
        <meta property="og:title" content="About Our Small World - Community Guidelines & Values" />
        <meta property="og:description" content="Learn about Our Small World community platform, our mission, values, and guidelines." />
        <meta property="og:url" content="https://our-small-world.vercel.app/about" />
        <link rel="canonical" href="https://our-small-world.vercel.app/about" />
      </Helmet>
      
      <motion.div 
        className="min-h-screen bg-white py-16 px-4 sm:py-20 sm:px-6 lg:px-8 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
      >
        {/* Summary Modal */}
        <AnimatePresence>
          {isSummaryOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSummaryOpen(false)}
              />
              
              {/* Modal Content */}
              <motion.div
                className="relative bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <div className="bg-indigo-600 p-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">AI Summary</h3>
                  <button 
                    onClick={() => setIsSummaryOpen(false)}
                    className="text-white hover:text-gray-200 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-5 overflow-y-auto flex-grow">
                  <div className="prose prose-sm max-w-none text-gray-700">
                    <p>{summaryContent}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>AI-generated summary for quick overview</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-5 py-3 flex justify-end">
                  <button
                    onClick={() => setIsSummaryOpen(false)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Earth Emoji Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 text-7xl hidden sm:block"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🌍
          </motion.div>
          <motion.div 
            className="absolute top-40 right-20 text-6xl hidden md:block"
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🌎
          </motion.div>
          <motion.div 
            className="absolute bottom-40 left-20 text-8xl hidden lg:block"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🌏
          </motion.div>
          <motion.div 
            className="absolute bottom-20 right-10 text-7xl hidden md:block"
            animate={{ 
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🌍
          </motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/3 text-5xl hidden lg:block"
            animate={{ 
              x: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🌎
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-1/4 text-6xl hidden xl:block"
            animate={{ 
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🌏
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={itemVariants}
          >
            <div className="flex justify-center items-center mb-4">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                About <span className="text-indigo-600">Our Small World</span>
              </motion.h1>
              
              {/* Summary Icon/Button */}
              <motion.button
                className="ml-4 p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 focus:outline-none"
                onClick={() => setIsSummaryOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                aria-label="Show AI summary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
            </div>
            
            <motion.div 
              className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-lg mb-10 sm:mb-12"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="prose prose-lg max-w-none">
              <motion.p 
                className="text-gray-600 mb-5 sm:mb-6 text-base sm:text-lg"
                variants={itemVariants}
              >
                Our Small World is a digital community platform designed to foster meaningful connections and authentic conversations. 
                We believe in creating a space where people can engage in thoughtful discussions, share ideas, and build lasting relationships.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 mb-5 sm:mb-6 text-base sm:text-lg"
                variants={itemVariants}
              >
                Our mission is to provide a welcoming environment where diversity is celebrated, respect is paramount, and every voice matters. 
                We're committed to maintaining a positive and inclusive community where members can express themselves freely while adhering to our core values.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 mb-5 sm:mb-6 text-base sm:text-lg"
                variants={itemVariants}
              >
                This platform was created to bridge gaps between people from different backgrounds, cultures, and experiences, 
                bringing together like-minded individuals who are passionate about making a positive impact in the world.
              </motion.p>
              
              <motion.div 
                className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ownership</h2>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                  <p className="text-lg sm:text-xl text-gray-700 flex flex-col sm:flex-row items-center justify-center">
                    <span className="mb-2 sm:mb-0 sm:mr-2">This community is proudly</span>
                    <span className="text-indigo-600 font-bold">owned by Pema Gurung</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <motion.div 
              className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 transition-all duration-300 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Our Values
              </h3>
              <ul className="text-gray-600 space-y-2 mt-3 sm:mt-4">
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span className="text-sm sm:text-base">Respect and inclusivity for all members</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span className="text-sm sm:text-base">Authentic and meaningful conversations</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span className="text-sm sm:text-base">Positive community engagement</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span className="text-sm sm:text-base">Privacy and security for all users</span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 transition-all duration-300 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Our Vision
              </h3>
              <motion.p 
                className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base"
                variants={itemVariants}
              >
                We envision a world where digital communities serve as bridges between cultures, 
                fostering understanding and collaboration among people from all walks of life. 
                Our goal is to create a platform that inspires positive change and meaningful connections.
              </motion.p>
            </motion.div>
          </div>
          
          {/* Group Rules Accordion */}
          <motion.div 
            ref={rulesRef}
            variants={itemVariants}
          >
            <RulesAccordion />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default About