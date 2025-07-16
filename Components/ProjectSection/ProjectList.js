import ProjectArray from "./ProjectArray";
import ProjectCard from "./ProjectCard";

export default function ProjectList(){
  return(
    <div className="flex flex-col w-[100%] md:flex-row justify-evenly gap-6">
        {ProjectArray.map((projects) => ( <ProjectCard key={projects.id} {...projects} /> ))}
    </div>
  )
  
}