import Image from "next/image"
import Link from "next/link"

export default function Intro(){
  return(
    <div className="container fade-in mx-auto  p-5 md:p-10">
        <div className="intro bg-[url('/tile.png')] bg-repeat bg-[length:32px_32px] bg-center  w-full my-7 p-3 h-[100%] text-[#FFFFFF] flex flex-col py-7 rounded-full mx-auto">

              <div className="image mt-3 mx-auto">
                  <Image className="rounded-full" src= "/Chibi Me!.png" width={202} height={197} alt="sagittaerys"/>
              </div>
              <div className="name text-center py-3 space-y-2">
                  <h2 className="text-[28px] md:text-[63px] font-bold">Olamilekan Aremu</h2>
                  <p className="text-[14px] md:text-[26px] text-[#A78BFA] font-semibold">Creative Software Developer</p>
              </div>

              <div className="text-center mx-auto my-4 md:text-[19px] text-[14px] intro-description md:max-w-[793px]">
                  <p>As a dedicated software developer specializing in both frontend and backend technologies, I excel at creating seamless digital experiences through clean code, innovative solutions, and a growing understanding of the entire software development lifecycle.</p>
              </div>

            <Link className="mx-auto" href= "#contact">
              <button className="rounded-full hover:scale-105 transition-transform duration-300 md:text-[15px] nav-list hover:bg-[#A78BFA]  mt-4 text-[13px] border border-[#A78BFA] w-[164px] h-[41px]">
                  Contact Me
              </button>
            
            </Link>
        </div>
    </div>
  )
}