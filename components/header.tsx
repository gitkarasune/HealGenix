import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <nav className="container flex max-w-3xl items-center justify-between">
            <div>
                <Link href={"/"} className="text-xl">
                    Kendev
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
