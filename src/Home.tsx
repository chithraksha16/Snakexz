import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <>
    <section className='bg-[url(\snakeHero.jpg)] bg-cover h-90 sm:h-[40vw] sm:px-30 px-5'>
    <motion.div
    initial={{x:-30,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1,ease:"easeInOut"}} 
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
    <motion.div className="sm:w-38 w-26 h-13 sm:h-22 bg-white/10 backdrop-blur-md rounded flex flex-col p-1 space-y-1 sm:space-y-2">
    <p className="text-xs sm:text-sm text-white sm:pl-3">3,900+ Species</p>
    <p className="text-[9px] sm:text-[12px] text-[#9a9999] sm:pl-3">Diverse snake species across continents</p>
    </motion.div>
    <div className="w-12 h-13 sm:h-22 bg-white/10 backdrop-blur-md rounded flex flex-col sm:gap-2 items-center  sm:p-2">
    <img src="/snake1.jpg" className="rounded-full" width={26} height={26} />
    <img src="/snake2.jpg" className="rounded-full" width={26} height={26} />
    <img src="/snake3.jpg" className="rounded-full" width={26} height={26} />
    </div>
    </div>
    
    </section>

    <section>

    </section>
    </>
  )
}

export default Home
