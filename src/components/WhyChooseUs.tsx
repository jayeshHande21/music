"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
        id: 1,
        title: "Guitar Basics",
        description: "Learn the fundamentals of playing guitar, from chords to strumming patterns.",
        instructor: "John Doe",
        duration: "6 weeks",
        price: 99.99,
        imageUrl: "https://example.com/guitar_image.jpg",
      },
      {
        id: 2,
        title: "Piano Masterclass",
        description: "Unlock your potential on the piano with our advanced masterclass.",
        instructor: "Jane Smith",
        duration: "8 weeks",
        price: 149.99,
        imageUrl: "https://example.com/piano_image.jpg",
      },
      {
        id: 3,
        title: "Drumming Techniques",
        description: "Discover various drumming techniques and styles, suitable for all skill levels.",
        instructor: "Mike Johnson",
        duration: "4 weeks",
        price: 79.99,
        imageUrl: "https://example.com/drum_image.jpg",
      },
      {
        id: 4,
        title: "Bass Guitar Workshop",
        description: "Join our workshop to master the art of playing bass guitar like a pro.",
        instructor: "Sarah Lee",
        duration: "5 weeks",
        price: 119.99,
        imageUrl: "https://example.com/bass_image.jpg",
      },
      {
        id: 5,
        title: "Vocal Training Program",
        description: "Enhance your singing skills and vocal range with personalized training sessions.",
        instructor: "David Brown",
        duration: "10 weeks",
        price: 199.99,
        imageUrl: "https://example.com/vocal_image.jpg",
      },
      {
        id: 6,
        title: "Songwriting Workshop",
        description: "Learn the art of crafting compelling songs from experienced songwriters.",
        instructor: "Emily Taylor",
        duration: "6 weeks",
        price: 129.99,
        imageUrl: "https://example.com/songwriting_image.jpg",
      },
      {
        id: 7,
        title: "Music Production Course",
        description: "Explore the world of music production, from recording to mixing and mastering.",
        instructor: "Alex Johnson",
        duration: "12 weeks",
        price: 249.99,
        imageUrl: "https://example.com/production_image.jpg",
      },
      {
        id: 8,
        title: "Music Theory Fundamentals",
        description: "Master the essential concepts of music theory to deepen your understanding of music.",
        instructor: "Michael White",
        duration: "8 weeks",
        price: 139.99,
        imageUrl: "https://example.com/theory_image.jpg",
      },
  ];

const WhyChooseUs = () => {
  return (
    <div>
        <h1>
            <StickyScroll content={musicSchoolContent}/>
        </h1>
      
    </div>
  )
}

export default WhyChooseUs
