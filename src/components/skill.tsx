import React from 'react'
import Image from 'next/image'

type SkillProps = {
  icon: string
  name: string
}

function Skill({ icon, name }: SkillProps) {
  return (
    <div className="relative group inline-block">
      <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition duration-300 bg-[#B4A784]"></div>
      <div className="relative w-24 h-24 md:w-38 md:h-38 transition-transform duration-300 hover:scale-110">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Skill
