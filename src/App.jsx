import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import './App.css'

// Wrapper component to access location for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <>
      <Helmet>
        <title>Our Small World - Connect & Engage in Meaningful Conversations</title>
        <meta name="description" content="Join Our Small World, a digital community platform fostering meaningful connections through authentic conversations. Celebrate diversity, respect every voice, and build lasting relationships." />
        <meta name="keywords" content="community, conversations, connections, diversity, respect, authentic, digital platform, messaging, social" />
        <meta name="author" content="Pema Gurung" />
        <meta property="og:title" content="Our Small World - Connect & Engage in Meaningful Conversations" />
        <meta property="og:description" content="Join Our Small World, a digital community platform fostering meaningful connections through authentic conversations. Celebrate diversity, respect every voice, and build lasting relationships." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://our-small-world.vercel.app/" />
        <meta property="og:image" content="/vite.svg" />
        <meta property="og:site_name" content="Our Small World" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Small World - Connect & Engage in Meaningful Conversations" />
        <meta name="twitter:description" content="Join Our Small World, a digital community platform fostering meaningful connections through authentic conversations." />
        <meta name="twitter:image" content="/vite.svg" />
        <link rel="canonical" href="https://our-small-world.vercel.app/" />
      </Helmet>
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App