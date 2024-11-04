import React from 'react'
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-white tracking-wider uppercase">Company</h3>
                                <ul className="mt-4">
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">About us</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Contact</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Jobs</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Press kit</a></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-2xl font-semibold text-white tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4">
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Privacy Policy</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h3 className="text-sm font-bold text-white tracking-wider uppercase">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-base text-white">The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button type="submit" className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <a href="#" className="text-white hover:text-gray-300 hover:underline transform transition-transform duration-200 hover:scale-150">
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 hover:underline transform transition-transform duration-200 hover:scale-150">
                            <span className="sr-only">YouTube</span>
                            <FaYoutube className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 hover:underline transform transition-transform duration-200 hover:scale-150">
                            <span className="sr-only">Facebook</span>
                            <FaFacebook className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="mt-8 text-base text-white text-center md:mt-0 md:order-1 w-full">
                        &copy; {new Date().getFullYear()} Fernando Barrera. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}