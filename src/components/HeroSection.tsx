import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'



const HeroSection = () => {
  return (
    <div  className='text-white h-auto md:h-[40rem] w-full  rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md-py-0 py-10'> 
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <div className='p-4 relative z-10 w-full text-center'>
        
        <h1>Master the art of Music</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam velit corporis minus perferendis. Odio repellat voluptatum, repudiandae sapiente harum, corrupti vel rerum est, quidem eum voluptatem consequatur inventore corporis.</p>
        <div className='mt-4'>
        <Link href={"/"}> 
        <Button>Explore Courses</Button>
            
        </Link>
        </div>
        
        </div>
      
    </div>
  )

}

export default HeroSection
