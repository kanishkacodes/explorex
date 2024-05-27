import React from 'react'
import Image from 'next/image'

function Card3() {
  return (
    <div className=" h-screen   p-4 bg-purple-500 hover:bg-purple-800 text-white">
      <div className="flex flex-col justify-between h-full">
        <div className="text-center">
          <h1 className="font-bold md:text-5xl text-3xl mb-10 mt-10">BMW</h1>
          <p className="mb-10 mt-10 md:text-2xl text-xl tracking-wide font-medium">Optimize the effortless on-the-go lifestyle</p>
          
          <div className="flex justify-center items-center space-x-2 mb-10 md:text-2xl text-xl tracking-wide font-medium">
            <p>UI-UX</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Web</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Mobile</p>
          </div>
        </div>
        
        <div className="relative flex-grow">
          <Image src='/mobileb.png' alt='BMW' layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}

export default Card3
