import React from 'react'
import Image from 'next/image'  

function Cardb() {
  return (
    <>
    <div>
      <div className=''>

        <div className=' h-screen bg-blue-500 hover:bg-blue-800'>
          <div className=' h-2/5 flex flex-col px-4 justify-center items-center '>
          <h1 className="font-bold  text-4xl flex justify-center items-center md:mb-10 mb-9  text-white">Digital Marketing</h1>
          <p className=" text-xl tracking-wide font-medium flex justify-center items-center md:mb-10 mb-9  text-white text-center ">Boosts your visibility by engaging customers on social media</p>
          
          <div className=" text-xl tracking-wide font-medium flex justify-center items-center space-x-2  text-white">
            <p>Advertisement</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Posters</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Logos</p>
          </div>

          
          </div>
          <div className='  h-3/5 flex items-center justify-center '>
          <div className=' w-full md:w-10/12'>

          <Image src='/mobile1200.png' alt='BMW' width={1200} height={1200}/>
          </div>

          </div>

        </div>






      </div>



    </div>
      
    </>
  )
}

export default Cardb
