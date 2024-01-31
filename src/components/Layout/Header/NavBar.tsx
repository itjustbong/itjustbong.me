import Link from "next/link"
import { useRouter } from "next/router"
import { isMobile } from "react-device-detect"

const NavBar: React.FC = () => {
  const router = useRouter()
  const links = [
    { id: 1, name: "메인", to: "/" },
    // { id: 2, name: "포스팅", to: "/post" },
    { id: 3, name: "경험", to: "/feed" },
    { id: 4, name: "이력서", to: "/resume" },
  ]

  const routeLinks = (to: string) => {
    if (to === "/resume" && isMobile) {
      router.push("/resume-mobile")
    } else {
      router.push(to)
    }
  }

  return (
    <div className="flex-shrink-0 cursor-pointer">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className={`block ml-4 text-black dark:text-gray-50 nav ${
              router.asPath === link.to &&
              "font-bold underline underline-offset-8"
            }`}
          >
            <div onClick={() => routeLinks(link.to)}>{link.name}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
