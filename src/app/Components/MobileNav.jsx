import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";


const links = [
  {
      name:"home",
      path:"/home",
  },
  {
      name:"experience",
      path:"/experience",
  },
  {
      name:"skills",
      path:"/skills",
  },
  {
      name:"projects",
 
      path:"/contact",
  },];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
       <Menu className="size-[30px] text-accent " />
      </SheetTrigger>
      <SheetContent>
        <div className="">logo</div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav