"use client";

import SkillsCard from "./SkillsCard"
import FullStackSkills from "./FullStackSkills"
import Slider from "react-slick";

export default function SkillsList(){
  const settings = {
    pauseOnHover: false,
    infinite: true,
    speed: 250,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: "ondemand",
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    responsive: [
    {
      breakpoint: 640, 
      settings: "unslick" 
    }
  ]
   };

  return(
    <Slider {...settings} className=" flex flex-wrap gap-4 justify-evenly">

        
          
          {FullStackSkills.map((Skills) => ( <SkillsCard key={Skills.id} {...Skills} /> ))}
    
    </ Slider>
  )
}