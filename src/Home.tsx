import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <>
    <section className='bg-[url(\snakeHero.jpg)] bg-cover bg-center  min-h-[60vh]
          md:min-h-[70vh]
          lg:min-h-[80vh]
          px-5
          sm:px-10
          md:px-16'>
    <motion.div
    initial={{x:-30,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1.2, delay:0.5,ease:"easeInOut"}} 
    className=" flex flex-col justify-start max-w-4xl sm:pt-50 pt-20  space-y-2 pb-5  sm:pb-10">
    <h1 className="text-white font-Gabarito font-bold text-xl sm:text-4xl ">Snake Matter More Than You Think</h1>
    <p className="text-[#cbc5c5] sm:text-base text-xs w-xs sm:w-full font-mono">Snakes are essential contributors to healthy ecosystems, regulating prey populations and maintaining natural food chains.
    Without snakes, ecological imbalance would increase pests, crop damage, and environmental instability affecting humans
    and wildlife.</p>

    <div className="flex items-center pt-3">
      <button className="sm:text-sm text-xs font-DmSans font-bold sm:px-2 sm:py-1 px-1.5 py-1 bg-white group flex gap-2 items-center rounded-lg">Explore <FaArrowRightLong className=" transition-transform duration-300 group-hover:translate-x-1" /></button>
    </div>
    </motion.div>

    <div className="flex gap-3">
    <motion.div
    initial={{y:50,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:1.2,delay:0.5,ease:"linear"}}
    className="sm:w-38 w-26 h-13 sm:h-22 bg-white/10 backdrop-blur-md rounded flex flex-col p-1 space-y-1 sm:space-y-2">
    <p className="text-xs sm:text-sm text-white sm:pl-3">3,900+ Species</p>
    <p className="text-[9px] sm:text-[12px] text-[#9a9999] sm:pl-3">Diverse snake species across continents</p>
    </motion.div>

    <motion.div
    initial={{x:50,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1.2,delay:0.5,ease:"linear"}}
    className="w-12 h-13 sm:h-22 bg-white/10 backdrop-blur-md rounded flex flex-col sm:gap-2 items-center  sm:p-2">
    <img src="/snake1.jpg" className="rounded-full size-5" width={26} height={26} />
    <img src="/snake2.jpg" className="rounded-full size-5" width={26} height={26} />
    <img src="/snake3.jpg" className="rounded-full size-5" width={26} height={26} />
    </motion.div>
    </div>
    </section>

    <section className="w-full bg-black h-screen">
    <motion.div
    initial={{y:-50,opacity:0}}
    whileInView={{y:0,opacity:1}}
    viewport={{once:true}}
    transition={{duration:2,delay:1,ease:"easeIn"}}
    className="bg-[url(\snake-blended.png)] bg-no-repeat h-full " >
    <div className=" w-full flex flex-col justify-center py-5">
      <h1 className="text-center text-2xl font-LexendExa text-[#92d9fd]">Snake Conservation and Ecological Awareness</h1>
      <p className=" w-full text-center sm:text-sm text-xs text-[#ffffff]  ">Educational snake rescue and conservation videos dedicated to wildlife protection, ecological balance, and responsible human–snake coexistence.</p>
    </div>
      <div className="flex">
      <div className="flex gap-5 sm:justify-center sm:gap-10 sm:py-20 sm:pl-30">
        <div>
        <a href=""><img className="sm:w-50 w-30 sm:h-60 h-40 rounded-sm" src="snake3.jpg" /></a>
        </div>
        <div>
        <a href=""><img className="sm:w-50 w-30 sm:h-60 h-40 rounded-sm" src="snake3.jpg" /></a>
        </div>
        <div>
        <a href=""><img className="sm:w-50 w-30 sm:h-60 h-40 rounded-sm" src="snake3.jpg" /></a>
        </div>
        <div>
        <a href=""><img className="sm:w-50 w-30 sm:h-60 h-40 rounded-sm" src="snake3.jpg" /></a>
        </div>
      </div>
      </div>
    </motion.div>
    </section>
    </>
  )
}

export default Home
