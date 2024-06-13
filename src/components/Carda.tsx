import React from 'react'
import Image from 'next/image'

function Carda() {
  return (
    <>
    <div>
      <div className=''>

        <div className=' h-screen bg-red-500 hover:bg-red-800'>
          <div className=' h-2/5 flex flex-col px-4 justify-center items-center '>
          <h1 className="font-bold  text-4xl flex justify-center items-center md:mb-10 mb-9  text-white">Website Design</h1>
          <p className=" text-xl tracking-wide font-medium flex justify-center items-center md:mb-10 mb-9 text-white text-center">Effective websites to enhance your business, and drive overall growth</p>
          
          <div className=" text-xl tracking-wide font-medium flex justify-center items-center space-x-2  text-white">
            <p>UI-UX</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Web</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Responsive</p>
          </div>

          
          </div>
          <div className='  h-3/5 flex items-center justify-center '>
          <div className=' w-full'>

          <Image src='/laptop.png' alt='BMW' width={1200} height={1200}/>
          </div>

          </div>

        </div>






      </div>



    </div>
      
    </>
  )
}

export default Carda

