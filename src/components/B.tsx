import React from 'react'
import LottieAnimation from "@/components/LottieAnimation";

function B() {
  return (
    <div>
       
       <div className=' flex justify-center'>


        <div className='flex '>

          <div className=' w-10 h-10 xl:w-14 xl:h-14 rounded-full bg-purple-500 mt-2 '></div>
          
          <div className=''>
          <div className=' font-bold text-5xl xl:text-7xl text-black mb-5 ml-5'>
              Business
          </div>

          <div className='xl:text-2xl text-xl tracking-wide text-black font-medium ml-9'>
            <p className=' mb-5'>Promotions</p>
            <p className=' mb-5'>Staff Training</p>
            <p className=' mb-5'>Social Media Presence</p>
            <p className=' mb-5'>Voice of Customer</p>
            <p className=' mb-5'>Feedback Analysis</p>

          </div>

          </div>

          <div>
          <LottieAnimation animationPath="/Assets/business.json" />
          </div>




        </div>



       </div>
      
    </div>
  )
}

export default B
