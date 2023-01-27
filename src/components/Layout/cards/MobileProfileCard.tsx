import CONFIG from "site.config"
import Image from "next/image"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="p-1 mb-3 dark:text-white flex justify-between">
        💻 Profile
        <div className="flex gap-3">
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub className="text-2xl" />
          </a>
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram className="text-2xl" />
          </a>
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail className="text-2xl flex-shrink-0" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="text-2xl flex-shrink-0" />
          </a>
        </div>
      </div>
      <div className="p-2 rounded-md bg-white dark:bg-zinc-700 mb-4">
        <div className="flex items-center gap-2">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            alt="profile_image"
            className="relative rounded-md"
          />
          <div className="h-fit dark:text-white">
            <div className=" text-xl  italic font-bold">
              {CONFIG.profile.name}
            </div>
            <div className="text-sm text-gray-500 mb-2 dark:text-gray-400">
              {CONFIG.profile.role}
            </div>
            <div className="text-sm">{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileProfileCard
