'use client'
import { useAppSelector,useAppDispatch } from "@/redux/hooks"
import { motion } from "framer-motion"
import { bgChanger } from "@/redux/slice/bgRemover"


function RemoveBG() {
    const variants = {
        on: { x: '2vmin' },
        off: { x: '-2vmin' },
      }
      


    const color = useAppSelector(state=>state.theme.value)
    const bg = useAppSelector(state=>state.bg.value)
    const dispatch = useAppDispatch()
  return (
    <div className='absolute z-40 left-2 bottom-2 border-[0.3vmin] w-[10vmin] h-[6vmin] rounded-full flex justify-center items-center'>

      <motion.button
        className='h-[4vmin] w-[4vmin] rounded-full'
        style={{background:`radial-gradient(rgb(${color}),transparent)`}}

        initial={{x:'2vmin'}}
        animate={bg? variants.on:variants.off}
        onClick={()=>dispatch(bgChanger(!bg))}
        >

        </motion.button>

    </div>
  )
}

export default RemoveBG
