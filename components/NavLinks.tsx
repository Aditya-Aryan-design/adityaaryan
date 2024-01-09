import Link from "next/link"

function NavLinks({title, link}:{title:string,link:string}) {
  return (
    <Link 
    href={link} className="px-[3vmin] py-[2vmin] border-b-[0.2vmin]">
      {title}
    </Link>
  )
}

export default NavLinks
