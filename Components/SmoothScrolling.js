'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'


gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll() {
  useEffect(() => {
    console.log('SmoothScroll is starting...')
    
    
    const lenis = new Lenis({
      duration: 1.2,  
      smooth: true,  
    })
    
    console.log('Lenis smooth scrolling created')
    
   
    lenis.on('scroll', ScrollTrigger.update)
    
    console.log('Lenis connected to ScrollTrigger')
    
    
    function animationLoop(time) {
      lenis.raf(time)                   
      requestAnimationFrame(animationLoop) 
    }
    requestAnimationFrame(animationLoop)
    
    console.log('Animation loop started')
    
    // creating first fade-in animation
    gsap.fromTo('.fade-in', 
      {
        
        opacity: 0,    
        y: 50         
      },
      {
        
        opacity: 1,    
        y: 0,        
        duration: 1,   
        ease: 'power2.out', // Easing curve (starts fast, slows down)
        
        // ScrollTrigger configuration
        scrollTrigger: {
          trigger: '.fade-in',    
          start: 'top 80%',      
          end: 'bottom 20%',      
          toggleActions: 'play none none reverse', 
          
          
          onEnter: () => console.log(' Fade-in animation started!'),
          onLeave: () => console.log(' Fade-in animation reversed!'),
        }
      }
    )
    
    console.log(' Fade-in animation created')
    
    // STEP 6: Cleanup when component unmounts
    return () => {
      console.log('Cleaning up...')
      lenis.destroy()  // Stop smooth scrolling
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()) // Remove all scroll triggers
    }
    
  }, []) 
  
 
  return null
}
