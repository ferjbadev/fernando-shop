import React from 'react'
import Link from 'next/link'
import { titleFont } from '@/config/fonts'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-200 to-green-200">
      {/* Contenedor de fondo blanco con sombra grande  */}

      {/* Tarjeta contenedora de fondo blanco con sombra grande  */}
      <div className="px-10 py-8 mt-4 text-left bg-white shadow-xl rounded-2xl w-full max-w-lg">
        {/* Título de inicio de sesión*/}
        <h1 className={`${titleFont.className} text-4xl font-bold text-center text-black`}>
          Login In
        </h1>
        <form>
          {/* Formulario para capturar datos de inicio de sesión */}
          <div className="mt-4">
            {/* Contenedor del campo de email con un margen superior */}
            <label className="block text-black text-1xl font-bold" htmlFor="email">
              {/* Etiqueta del campo de email, con estilo de texto negro y en negrita */}
              Email Address
            </label>
            <div className="relative">
              {/* Contenedor relativo para posicionar el ícono dentro del campo de entrada */}
              <EnvelopeIcon className="w-6 h-6 text-black absolute left-2 top-1/2 transform -translate-y-1/2" />
              {/*Ícono de sobre para representar el email*/}
              <input
                className="pl-10 w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
                type="email"
                id="email"
                placeholder="Email@email.com" />
              {/*Campo de entrada para el email*/}
            </div>
          </div>

          <div className="mt-4">
            {/* Contenedor del campo de contraseña con margen superior */}
            <label className="block text-black text-1xl font-bold" htmlFor="password">
              {/* Etiqueta del campo de contraseña, con estilo de texto negro y en negrita */}
              Password
            </label>
            <div className="relative">
              {/* Contenedor relativo para posicionar el ícono dentro del campo de entrada */}
              <LockClosedIcon className="w-6 h-6 text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
              {/* Ícono de candado para representar la contraseña */}
              <input
                className="pl-10 w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
                type="password"
                id="password"
                placeholder="************"
              />
              {/* Campo de entrada para la contraseña */}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {/* Contenedor que centra el botón de "Login" horizontalmente, con margen superior */}
            <button className="px-6 py-3 w-32 text-black border border-black bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg hover:to-blue-700 transition duration-300">
              {/* Botón de inicio de sesión */}
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center my-1">
          {/* Divisor horizontal con texto "O" en el centro */}
          <div className="flex-1 border-t border-black"></div>
          {/* Línea horizontal (border-t) negra a la izquierda del texto */}
          <div className="px-6 text-black text-sm">O</div>
          {/* Texto "O" de color negro */}
          <div className="flex-1 border-t border-black"></div>
          {/* Línea horizontal (border-t) negra a la derecha del texto */}
        </div>

        <Link href="/auth/newAccount/">
          {/* Enlace para crear una nueva cuenta */}
          <span className="block text-center py-2 border border-black text-black bg-gradient-to-r from-green-300 to-green-600 rounded-lg shadow-lg hover:to-green-800 transition duration-300">
            Create a new account
          </span>
        </Link>
      </div>
    </div >

  )
}
