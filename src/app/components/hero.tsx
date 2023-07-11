import React from 'react'
import Link from 'next/link';
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
    
    <div className="w-full text-center lg:w-2/3">
      <h1 className="mb-2 text-5xl font-medium text-gray-900 sm:text-4xl">Street Art Mission Day</h1>
      <h2 className="m-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Northern Quarter</h2>
      <p className="mb-8 text-lg leading-relaxed">Information for the day including; Street art information, points of interest, and happy hours nearby. The aim of the game, upload a picture of your team at each piece of art listed below.</p>
      <div className="flex justify-center">
        <button className="inline-flex px-6 py-2 text-lg text-white bg-red-600 border-0 rounded focus:outline-none hover:bg-gray-500"><Link href="#upload">Upload Images</Link></button>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero