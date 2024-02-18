import { UserButton } from "@clerk/nextjs"

export const Header = () => {
  return (
    <header>
    <UserButton afterSignOutUrl="/" />
    </header>
  )
}
