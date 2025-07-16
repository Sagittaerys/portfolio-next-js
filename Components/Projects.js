import Image from "next/image"
import ProjectList from "./ProjectSection/ProjectList"

export default function Projects(){
  return(
    <div id="projects" className="container my-15 p-5 md:p-10">
          <div className="name text-center py-3 space-y-2">
                  <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">Projects</h2>
                  <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
                    My Creations
                  </p>
                </div>
                    <div className="mt-8">
                      <ProjectList />
                    </div>
    </div>
  )
}