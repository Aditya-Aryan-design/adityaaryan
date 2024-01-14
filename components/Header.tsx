'use client'
import { FaHamburger } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { colorChanger } from '@/redux/slice/theme'
import { useEffect, useState } from 'react'
import Routers from './Routers'
import Link from 'next/link'

export function Header() {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(colorChanger()) 
    
  },[])


const [showNav, setShowNav] = useState(false)


  return (
    <header className='flex justify-between px-[3vmin] py-[2vmin] border-b-[0.1vmin] text-[4.5vmin] sm:text-[4vmin] md:text-[3.5vmin] z-50 select-none' style={{borderColor:`rgb(${theme})`, boxShadow:`0 0 2vmin 0.2vmin rgb(${theme})`}}>
      
      <h1 className='font-semibold text-[5vmin] sm:[4.5vmin] md:[4vmin]'>
        <Link href='/'><span style={{color:`rgb(${theme}`}}>Aditya</span> Aryan</Link>
      </h1>

      {
        showNav?<button onClick={()=>setShowNav(false)}><GiKnifeFork /></button>:<button onClick={()=>setShowNav(true)}><FaHamburger /></button>
      }

      <Routers showNav={showNav} setShowNav={setShowNav}/>
    </header>
  )
}