'use client'
import React from 'react'
import Link from 'next/link'
import {useState}  from 'react';
import { instagram,linkedin,Souq_logo,github_icon,menu2 } from '@/public/assets';
import CartDrawer from './CartDrawer';
import Image from 'next/image';
import {motion} from 'framer-motion'
import NavMenu from './NavMenu';

function Hedear() {
  const [isopen ,setisopen] = useState(false);

  const openmenu =()=>{
    setisopen(!isopen);
    console.log(isopen);
  }
  return (
    <>
    <nav className='max-container lg:fixed border-b-2 z-50 w-full flex items-center justify-between pt-0 px-5  md:left-1/2 md:transform md:-translate-x-1/2  '>

      <div className=" flex items-center lg:w-1/4">
        <button className=' hover:scale-105'>
        <Image className=' lg:w-52 ' src={Souq_logo} alt='logo' width={250} height={150}/>
        </button>
      </div>

      
  
  <div className=' hidden md:flex'>
  <NavMenu/>
  </div>
  
        
      <div className=' hidden lg:flex items-center justify-end w-1/4 gap-6'>
        
        <div>
        <Link href="/" className=' cursor-pointer ml-3 hover:text-[#9E276A] text-sm text-[#9E276A]'>تسجيل</Link>
        <button className=' border-2 border-[#9E276A] py-1 px-3 rounded-md hover:bg-[#151B20] hover:text-white' >تسجيل دخول</button>
        </div>
        <CartDrawer/>
      </div>


       {/*togelmenu button in mobile dev */}
       <div className=' lg:hidden flex flex-row gap-2'>
       <button onClick={openmenu} >
        <Image className='' src={menu2} alt='logo' width={32} height={32}/>
      </button>
      <CartDrawer/>
      </div>
      

       
        
    </nav>
    </>
  )
}

export default Hedear