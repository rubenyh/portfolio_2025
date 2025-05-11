import React from "react";



export default function Navbar() {
    return(
    <>
        <nav className="fixed top-0 left-0 w-screen z-1000 shadow-lg shadow-[#B4A784] bg-black text-white">
            <div className="flex items-center justify-between h-full px-4 py-2 mx-5 md:mx-12 lg:mx-24 my-4">
            <span className="text-[28px] sm:text-[36px] font-bold">RUBEN<span className="text-[#B4A784]">YANEZ</span></span>
            <button className="md:hidden text-lg">☰</button>
            <ul className="hidden md:flex justify-end space-x-5">
                <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300 hover:scale-x-110 origin-center">Home</li>
                <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300 hover:scale-x-110 origin-center">Projects</li>
                <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300 hover:scale-x-110 origin-center">Experience</li>
                <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300 hover:scale-x-110 origin-center">Education</li>
            </ul>
            </div>
        </nav>
    </>
    )
}
