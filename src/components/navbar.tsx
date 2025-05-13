"use client";

import React from "react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <>
        <nav className="fixed top-0 left-0 w-screen bg-gradient-to-b from-[#020307]/80 to-[#484335]/80 backdrop-blur-md z-1000 shadow-lg shadow-[#b4a784a3] text-white">
            <div className="flex items-center justify-between h-full px-4 py-2 mx-5 md:mx-12 lg:mx-50 my-4">
            <span className="text-[28px] sm:text-[36px] font-bold">RUBEN<span className="text-[#B4A784]">YANEZ</span></span>
            <button 
                className="md:hidden text-lg cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            {isOpen && (
                <button 
                    className="fixed top-4 right-4 text-lg z-1001 cursor-pointer" 
                    onClick={() => setIsOpen(false)}
                >
                    ✖
                </button>
            )}
            {isOpen && (
                <aside className="fixed top-0 right-0 h-screen w-64 bg-[#464132] text-white shadow-lg z-1000">
                    <ul className="flex flex-col space-y-5 p-5">
                        <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300">Home</li>
                        <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300">Projects</li>
                        <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300">Experience</li>
                        <li className="text-[20px] hover:underline hover:underline-offset-4 hover:decoration-[#B4A784] cursor-pointer transition-all duration-300">Education</li>
                    </ul>
                </aside>
            )}
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
