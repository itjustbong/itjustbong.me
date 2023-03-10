import Link from "next/link"
import { useRouter } from "next/router"

const NavBar: React.FC = () => {
  const router = useRouter()
  const links = [
    { id: 1, name: "메인", to: "/" },
    { id: 2, name: "경험", to: "/feed" },
    // { id: 3, name: "기록", to: "/post" },
    { id: 4, name: "이력서", to: "/resume" },
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className={`block ml-4 text-black dark:text-gray-50 nav ${
              router.asPath === link.to &&
              "font-bold underline underline-offset-8"
            }`}
          >
            <Link href={link.to}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
