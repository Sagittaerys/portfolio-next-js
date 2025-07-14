import Image from "next/image"

export default function Intro(){
  return(
    <div className="container mx-auto  p-5 md:p-10">
        <div className="intro bg-[url('/tile.png')] bg-repeat bg-[length:32px_32px] bg-center  w-full my-7 p-3 h-[100%] text-[#FFFFFF] flex flex-col py-7 rounded-full mx-auto">

              <div className="image mt-3 mx-auto">
                  <Image className="rounded-full" src= "/Chibi Me!.png" width={202} height={197} alt="sagittaerys"/>
              </div>
              <div className="name text-center py-3 space-y-2">
                  <h2 className="text-[28px] font-bold">Olamilekan Aremu</h2>
                  <p className="text-[14px] text-[#A78BFA] font-semibold">Creative Software Developer</p>
              </div>

              <div className="text-center mx-auto my-4 text-[14px] intro-description md:max-w-[793px]">
                  <p>As a dedicated fullstack developer specializing in both frontend and backend technologies, I excel at creating seamless digital experiences through clean code, innovative solutions, and a deep growing understanding of the entire software development lifecycle.</p>
              </div>

              <button className="rounded-full name hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px]">
                  Contact Me
              </button>
        </div>
    </div>
  )
}