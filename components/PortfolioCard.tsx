'use client'
import Link from "next/link"
import { useAppSelector } from "@/redux/hooks"

function PortfolioCard({title, desc, link}:{title:string, desc:string, link:string}) {

    const color = useAppSelector(state=>state.theme.value)

  return (
    <div className="border-white max-w-[300px] border rounded-2xl p-[4vmin] h-fit">
        
            <p className="font-bold mb-[3vmin] text-[1.4rem]" style={{color:`rgb(${color})`}}>{title}</p>
            <p>{desc}</p>
            <Link href={link} target="_blank" className="text-blue-400 underline">Check it out</Link>
        </div>
  )
}

export default PortfolioCard
