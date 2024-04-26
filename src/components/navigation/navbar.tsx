import Link from "next/link"

import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Button variant={"link"} asChild>
        <Link href="/">Home</Link>
      </Button>

      <Button variant={"link"} asChild>
        <Link href="/auth/register">register</Link>
      </Button>
    </nav>
  )
}

export default Navbar