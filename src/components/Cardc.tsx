import React from 'react'
import Image from 'next/image'

function Cardc() {
  return (
    <>
    <div>
      <div className=''>

        <div className=' h-screen  bg-purple-500 hover:bg-purple-800'>
          <div className=' h-2/5 flex flex-col px-4 justify-center items-center'>
          <h1 className="font-bold  text-4xl flex justify-center items-center md:mb-10 mb-9 text-white">Branding</h1>
          <p className=" text-xl tracking-wide font-medium flex justify-center items-center md:mb-10 mb-9 text-white text-center ">Enhancing your business identity by clearly presenting the strategies</p>
          
          <div className=" text-xl tracking-wide font-medium flex justify-center items-center space-x-2  text-white">
            <p>Feedbacks</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Strategy</p>
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Promotions</p>
          </div>

          
          </div>
          <div className='  h-3/5 flex items-center justify-center '>
          <div className=' w-full md:w-10/12'>

          <Image src='/menu1.png' alt='BMW' width={1200} height={1200}/>
          </div>

          </div>

        </div>






      </div>



    </div>
      
    </>
  )
}

export default Cardc
