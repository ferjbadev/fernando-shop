"use client"

import Link from 'next/link'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { titleFont } from '@/config/fonts'
import { useUIStore } from '@/store'

const TopMenu = () => {

    const openMenu = useUIStore(state => state.openSideMenu);

    return (
        <nav className='flex px-12 py-5 justify-between items-center w-full'>
            {/* Logo */}
            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold text-4xl hover:underline`}>Digital Shop</span>
                    <span className='font-semibold text-2xl hover:underline'> | Store</span>
                </Link>
            </div>

            {/* Menu Center */}
            <div className='hidden sm:block'>
                <Link href='/category/men'>
                    <span className='m-2 p-2 rounded-full transition-all hover:underline font-semibold text-2xl hover:bg-gray-300'>Men</span>
                </Link>
                <Link href='/category/women'>
                    <span className='m-2 p-2 rounded-full transition-all hover:underline font-semibold text-2xl hover:bg-gray-300'>Women</span>
                </Link>
                <Link href='/category/kid'>
                    <span className='m-2 p-2 rounded-full transition-all hover:underline font-semibold text-2xl hover:bg-gray-300'>Kids</span>
                </Link>
            </div>

            {/* Search, Menu and Cart */}
            <div className='flex items-center'>
                {/* Search Icon */}
                <div className='mx-2 p-2 rounded-full transition-all hover:bg-gray-300'>
                    <Link href='/search'>
                        <IoSearchOutline className='w-10 h-10' />
                    </Link>
                </div>

                {/* Cart Icon */}
                <div className='mx-2 p-2 rounded-full  transition-all hover:bg-gray-300'>
                    <Link href='/cart'>
                        <div className='relative'>
                            <span className='absolute px-1 font-semibold -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex justify-center items-center text-xs'>
                                3
                            </span>
                            <IoCartOutline className='w-10 h-10' />
                        </div>
                    </Link>
                </div>

                {/* Menu Icon */}
                <button className='m-2 rounded-full font-semibold text-2xl transition-all hover:bg-gray-300 hover:underline'
                    onClick={openMenu}>
                    Menú
                </button>
            </div>
        </nav>
    )
}

export default TopMenu
