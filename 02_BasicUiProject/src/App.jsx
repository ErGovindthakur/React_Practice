import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    // ✨ Added gradient background for a modern look
    <div className='min-h-screen w-full bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 px-12 py-8'>
      <Header />
      <HeroSection />
    </div>
  )
}

export default App
