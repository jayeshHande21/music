"use client";
import React from "react";
import courseData from  "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'



    // interface Course {
    //     id: number;
    //     title: string;
    //     slug: string;
    //     description: string;
    //     price: number;
    //     instructor: string;
    //     isFeatured: boolean;
    //     image: string;
    //   }
      


const FeaturedCourses = () => { 
    const featuredCourses = courseData.courses.filter((course)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
       
       <div>
            <div className='text-center'>
                <h2 className=''>FEATURED COURSES</h2>
                <p className=''>Learn With The Best</p>
            </div>
        </div>
        
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>{
                featuredCourses.map((course)=>(
                <BackgroundGradient>
                    <div key={course.id} className=' justify-center p-6 m-4'>
                        <p>{course.title}</p>
                        <p>{course.description}</p>
                        <Link href={"/courses"}>{course.slug}</Link>
                        </div>
                        </BackgroundGradient>
                ))}</div>
        </div>
      
        <div className='mt-20 text-center'>
            <Link href={"/courses"}>View All Courses</Link>
        </div>
       
     
       
    </div>
  )
}

export default FeaturedCourses
