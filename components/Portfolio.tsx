import PortfolioCard from "./PortfolioCard"
import { Projects } from "@/constants"

function Portfolio() {
  return (
    <div className="flex flex-wrap justify-evenly space-y-[1vmin] py-[1vmin] h-[80vh] overflow-auto select-none">
      {
        Projects.map((e,i)=><PortfolioCard key={i} title={e.title} desc={e.desc} link={e.link}/>)
      }
      
    </div>
  )
}

export default Portfolio

