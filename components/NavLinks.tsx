import Link from "next/link";
import { Dispatch,SetStateAction } from "react";
import { useAppSelector } from "@/redux/hooks";



function NavLinks({title, link, active, setShowNav}
  :{title:string,
    link:string,
    active: boolean,
    setShowNav: Dispatch<SetStateAction<boolean>>
  }) {

    const color = useAppSelector(state=>state.theme.value)

  return (
    <Link 
    onClick={()=>setShowNav(false)}
    
    href={link} className='px-[3vmin] py-[2vmin] border-b-[0.2vmin] hover:bg-zinc-800' style={active?{color:`rgb(${color})`}:{color:'#777'}}>
      {title}
    </Link>
  )
}

export default NavLinks
