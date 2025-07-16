"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import ProjectArray from "@/Components/ProjectSection/ProjectArray";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const id = params.id;

  const omniArray = [...ProjectArray].map((item) => ({
    ...item,
    id: item.id,
  }));

  const monarch = omniArray.find((p) => p.id === Number(id));
  return (
    <div className="container name text-white name p-5 md:p-10">
      <div className="mt-5">
        <h1 className="nav-list mb-4 font-semibold text-2xl  md:text-3xl">
          {monarch.name}
        </h1>

        <div className="my-6 p-8 border border-[#A78BFA] rounded-xl">
          <h3 className="nav-list mb-4 font-semibold md:text-2xl  text-xl">
            Description
          </h3>
          <div className="leading-relaxed">
          {monarch.description}

          </div>

          <hr className="my-6" />

          <h3 className="nav-list mb-4 font-semibold md:text-2xl text-xl">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2">
            {monarch.techStack.map((tech, index) => (
              <button
                key={index}
                className=" text-white px-3 py-1 rounded-full border border-[#A78BFA] text-sm hover:bg-[#A78BFA]"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="my-4">
          <a
            href={monarch.visitProject}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <button className="px-4 flex items-center justify-center gap-4 py-3 nav-list rounded-md border border-[#A78BFA] text-sm hover:bg-[#A78BFA] hover:scale-105 transition-transform duration-300">
              <p>Visit Project</p>
              <FaExternalLinkAlt />
            </button>
          </a>
        </div>

        <div className="my-9 flex-col justify-evenly gap-7 flex md:flex-row items-center">
          <div className="md:w-[40%] w-[100%] ">
            <Image
              src={monarch.desktopImage}
              width={800}
              height={600}
              alt={monarch.name}
            />
          </div>
          <div className="md:w-[40%] w-[100%]">
              <Image
              className="mx-auto"
              src={monarch.mobileImage}
              width={200}
              height={600}
              alt={monarch.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
