import SkillsList from "./SkillSection/SkillList";

export default function Skills(){
  return(
    <div className="container my-15 p-5 md:p-10">
      <div className="name text-center py-3 space-y-2">
        <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">My Skills</h2>
        <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
          Technical Proficiency
        </p>
        <div className="text-white w-full my-6 hide-scrollbar">
          <SkillsList />
        </div>
      </div>
    </div>
  )
}