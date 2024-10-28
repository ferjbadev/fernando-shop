import Link from 'next/link'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { titleFont } from '@/config/fonts'

const TopMenu = () => {
    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            {/* logo */}
            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold text-2xl`}>Fernando Shop</span>
                    <span> | Store</span>
                </Link>
            </div>

            {/* Menu Center */}
            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-300' href='/category/men'>Men</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-300' href='/category/women'>Women</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-300' href='/category/kids'>Kids</Link>
            </div>

            {/* Search, Menu and Cart */}
            <div className='flex items-center'>
                {/* Search Icon */}
                <Link href='/search' className='mx-2 p-2 rounded-md transition-all hover:bg-gray-300'>
                    <IoSearchOutline className='w-5 h-5' />
                </Link>

                {/* Cart Icon */}
                <Link href='/cart' className='mx-2 p-2 rounded-md transition-all hover:bg-gray-300'>
                    <div className='relative'>
                        <span className='absolute px-1 -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex justify-center items-center text-xs'>
                            3
                        </span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>

                {/* Menu Icon */} 
                <button className='m-2 rounded-md transition-all hover:bg-gray-300'>
                    Menú
                </button>
            </div>
        </nav>
    )
}

export default TopMenu
