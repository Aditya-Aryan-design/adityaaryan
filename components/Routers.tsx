import NavLinks from "./NavLinks"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react";

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
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-40vmax' },
  }

const Routers = ({showNav,setShowNav}:IProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: '-40vmax' }}
    animate={showNav?'open':'closed'}
    variants={variants}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    
     className="absolute right-0 top-[11vmin] flex flex-col text-center linkBG">
      
      {
        navLinks.map((e,i)=>{
            return <NavLinks key={i} title={e.title} link={e.link}/>
        })
      }

    </motion.div>
  )
}

export default Routers
