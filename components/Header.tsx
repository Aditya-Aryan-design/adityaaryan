'use client'

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
    <header className='flex justify-between px-[3vmin] py-[2vmin] border-b-[0.1vmin] text-[3.5vmin]' style={{borderColor:theme}}>
      <h1 className='font-semibold text-[4vmin]'>
        <Link href='/'><span style={{color:theme}}>Aditya</span> Aryan</Link>
      </h1>

      {
        showNav?<p onClick={()=>setShowNav(false)}>Close</p>:<p onClick={()=>setShowNav(true)}>MENU</p>
      }

      <Routers showNav={showNav} setShowNav={setShowNav}/>
    </header>
  )
}