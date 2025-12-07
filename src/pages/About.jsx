import React, { useEffect, useRef } from 'react'
import RulesAccordion from '../components/RulesAccordion'
import { useLocation } from 'react-router-dom'

function About() {
  const location = useLocation()
  const rulesRef = useRef(null)

  useEffect(() => {
    if (location.state?.fromSeeRules) {
      setTimeout(() => {
        rulesRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Earth Emoji Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 text-7xl animate-pulse">🌍</div>
        <div className="absolute top-40 right-20 text-6xl animate-bounce">🌎</div>
        <div className="absolute bottom-40 left-20 text-8xl animate-pulse delay-300">🌏</div>
        <div className="absolute bottom-20 right-10 text-7xl animate-bounce delay-500">🌍</div>
        <div className="absolute top-1/2 left-1/3 text-5xl animate-pulse delay-700">🌎</div>
        <div className="absolute top-1/3 right-1/4 text-6xl animate-bounce delay-1000">🌏</div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-indigo-400">Our Small World</span>
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Our Small World is a digital community platform designed to foster meaningful connections and authentic conversations. 
              We believe in creating a space where people can engage in thoughtful discussions, share ideas, and build lasting relationships.
            </p>
            
            <p className="text-gray-300 mb-6">
              Our mission is to provide a welcoming environment where diversity is celebrated, respect is paramount, and every voice matters. 
              We're committed to maintaining a positive and inclusive community where members can express themselves freely while adhering to our core values.
            </p>
            
            <p className="text-gray-300 mb-6">
              This platform was created to bridge gaps between people from different backgrounds, cultures, and experiences, 
              bringing together like-minded individuals who are passionate about making a positive impact in the world.
            </p>
            
            <div className="mt-10 pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Ownership</h2>
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  This community is proudly 
                  <span className="mx-2 text-indigo-400 font-bold">owned by</span> 
                  <span className="text-indigo-400 font-bold">Pema Gurung</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Our Values
            </h3>
            <ul className="text-gray-300 space-y-2 mt-4">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Respect and inclusivity for all members</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Authentic and meaningful conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Positive community engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Privacy and security for all users</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Vision
            </h3>
            <p className="text-gray-300 mt-4">
              We envision a world where digital communities serve as bridges between cultures, 
              fostering understanding and collaboration among people from all walks of life. 
              Our goal is to create a platform that inspires positive change and meaningful connections.
            </p>
          </div>
        </div>
        
        {/* Group Rules Accordion */}
        <div ref={rulesRef}>
          <RulesAccordion />
        </div>
      </div>
    </div>
  )
}

export default About