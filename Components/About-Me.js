"use client";

export default function AboutMe() {
  return (
    <div id="about" className="container p-5 md:p-10" >
      <div className="name text-center py-3 space-y-2">
        <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">About Me</h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          Get to know me
        </p>
      </div>
      <div id="resume" className="fade-in contents my-4 md:text-[17px] text-[13px] flex flex-col gap-3 md:max-w-[840px] mx-auto text-center text-white">
        <p>
          Hi! I'm <span className="text-[#A78BFA]">Olamilekan</span>, a software developer who builds web applications
          from front to back. I work with modern technologies like React, Next.js,
          Node.js, Express.js, and cloud platforms to create scalable solutions that
          solve real problems. 
        </p>
          <p>
          I enjoy the challenge of turning ideas into working software, whether that's building responsive user interfaces,
          designing efficient APIs, or setting up robust databases. My focus is
          on writing clean, maintainable code and delivering applications that
          users actually want to use.
          </p>  
          
        <p>
          I believe good software should be intuitive, fast, and
          reliable. If you're looking to build something new or improve an
          existing application, I'd love to help bring your vision to life.
          Let's chat about your project!
        </p>

        <button  onClick={ () => window.open('/Olamilekan Aremu CV II.pdf', '_blank') } className="rounded-full nav-list hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px]">
                  Download Resume
        </button>

      </div>
    </div>
  );
}
