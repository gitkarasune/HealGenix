import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-9 px-1 backdrop-blur-sm">
        <nav className="container flex max-w-[1500px] items-center justify-between mx-auto">
            <div>
                <Link href={"/"} className="text-xl">
                    Logo
                </Link>
            </div>

            {/* The Theme Toggler */}
            <div>
                <ThemeToggle/>
            </div>
        </nav>
    </header>
  )
}
