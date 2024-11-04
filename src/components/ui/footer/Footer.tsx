import React from 'react'
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            {/* Contenedor principal del footer con fondo gris oscuro y texto blanco */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Contenedor interno que limita el ancho máximo y agrega espacio alrededor del contenido */}

                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Estructura de tres columnas para pantallas grandes, con un espacio entre ellas */}

                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        {/* Contenedor de dos columnas para las secciones "Company" y "Legal" */}

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            {/* Estructura interna de dos columnas para ajustar el diseño en pantallas medianas */}

                            <div>
                                {/* Sección "Company" */}
                                <h3 className="text-2xl font-semibold text-white tracking-wider uppercase">Company</h3>
                                {/* Título de la sección con tamaño de letra grande, fuente semibold, y todo en mayúsculas */}

                                <ul className="mt-4">
                                    {/* Lista de enlaces dentro de la sección "Company" */}
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">About us</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Contact</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Jobs</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Press kit</a></li>
                                </ul>
                            </div>

                            <div className="mt-12 md:mt-0">
                                {/* Sección "Legal", separada de "Company" con un margen superior en pantallas pequeñas */}
                                <h3 className="text-2xl font-semibold text-white tracking-wider uppercase">Legal</h3>
                                {/* Título de la sección */}

                                <ul className="mt-4">
                                    {/* Lista de enlaces dentro de la sección "Legal" */}
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Privacy Policy</a></li>
                                    <li><a href="#" className="text-base hover:text-white transition-colors duration-200 hover:underline">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 xl:mt-0">
                        {/* Sección para suscribirse al boletín en pantallas grandes */}
                        <h3 className="text-sm font-bold text-white tracking-wider uppercase">Subscribe to our newsletter</h3>
                        {/* Título de la sección */}

                        <p className="mt-4 text-base text-white">The latest news, articles, and resources, sent to your inbox weekly.</p>
                        {/* Texto descriptivo para suscribirse al boletín */}

                        <form className="mt-4 sm:flex sm:max-w-md">
                            {/* Formulario de suscripción al boletín, adaptado para alinearse horizontalmente en pantallas pequeñas */}
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            {/* Etiqueta para accesibilidad para el campo de correo electrónico */}

                            <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
                            {/* Campo de entrada para el correo electrónico con estilos personalizados */}

                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                {/* Botón de suscripción que se coloca al lado del campo de correo electrónico en pantallas pequeñas */}
                                <button type="submit" className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">Subscribe</button>
                                {/* Botón de envío con color de fondo azul y efectos de hover y enfoque */}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
                    {/* Sección inferior del footer, que contiene redes sociales y el texto de derechos reservados */}

                    <div className="flex space-x-6 md:order-2">
                        {/* Íconos de redes sociales con espacio entre ellos */}
                        <a href="#" className="text-white hover:text-blue-500 transform transition-transform duration-300 hover:scale-150">
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                            {/* Ícono de Twitter con efectos de hover y transición de escala */}
                        </a>
                        <a href="#" className="text-white hover:text-red-500 transform transition-transform duration-300 hover:scale-150">
                            <span className="sr-only">YouTube</span>
                            <FaYoutube className="h-6 w-6" />
                            {/* Ícono de YouTube */}
                        </a>
                        <a href="#" className="text-white hover:text-blue-500 transform transition-transform duration-300 hover:scale-150">
                            <span className="sr-only">Facebook</span>
                            <FaFacebook className="h-6 w-6" />
                            {/* Ícono de Facebook */}
                        </a>
                    </div>

                    <p className="mt-8 text-base text-white text-center md:mt-0 md:order-1 w-full">
                        &copy; {new Date().getFullYear()} Fernando Barrera. All rights reserved.
                        {/* Texto de derechos reservados con el año dinámico */}
                    </p>
                </div>
            </div>
        </footer>

    )
}