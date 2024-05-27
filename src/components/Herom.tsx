import React from 'react'
import LottieAnimation from '@/components/LottieAnimation'

function Herom() {
  return (
    <div>

        <div>

            <div>


                <div className=' m-0 p-0 '>
                <LottieAnimation
                    
                    animationPath="/Assets/business.json"
                 />
                </div>


            </div>


        </div>
      
    </div>
  )
}

export default Herom


import React from 'react'
import LottieAnimation from '@/components/LottieAnimation'

//grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 

function Hero() {
  return (
    <div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  mt-10 '>

            
    
            <div className='ml-0 md:ml-64 '>

            <LottieAnimation 
            className=''
            
            animationPath="/Assets/business.json" />

            </div>


            <div className=''>

              <h1 className=' ml-5 md:ml-0 font-bold tracking-wide text-7xl text-black  mt-28'>Design</h1>
              <h1 className='ml-5 md:ml-0 font-bold tracking-wide text-7xl text-black'>Transform</h1>
              <h1 className='ml-5 md:ml-0 font-bold tracking-wide text-7xl text-black'>Accelerate</h1>
              <p className='ml-5 md:ml-0 text-2xl tracking-wide text-black font-medium mt-5'>We Revolutionize User Experience</p>
              <p className='ml-5 md:ml-0 text-2xl tracking-wide text-black font-medium'>Using Behavioural Science.</p>


            </div>

            

        </div>
      
    </div>
  )
}

export default Hero

import React from 'react'
import Image from 'next/image'

function Wokedwith() {
  return (
    <div>
      <div className=''>
        <div className='mt-10 md:mr-96 md:ml-96  ml-28'>
          <div className='grid grid-cols-3 md:grid-cols-6 justify-items-center md:gap-x-32 gap-y-0  gap-x-40'>
            <div className='w-28 h-28 md:w-36 md:h-36'>
              <Image src='/Sony.png' alt='demo' width={1800} height={400} />
            </div>
            <div className='w-28 h-28 md:w-36 md:h-36'>
              <Image src='/Sony.png' alt='demo' width={1800} height={400} />
            </div>
            <div className='w-28 h-28 md:w-36 md:h-36'>
              <Image src='/Sony.png' alt='demo' width={1800} height={400} />
            </div>
            <div className='w-28 h-28 md:w-36 md:h-36'>
              <Image src='/Sony.png' alt='demo' width={1800} height={400} />
            </div>
            <div className='w-28 h-28 md:w-36 md:h-36'>
              <Image src='/Sony.png' alt='demo' width={1800} height={400} />
            </div>
            <div className='w-28 h-28 md:w-36 md:h-36'>
              <Image src='/Sony.png' alt='demo' width={1800} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wokedwith