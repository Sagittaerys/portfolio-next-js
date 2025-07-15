import Image from "next/image"

export default function SkillsCard({name, image}){
  return(
    <div className="w-[120px] space-y-4">
        <div>
            <Image className="mx-auto" src={image} width={100} height={110} alt={name} />
        </div>
        <p className="name font-bold  mt-2">{name}</p>
    </div>
  )
}