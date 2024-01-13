'use client'
import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';

function Contact() {

  const color = useAppSelector(state=>state.theme.value)

  

  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>

      <div style={{background:`rgb(${color},0.5)`}} className='py-[2vmin] px-[3vmin] rounded text-[4vmin] space-y-[2vmin]'>

      <p><span className='font-bold'>Name:</span> Aditya Aryan</p>
      
      <p className='hover:text-blue-400 hover:underline'><Link href="mailto:adityaaryan987654321@gmail.com"><span className='font-bold'>Email:</span> adityaaryan987654321@gmail.com</Link></p>

      <p className='hover:text-red-400 hover:underline'><Link href="tel:+919693967364"><span className='font-bold'>Phone No:</span> +919693967364</Link></p>

      <a href='/CV.pdf' download={true} className='text-[3vmin] font-bold rounded-sm py-[1.5vmin] px-[3vmin] float-right text-zinc-900' style={{background:`rgb(${color})`}} >Download CV</a>
      </div>

      <div className='flex mt-[5vh] text-[10vmin] w-full justify-around absolute bottom-5' style={{color:`rgb(${color})`}}>

      <Link href="https://github.com/Aditya-Aryan-design" target='_blank'>
        <FaGithub className='hover:text-white'/>
      </Link>

      <Link href='https://www.linkedin.com/in/aditya-aryan-a25090262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
        <FaLinkedin className='hover:text-white'/>
      </Link>
      </div>
    </div>
  )
}

export default Contact
