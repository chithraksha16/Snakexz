import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const NavBar = () => {
  const [isOpen,setIsOpen]=useState(false)


  const handleMenu=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className="w-full fixed bg-[#000000] h-11 flex justify-between">
      <div className=" w-full flex justify-between sm:px-30 px-10">
         {/* header logo */}
          <div className="flex gap-2 items-center ">
          <img src="/logo.jpeg" height={23} width={23} />
          <h2 className="font-Plaster font-bold text-white text-sm">SnakeXz</h2>
          </div>

      <div className=" hidden sm:flex items-center text-white">
          <ul className="flex gap-5 font-RubikWetPaint text-sm font-light">
          <li>Home</li>
          <li>Snakes</li>
          <li>About</li>
          </ul>
      </div>

      <div className="flex sm:hidden text-xl  text-white items-center font-bold" onClick={handleMenu}>
      {isOpen ?<IoCloseOutline />: <RiMenu3Fill />}
      </div>
      </div>
    </div>

    <div>
    {isOpen &&(
      <div className="flex h-screen bg-black text-white absolute p-5">
        <ul className="flex flex-col gap-6 font-RubikWetPaint text-sm font-light py-4">
          <li>Home</li>
          <li>Snakes</li>
          <li>About</li>
          </ul>
      </div>
    )}
    </div>
    </>
  )
}

export default NavBar
