"use client"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
export default function Hamburger() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="flex md:hidden">
      {/* Hamburger Icon */}
      <button className="flex-Col gap-2 cursor-pointer" onClick={() => handleOpen()}>
        <span className={`w-8 h-[3px] transition-all duration-300 ease-out  bg-white ${isOpen ? "transform -rotate-45 translate-y-0 relative top-[28%]" : ""}`}></span>
        <span className={`w-8 h-[3px] transition-all duration-300 ease-out  bg-white ${isOpen ? " hidden" : ""}`}></span>
        <span className={`w-8 h-[3px] transition-all duration-300 ease-out  bg-white ${isOpen ? "transform rotate-45 translate-y-0 relative bottom-1/2" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} />
    </div>
  )
}
