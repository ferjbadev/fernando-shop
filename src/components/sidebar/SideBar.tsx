"use client";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const SideBar = () => {
    return (
        <div>
            {/* Fondo negro */}
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>


            {/* Fondo blur */}
            <div className="fide-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>

            {/* // Menu lateral */}
            <nav className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform -transition-all duration-300">
                {/* Todo: efecto de slide */}
                Side Menu

                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => console.log("click")} // Funcion para cerrar el menu lateral
                />

                {/* Input */}
                <div className="relative mt-14">
                    <IoSearchOutline
                        size={30}
                        className="absolute top-1 left-2" />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-100 rounded pl-10 py-1 pr-10 border-b text-xl focus:outline-none focus:border-blue-800 border-green-500" />

                </div>
            </nav>
        </div>
    )
}

export default SideBar
