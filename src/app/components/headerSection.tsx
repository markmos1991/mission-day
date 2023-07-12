
"use client";
import React from 'react';
import Link from 'next/link';
import { UseScrollPosition } from '../../Hooks/useScrollPosition';


const Header = () => {
  const scrollPosition = UseScrollPosition();



  
  return (

    <nav className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0 ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter" : "shadow-none"}`}>
      <header >



        <div className="container flex flex-col items-center p-5 mx-auto md:flex-row">
          <div className="flex items-center justify-end text-center no-wrap text-bold lg:w-2/5 ">





            <Link
             href="#street-art-section" scroll={true} className="p-2 mr-5 bg-gray-100 border border-red-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-red-600 opacity-70">
             Street Art
            </Link>

            <Link href="#food" className="p-2 mr-5 bg-gray-100 border border-red-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-red-600 opacity-70">
             Food & Drink
            </Link>

            <Link href="#upload" className="p-2 mr-5 bg-gray-100 border border-red-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-red-600 opacity-70">
             Upload Pics
            </Link>

          </div>



        </div>
      </header>
    </nav>
  )
}

export default Header