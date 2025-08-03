import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function ProjectCard({
  id,
  desktopImage,
  name,
  cardDescription,
}) {
  return (
    <div className="md:w-[30%] container border border-[#A78BFA] rounded-xl   text-white name">
      <div className="cursor-pointer">
        <div>
          <Image
            className="mb-3 rounded-xl"
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
                <div className="flex items-center hover:gap-5 justify-center gap-3">
                  <p>View Project</p>
                  <IoIosArrowForward className="text-white font-bold" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
