import React from 'react'
import Image from 'next/image'

const Streetart = () => {
  return (
<div className="pt-4 " id="street-art-section">
    <section  className="text-gray-600 body-font">
      <div className="flex flex-col items-center justify-center px-4 mx-auto mt-10 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">
        <h1 className="mb-4 text-5xl font-medium text-gray-900 title-font sm:text-4xl">Street Art</h1>
     
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
              <div style={{ position: "relative", width: "100%", height: "0", paddingBottom: "75%" }}>
                <Image
                  src="/burgess.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="burgess mural"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">Tankpetrol</h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Anthony Burgess Mural</h1>
                <p className="mb-3 leading-relaxed">Tankpetrol's large mural of A Clockwork Orange author Anthony Burgess can be found in the private parking area off Oak Street.</p>
              </div>
            </div>
          </div>



          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
            <div style={{ position: "relative", width: "100%", height: "0", paddingBottom: "75%" }}>
                <Image
                  src="/22bees.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="burgess mural"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">Qubek</h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">22 Bees</h1>

                <p className="mb-3 leading-relaxed">On the 22nd May 2017 Manchester Arena was targeted by terrorists. Twenty-two people cruelly lost their lives in the attack and 250 people were injured. In response to the attack many artists took to the streets of Manchester and painted murals of worker bees, the symbol of the city, as a mark of solidarity.</p>

              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
            <div style={{ position: "relative", width: "100%", height: "0", paddingBottom: "75%" }}>
                <Image
                  src="/citiesofhope.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="burgess mural"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">Dale Grimshaw</h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Cities of Hope</h1>

                <p className="mb-3 leading-relaxed">London based artist Dale Grimshaws contribution to the Cities of Hope festival in 2016. This colourful mural can be found on Spear Street.</p>

              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
            <div style={{ position: "relative", width: "100%", height: "0", paddingBottom: "75%" }}>
                <Image
                  src="/converse.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="burgess mural"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">Faunagraphic</h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Converse Blue Tit</h1>

                <p className="mb-3 leading-relaxed">Commissioned by Converse as part of their Wall to Wall project this giant mural of a Blue Tit was created by artist Faunagraphic back in 2011. It has become one of the Northern Quarters most iconic murals. It can be found on Newton Street; head north away from Piccadilly and youll find it on your right hand side just before the junction with Hilton Street.</p>

              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
            <div style={{ position: "relative", width: "100%", height: "0", paddingBottom: "75%" }}>
                <Image
                  src="/invader.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="burgess mural"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">Invader</h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Space Invader</h1>

                <p className="mb-3 leading-relaxed">Easy to miss, a mosaic made space invader by the street artist Invader. Invader is an anonymous French street artist. He is known for his ceramic tile mosaics modeled on the pixelated art of 1970s to 1980s 8-bit video games. Located somewhere on Faraday Street.</p>

              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
            <div style={{ position: "relative", width: "100%", height: "0", paddingBottom: "75%" }}>
                <Image
                  src="/outhouse.jpeg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="burgess mural"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">Various Artists</h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Outhouse Current Project</h1>

                <p className="mb-3 leading-relaxed">Out House has been curating street art in prime locations across the Northern Quarter since 2010. The former public toilets at Stevenson Square and the substation on Tib Street provide their main canvases for inviting artists from all over to contribute to the Northern Quarters street art scene. Snap a pic of whatever is currently there.</p>

              </div>

              
            </div>
            
          </div>

          
        </div>
        <div className='items-center pt-6 text-center'>
        <p className="mb-8 text-sm leading-relaxed ">There is a selection of curated pieces of street art below - you should try to get a picture of each of these during the day. For more information on the art in an around the NQ click below.</p>
        <a href="https://streetartnq.com/" target="_blank" rel="noopener noreferrer" className='text-red-600 underline'> <button className="inline-flex px-6 py-2 text-lg text-white bg-red-600 border-0 rounded focus:outline-none hover:bg-gray-500">Learn More</button></a>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Streetart