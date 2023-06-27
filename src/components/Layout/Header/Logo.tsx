import React from "react"
import Link from "next/link"
import CONFIG from "site.config"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    <Link href="/" aria-label={CONFIG.blog.title}>
      <div className="flex items-center">
        <div className="ml-2 text-black dark:text-white header-name font-bold">
          {CONFIG.blog.title}
        </div>
      </div>
    </Link>
  )
}

export default Logo
