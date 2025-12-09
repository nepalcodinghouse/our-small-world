import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

function Home() {
  const navigate = useNavigate()

  const handleSeeRules = () => {
    navigate('/about', { state: { fromSeeRules: true } })
  }

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
        <title>Our Small World - Build Meaningful Connections Online</title>
        <meta name="description" content="Welcome to Our Small World, a digital community platform designed for authentic conversations and meaningful connections. Join our welcoming environment where diversity is celebrated." />
        <meta name="keywords" content="community, authentic conversations, meaningful connections, digital platform, online community, diversity, respect" />
        <meta property="og:title" content="Our Small World - Build Meaningful Connections Online" />
        <meta property="og:description" content="Welcome to Our Small World, a digital community platform designed for authentic conversations and meaningful connections." />
        <meta property="og:url" content="https://our-small-world.vercel.app/" />
        <link rel="canonical" href="https://our-small-world.vercel.app/" />
      </Helmet>
      
      <motion.div 
        className="min-h-screen bg-white flex flex-col items-center justify-center p-4 pt-20 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Earth Emoji Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 text-7xl"
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
            className="absolute top-40 right-20 text-6xl"
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
            className="absolute bottom-40 left-20 text-8xl"
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
            className="absolute bottom-20 right-10 text-7xl"
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
            className="absolute top-1/2 left-1/3 text-5xl"
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
            className="absolute top-1/3 right-1/4 text-6xl"
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
        
        <div className="max-w-4xl w-full relative z-10">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="text-indigo-600">Small</span> World
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              Building meaningful connections in a digital space designed for authentic conversations and community engagement.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="https://m.me/cm/AbZilN_b06sPLNYm/?send_source=cm%3Acopy_invite_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
                Join Our Community
              </motion.a>
              <motion.button
                onClick={handleSeeRules}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                See Rules
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Conversations</h3>
              <p className="text-gray-600">Engage in meaningful discussions with like-minded individuals in a supportive environment.</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
              <p className="text-gray-600">Connect with diverse communities and build lasting relationships through shared interests.</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">Your privacy matters. We prioritize secure communications and data protection.</p>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </>
  )
}

export default Home