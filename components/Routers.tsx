import NavLinks from "./NavLinks"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

interface IProps {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

// define navlinks
const navLinks = [
    {title:'ABOUT',link:'/about'},
    {title:'PORTFOLIO',link:'/portfolio'},
    {title:'RESUME',link:'/resume'},
    {title:'CONTACT',link:'/contact'},
]


// animation constant
const variants = {
    open: { y: 0 },
    closed: { y: '-150%' },
  }

const Routers = ({showNav,setShowNav}:IProps) => {

  const pathname = usePathname();

  return (
    <motion.div
    initial={{ y: '-150%' }}
    animate={showNav?'open':'closed'}
    variants={variants}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    
     className="absolute right-0 top-[14vmin] flex flex-col text-center linkBG">
      
      {
        navLinks.map((e,i)=>{
            return <NavLinks
              key={i} title={e.title}
              link={e.link}
              active={pathname === e.link?true:false}
              setShowNav={setShowNav}
              />
        })
      }

    </motion.div>
  )
}

export default Routers
