import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className=" container p-5 md:p-10">
      <div className="name text-center py-3 space-y-2">
        <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">What I do</h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          My Services
        </p>
      </div>

      <div className="contents my-4 md:text-[17px] gap-4 text-[13px] flex flex-col justify-evenly md:w-[100%] md:flex-row mx-auto text-white">

    <div className="w-[100%] md:w-[30%] h-[273px] p-6 rounded-md cursor-pointer hover:scale-105 hover:border-2 hover:border-[#A78BFA] transition-transform duration-300">
        <div>
            <Image className="mb-3" src="/service-icon.png" width={44} height={44} alt="service-icon" />
            <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
                Frontend Development
            </h2>
            <p className="md:font-regular text-[13px] md:text-[15px]">
                Designing and building interactive, cross-device web applications with React, Next.js, and TypeScript while incorporating best-in-class UI/UX standards and performance optimization.
            </p>
        </div>
    </div>

    <div className=" w-[100%] md:w-[30%] h-[273px] p-6 rounded-md cursor-pointer hover:scale-105 hover:border-2 hover:border-[#A78BFA] transition-transform duration-300">
        <div>
            <Image className="mb-3" src="/service-icon.png" width={44} height={44} alt="service-icon" />
            <h2 className="md:text-[17px] text-[14px] md:font-semibold mb-3">
                Backend Development
            </h2>
            <p className="md:font-regular text-[13px] md:text-[15px]">
                Developing powerful backend systems and API solutions with Node.js, Express.js, and various database platforms, prioritizing system scalability and comprehensive security measures.
            </p>
        </div>
    </div>

    <div className="w-[100%] md:w-[30%] h-[273px] p-6 rounded-md cursor-pointer hover:border-2 hover:border-[#A78BFA] hover:scale-105 transition-transform duration-300">
        <div>
            <Image className="mb-3" src="/service-icon.png" width={44} height={44} alt="service-icon" />
            <h2 className="md:text-[17px] text-[14px] md:font-semibold mb-3">
                Cloud Computing
            </h2>
            <p className="md:font-regular text-[13px] md:text-[15px]">
                Configuring and managing distributed cloud systems, leveraging cloud service providers for high-performance application deployment and intelligent infrastructure management.
            </p>
        </div>
    </div>

</div>
    </div>
  );
}
