import { navLinks } from "@/constants/nav-links"
import Link from "next/link"

export const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
            <Link href='/'>Profile</Link>
            {navLinks.map((el, i) => (
                <Link key={i} href={el.route}>{el.label}</Link>
            ))}
        </div>
    </aside>
  )
}
