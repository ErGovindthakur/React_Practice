import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import heroImg from "../assets/shopping-hero.jpeg" // 👉 add your image in assets folder
import aiIcon from "../assets/ai_icon.png"
import Ai from "../AI/Ai";

const Home = () => {

  const [aiPage,setAiPage] = useState(false);

  const handleAiContainer = () => {
    setAiPage(prev => !prev)
  }
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
      {/* Left Side - Text */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-start space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-blue-700 font-extrabold text-3xl md:text-6xl leading-tight">
          Welcome to India&apos;s Largest <br /> Shopping Platform
        </h1>
        <p className="text-gray-700 text-lg md:text-2xl">
          We offer all types of products at affordable prices.  
          Shop smarter, faster, and better with us.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Explore
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={heroImg}
          alt="Shopping"
          className="w-[300px] md:w-[500px]"
        />
      </motion.div>
      <div className="fixed bottom-15 right-9 md:right-15" >
      {
        aiPage ? (<Ai handleAiContainer={handleAiContainer}/>) :
        (<img
        src={aiIcon}
        alt="Ai Icon"
        className="w-[54px] rounded-full shadow-md border border-black"
        onClick={handleAiContainer}
        />)
      }
      </div>
    </div>
  );
};

export default Home;
