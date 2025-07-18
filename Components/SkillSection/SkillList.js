"use client";

import { motion} from "framer-motion";


import SkillsCard from "./SkillsCard"
import FullStackSkills from "./FullStackSkills"


export default function SkillsList(){
  

  return(
    
    <div className="overflow-hidden w-full">


    
    <motion.div 
      className="flex mt-14 gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        }}
    >

      {FullStackSkills.map((Skills) => ( <SkillsCard key={Skills.id} {...Skills} /> ))}


    </motion.div>
        
          
    
   
    </div>
  )
}