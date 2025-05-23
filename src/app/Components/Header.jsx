import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Button } from "@nextui-org/button"

const Header = () => {
  return (
   <header className="py-8 px-4 text-white" > 
    <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
        <h1 className="text-4xl font-semibold">

        Brian M Muchira <span className="text-accent">.</span>
        </h1>
        </Link>

        <div className="hidden xl:flex gap-5">
        <Nav />
        <Link href="/contact">
        <Button className="hover:bg-accent">Hire me</Button>
        </Link>
        </div>
        
        
        <div className="xl:hidden">
            <MobileNav/>
        </div> 

    </div>
    </header>
  )
}

export default Header