import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({id, desktopImage, name, cardDescription, }) {
  return (
    <div className="md:w-[40%] container text-white name">
      <div className="rounded-md cursor-pointer">
        <div>
          <Image
            className="mb-3"
            src={desktopImage}
            width={800}
            height={600}
            alt={name}
          />
          <div className=" p-6">

          <h2 className="md:text-[17px] text-[14px] font-bold mb-3">
            {name}
          </h2>

          <p className="md:font-regular text-[13px] md:text-[15px]">
           {cardDescription}
          </p>

          <Link href={`/Project/${id}`}>
          <button className="rounded-full nav-list hover:bg-[#A78BFA] mx-auto mt-4 text-[14px] border border-[#A78BFA] w-[164px] h-[41px] hover:scale-105 transition-transform duration-300">
                  View Project 
          </button>
          </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
