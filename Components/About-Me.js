"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div id="about" className="container p-5 md:p-10" >
      <div className="name text-center py-3 space-y-2">
        <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">About Me</h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          Get to know me
        </p>
      </div>
      <div id="resume" className="fade-in contents space-y-7 my-4 md:text-[17px] text-[13px] flex flex-col gap-3 md:max-w-[840px] mx-auto text-center text-white">
        <p>
          Hi! I'm <span className="text-[#A78BFA]">Olamilekan</span>, a software developer who enjoys turning ideas into clean, functional, and responsive interfaces.
        </p>

        <p>
          I’ve always been fascinated by the idea of codes, that feeling of being able to build things that actually matter resonates with me on a very deep level. Maybe it’s because, in some way, it feels like we’re tapping into the raw concept of creation itself.
          </p>  
          
        <p>
          Right now, I’m focused on sharpening my fullstack skills: working with APIs, serverless backends, and designing UIs that feel effortless to use. There’s something strangely addictive about getting it all to click.
        </p>

        <p>
          Outside of code, I’m often diving headfirst into mythological or historical canons, scribbling down startup ideas I may or may not launch, or refining my favorite side projects.
        </p>

        <button  onClick={ () => window.open('/Olamilekan Aremu CV II.pdf', '_blank') } className="rounded-full nav-list hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px] hover:scale-105 transition-transform duration-300">
                  Download Resume
        </button>

        <div className="h-[250px] relative my-15 flex flex-col w-full  group">
            <div className="absolute top-0 left-[20%] bg-white px-2 pt-2 -rotate-12  rounded-lg overflow-hidden transition-all duration-500 group-hover:-rotate-12 group-hover:-translate-x-4 group-hover:scale-105">

              <div className="w-[200px] h-[200px]">
                  <Image className="object-cover rounded-lg w-full h-full" src="/sage_2.jpg" width={200} height={200} alt="sagittaerys" />
              </div>

              <span className="text-xs flex justify-center py-1 pb-3 italic text-black w-full text-center">sagittaerys_</span>
            </div>

            <div className="absolute top-10 right-[20%] bg-white px-2 pt-2 rotate-12 rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:translate-x-4 group-hover:scale-105">

              <div className="w-[200px] h-[200px]">
                  <Image className="object-cover rounded-lg w-full h-full" src="/sage_.jpg" width={200} height={200} alt="sagittaerys" />
              </div>

              <span className="text-xs flex justify-center py-1 pb-3 italic text-black w-full text-center">@sagittaric</span>
            </div>
        </div>

      </div>
    </div>
  );
}
