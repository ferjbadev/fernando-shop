import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

// Error page
const PageNotFound = () => {
    return (
        <div className="flex flex-col md:flex-row h-[800px] w-full justify-center items-center align-middle">
            <div className="text-center px-5 mx-5">
                <h1 className={`${titleFont.className} antialiased font-bold text-5xl`}>404 Not Found</h1>
                <p className='font-semibold text-xl'>Sorry, we couldn&apos;t find the page you&apos;re looking for</p>
                <p className='font-light'>Please check the URL or go back to the homepage</p>
                <Link href='/' className='font-bold text-lg hover:underline transition-all'>Back to Homepage</Link>
            </div>

            {/* // Image */}
            <div className='px-5 mx-5'>
                <Image
                    src={'/imgs/image.png'}
                    alt='page not found'
                    className="px-5 sm:p-0"
                    width={500}
                    height={500} />
            </div>
        </div>
    )
}

export default PageNotFound
