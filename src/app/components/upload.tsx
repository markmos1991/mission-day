
"use Client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Upload = () => {
    return (

        <section id="upload" className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-2 text-5xl font-medium text-gray-900 sm:text-4xl">Send your groups images</h1>
            <p className="mb-8 text-lg leading-relaxed">Click below to send an email with your images attached.</p>
            
            <div className="flex justify-center">
            <a href="mailto:mark.amos@aquinas.ac.uk" className="inline-flex px-6 py-2 text-lg text-white bg-red-600 border-0 rounded focus:outline-none hover:bg-gray-500 first-letter:text-primary hover:text-primary-dark">Send Images
              <Link href="#upload"></Link>
              </a>
              
            </div>
          </div>
        </div>
      </section>
    );
};

export default Upload
