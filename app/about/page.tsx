import { AboutData } from "@/constants"
import AboutComponents from "@/components/AboutComponents"

const page = () => {
  
  return (
    <div
      className='flex flex-wrap px-[2vmin] py-[2vmin] space-y-[2vmin] justify-around h-[85vh] overflow-auto md:h-[80vh]'
    >
      {
        AboutData.map((e, i) => {
          return (
              <AboutComponents key={i} title={e.title} desc={e.desc} />
          )
        })
      }
    </div>
  )
}

export default page
