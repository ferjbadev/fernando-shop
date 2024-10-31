"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";

const SideBar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);


    return (
        <div>
            {/* Fondo negro */}
            {
                isSideMenuOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
                )
            }

            {/* Fondo blur */}

            {
                isSideMenuOpen && (
                    <div
                        onClick={closeMenu}
                        className="fide-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
                )
            }

            {/* // Menu lateral */}
            <nav className={
                clsx(
                    "fixed text-3xl text-black p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform -transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }>
                {/* Boton de X */}
                <IoCloseOutline
                    size={30}
                    className="absolute top-5 right-5 cursor-pointer hover:bg-gray-300 rounded-fullZW"
                    onClick={() => closeMenu()} // Funcion para cerrar el menu lateral
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
                {/* Icono de perfil */}
                <Link href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoPersonOutline size={30} />
                    <span className="ml-2 text-xl font-semibold hover:underline">Profile</span>
                </Link>

                {/* Icono de orden */}
                <Link href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoTicketOutline size={30} />
                    <span className="ml-2 text-xl font-semibold hover:underline">Order</span>
                </Link>

                {/* Icono de login */}
                <Link href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogInOutline size={30} />
                    <span className="ml-2 text-xl font-semibold hover:underline">Login</span>
                </Link>

                {/* Icono de logout */}
                <Link href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogOutOutline size={30} />
                    <span className="ml-2 text-xl font-semibold hover:underline">Go Out</span>
                </Link>

                {/* Separador */}
                <div className="w-full h-[2px] bg-black my-10" />

                {/* Icono de productos */}
                <Link href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoShirtOutline size={30} />
                    <span className="ml-2 text-xl font-semibold hover:underline">Products</span>
                </Link>

                {/* Icono de ordenes */}
                <Link href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoTicketOutline size={30} />
                    <span className="ml-2 text-xl font-semibold hover:underline">Orders</span>
                </Link>

                {/* Icono de usuarios */}
                <Link href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoPeopleOutline size={30} />
                    <span className="ml-2 text-xl font-semibold hover:underline">Users</span>
                </Link>
            </nav>
        </div>
    )
}

export default SideBar
