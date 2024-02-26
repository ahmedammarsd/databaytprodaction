import React from 'react'
import p1 from "@/public/assets/p1.png"
import Image from 'next/image'
function badges() {
  return (
    <div className='max-container flex flex-col items-center justify-center gap-5 my-20  '>
      <div className='my-10 text-center'>
        <p>لم يكتمل </p>
        <h1 className=' text-5xl text-[#9E276A]  font-bold'>إختار باقتك بعنايه </h1>
        <p>باقات تلبي كل احتياجاتك</p>
      </div>
      <div className='flex flex-row gap-3'>
        <div className=' flex flex-col items-center justify-center w-80 border-[1px] py-10 rounded-md shadow-md'>
          <h1 className=' font-bold text-3xl mb-3'>الأساسيه</h1>
          <Image className='h-fit' src={p1} alt='po'/>
          <h1 dir='ltr' className=' font-medium text-3xl'>150 <span className=' text-sm'>K.D</span></h1>
          <ul className=' mt-10 w-[90%] mx-5'>
            <li className=' text-center text-lg text-white bg-[#99759F] w-full'>20 بوست</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#C489C8]'>20 ستوري</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#99759F]'>1 بوست ابداعي</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#C489C8]'>2Gif</li>
            <li className=' text-center text-lg text-white bg-[#99759F] mt-1 w-full'>20 بوست</li>
          </ul>
          <button className='  mt-5 text-xl'>
            إشترك الان
          </button>


        </div>
        <div className=' flex flex-col items-center justify-center w-80 border-[1px] py-10 rounded-md shadow-md'>
          <h1 className=' font-bold text-3xl mb-3'>الأساسيه بلس</h1>
          <Image className='h-fit' src={p1} alt='po'/>
          <h1 dir='ltr' className=' font-medium text-3xl'>350 <span className=' text-sm'>K.D</span></h1>
          <ul className=' mt-10 w-[90%] mx-5'>
            <li className=' text-center text-lg text-white bg-[#99759F] w-full'>20 بوست</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#C489C8]'>20 ستوري</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#99759F]'>1 بوست ابداعي</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#C489C8]'>2Gif</li>
            <li className=' text-center text-lg text-white bg-[#99759F] mt-1 w-full'>20 بوست</li>
          </ul>
          <button className=' mt-5 text-lg'>
            إشترك الان
          </button>


        </div>
        <div className=' flex flex-col items-center justify-center w-80 border-[1px] py-5 rounded-md shadow-md'>
          <h1 className=' font-bold text-3xl mb-3'>إحترافيه</h1>
          <Image className='h-fit' src={p1} alt='po'/>
          <h1 dir='ltr' className=' font-medium text-3xl'>150 <span className=' text-sm'>K.D</span></h1>
          <ul className=' mt-10 w-[90%] mx-5'>
            <li className=' text-center text-lg text-white bg-[#99759F] w-full'>20 بوست</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#C489C8]'>20 ستوري</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#99759F]'>1 بوست ابداعي</li>
            <li className=' text-center text-lg text-white w-full mt-1 bg-[#C489C8]'>2Gif</li>
            <li className=' text-center text-lg text-white bg-[#99759F] mt-1 w-full'>20 بوست</li>
          </ul>
          <button className=' mt-5 text-lg'>
            إشترك الان
          </button>


        </div>
       
      </div>
    </div>
  )
}

export default badges