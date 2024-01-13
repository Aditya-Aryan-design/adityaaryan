'use client'
import { useAppSelector } from "@/redux/hooks"

function AboutComponents({title,desc}:{title:string,desc:string}) {

  const color = useAppSelector(state=>state.theme.value)
  return (
    <div
      
      className='px-[3vmin] py-[2vmin] rounded-lg max-w-[400px] m-auto'
      style={{background:`rgb(${color},0.4)`}}
    >
        <h2 className="font-bold text-[1.5rem]">{title}</h2>
        <p>
            {desc}
        </p>
      </div>
  )
}

export default AboutComponents
