"use client";
  import React from 'react'
  import  {motion }from 'framer-motion';
  import databayt from "@/public/assets/databat.png"
  import Image from 'next/image'
  import { ContainerScroll } from "@/components/ui/container-scroll-animation";
 

  

function HeroSection() {

  return (
    <main className=''>
       
       <div className='max-container relative flex flex-col w-full justify-between items-center lg:flex-row lg:overflow-hidden lg:min-h-screen pt-10 lg:pt-0 px-10 '>
         
         <div className='  flex items-start -mt-[150px] md:-mt-[90px] '>
          {/**here is the scroll contaner whis the heder text */}
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                      <>
                        <motion.button
                          initial={{opacity:0, y:10}}
                          animate={{opacity:100 ,y:0}}
                          transition={{duration:2 ,delay:0 }} 
                          className=" bg-[#0C0B10] text-white px-5 py-1 mb-1 md:text-sm text-[10px] rounded-full font-medium ">
                          Powered by AI
                        </motion.button>

                        <motion.h1
                          initial={{opacity:0, y:10}}
                          animate={{opacity:100 ,y:0}}
                          transition={{duration:2 ,delay:.3 }} 
                          className="lg:text-xl font-semibold text-[#0C0B10] dark:text-white"
                        >
                          Business automation <br />
                          <motion.span
                            className="text-3xl md:text-[3rem] font-bold mt-1 leading-none"
                            initial={{opacity:0 ,y:10 }}
                            animate={{opacity:100,y:0}}
                            transition={{duration:2 ,delay:.6 }}
                          >
                            Automate the Boring,
                          </motion.span>
                          <motion.span
                            initial={{opacity:0}}
                            animate={{opacity:100}}
                            transition={{duration:2 ,delay:1.2 }}
                            className="text-3xl md:text-[3rem] font-bold mt-1 leading-none text-[#ffe695]">
                              Elevate the Extraordinary.
                          </motion.span>
                            
                          </motion.h1>
                        </>
                      }
                  >
                    <Image
                      src={databayt}
                      alt="hero"
                      height={720}
                      width={1400}
                      className="mx-auto rounded-2xl object-cover h-full object-left-top"
                      draggable={false}
                    />
                </ContainerScroll>
            </div>
          </div>
                  

              
              
          
        </div>
    </main>
  )
}

export default HeroSection