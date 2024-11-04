import Link from 'next/link'
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { titleFont } from '@/config/fonts'

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-300 to-blue-600">
      {/* Contenedor principal con estilo de sombra más sutil y borde redondeado */}
      <div className="px-10 py-8 mt-4 text-left bg-white shadow-2xl rounded-2xl w-full max-w-lg">
        {/* Título principal estilizado */}
        <h1 className={`${titleFont.className} text-4xl font-extrabold text-center text-black`}>
          Create Account
        </h1>
        <form>
          <div className="mt-4">
            <label className="block text-black text-lg font-semibold" htmlFor="name">
              ¿What is your name?
            </label>
            <div className="relative">
              <UserIcon className="w-6 h-6 text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                className="pl-10 w-full px-4 py-3 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-black text-lg font-semibold" htmlFor="email">
              ¿What is your email address?
            </label>
            <div className="relative">
              <EnvelopeIcon className="w-6 h-6 text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                className="pl-10 w-full px-4 py-3 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                type="email"
                id="email"
                placeholder="Email@email.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-black text-lg font-semibold" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <LockClosedIcon className="w-6 h-6 text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                className="pl-10 w-full px-4 py-3 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                type="password"
                id="password"
                placeholder="************"
              />
            </div>
          </div>

          {/* Botón de Crear Cuenta con gradiente */}
          <div className="flex justify-center mt-2">
            <button className="px-8 py-3 w-40 border border-black text-black bg-gradient-to-r from-green-300 to-red-600 rounded-lg shadow-lg hover:to-blue-800 transition duration-300">
              Create
            </button>
          </div>
        </form>
        {/* Separador visual */}
        <div className="flex items-center">
          <div className="flex-1 border-t border-black"></div>
          <div className="px-6 text-black text-sm">O</div>
          <div className="flex-1 border-t border-black"></div>
        </div>

        {/* Enlace de Ingreso */}
        <Link href="/auth/login/">
          <span className="block text-center px-6 py-2 border border-black text-black bg-gradient-to-r from--300 to-green-600 rounded-lg hover:bg-blue-50 transition duration-300">
            Login
          </span>
        </Link>
      </div>
    </div>

  )
}