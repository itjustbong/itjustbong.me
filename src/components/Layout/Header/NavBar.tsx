import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "메인", to: "/" },
    { id: 2, name: "기록", to: "/post" },
    { id: 3, name: "포폴", to: "/portfolio" },
    { id: 4, name: "경험", to: "/history" },
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black dark:text-gray-50 nav"
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
