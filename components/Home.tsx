'use client'
import { useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"

const Home = () => {
    const color= useAppSelector(state=>state.theme.value)
  return (
    <div className='flex py-[5vh] px-[5vw] select-none'>
        <div className='h-[40vh] w-full border-l-2 pl-[2vmin] overflow-hidden' style={{borderColor: `rgb(${color})`}}>

        <motion.div
        initial={{x:'-100vw'}}
        animate={{x:'0'}}
        className='space-y-[3vmin] font-semibold text-[4vmin]'>

            <h2
            
            className='text-[5vmin]'>Hey there, I'm <span style={{color:`rgb(${color})`}}>Aditya</span></h2>

            <p
             className='text-zinc-400'>
                 My toolkit includes cutting-edge technologies such as React/NextJS, TypeScript, Tailwind CSS, NodeJS, and MongoDB. With a passion for creating seamless user experiences and a knack for clean, efficient code, I'm ready to bring your ideas to life. 
            </p>
        </motion.div>
    </div>
    </div>
  )
}

export default Home
