
"use client";
import React from 'react';
import Link from 'next/link';
import { UseScrollPosition } from '../../Hooks/useScrollPosition';


const Header = () => {
  const scrollPosition = UseScrollPosition();



  
  return (

    <nav className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0 ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter" : "shadow-none"}`}>
      <header >



        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <nav className="flex flex-wrap items-center space-evenly text-bold lg:w-2/5 md:ml-auto">





            <Link
             href="#street-art-section" scroll={true} className="p-2 mr-5 bg-gray-100 border border-blue-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-blue-600 opacity-70">
             Street Art
            </Link>

            <Link href="#food" className="p-2 mr-5 bg-gray-100 border border-blue-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-blue-600 opacity-70">
             Food & Drink
            </Link>

            <Link href="#upload" className="p-2 mr-5 bg-gray-100 border border-blue-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-blue-600 opacity-70">
             Upload Pics
            </Link>

          </nav>



        </div>
      </header>
    </nav>
  )
}

export default Header