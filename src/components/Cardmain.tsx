import React from 'react'
import Card1 from "@/components/Card1"
import Card2 from "@/components/Card2"
import Card3 from "@/components/Card3"
import Carda from '@/components/Carda'
import Cardb from '@/components/Cardb'
import Cardc from '@/components/Cardc'

function Cardmain() {
  return (
    <div className='md:flex md:space-x-2 space-x-0  '>
      <div className='w-full h-screen md:w-1/3  '><Carda/></div>
      <div className='w-full h-screen md:w-1/3 '><Cardb/></div>
      <div className='w-full h-screen md:w-1/3  '><Cardc/></div>
    </div>
  )
}

export default Cardmain
