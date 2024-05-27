import React from 'react'
import Card1 from "@/components/Card1"
import Card2 from "@/components/Card2"
import Card3 from "@/components/Card3"

function Cardmain() {
  return (
    <div className='md:flex md:space-x-2 space-x-0 '>
      <div className='w-full md:w-1/3  '><Card1/></div>
      <div className='w-full md:w-1/3 md:ml-2 md:mr-2 '><Card2/></div>
      <div className='w-full md:w-1/3 md:ml-2 md:mr-2 '><Card3/></div>
    </div>
  )
}

export default Cardmain
