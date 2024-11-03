import { Title } from '@/components';
import Link from 'next/link';
import { LuUserCircle2 } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneInboundFill } from "react-icons/bs";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
    return (
        <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-4 sm:px-0">
            {/* Contenedor principal con sombra, color de fondo y bordes */}
            <div className="w-full xl:w-[1000px] bg-white shadow-lg rounded-lg sm:p-10 border border-black">

                {/* Componente de título centrado */}
                <div className="text-center">
                    <Title title="Tell us your Address" subtitle="Delivery address" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                    {/* Campo para el nombre con icono */}
                    <div className="flex flex-col mb-2">
                        <span>Name</span>
                        <div className="flex items-center p-3 border border-black rounded-md bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition duration-200">
                            <LuUserCircle2 className="h-5 w-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                className="bg-transparent outline-none w-full"
                                placeholder="What is your name?"
                            />
                        </div>
                    </div>

                    {/* Campo para el apellido con icono */}
                    <div className="flex flex-col mb-2">
                        <span>Last Name</span>
                        <div className="flex items-center p-3 border border-black rounded-md bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition duration-200">
                            <LuUserCircle2 className="h-5 w-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                className="bg-transparent outline-none w-full"
                                placeholder="What is your last name?"
                            />
                        </div>
                    </div>

                    {/* Campo para la dirección */}
                    <div className="flex flex-col mb-2">
                        <span>Address</span>
                        <div className="flex items-center p-3 border border-black rounded-md bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition duration-200">
                            <HiLocationMarker className="h-5 w-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                className="bg-transparent outline-none w-full"
                                placeholder="Tell me your address"
                            />
                        </div>
                    </div>

                    {/* Campo para la dirección adicional */}
                    <div className="flex flex-col mb-2">
                        <span>Address 2 (optional)</span>
                        <input
                            type="text"
                            className="p-3 border border-black rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            placeholder="Apartment, unit, etc."
                        />
                    </div>

                    {/* Campo para el código postal */}
                    <div className="flex flex-col mb-2">
                        <span>Postal Code</span>
                        <input
                            type="text"
                            className="p-3 border border-black rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            placeholder="Postal Code"
                        />
                    </div>

                    {/* Campo para la ciudad */}
                    <div className="flex flex-col mb-2">
                        <span>City</span>
                        <input
                            type="text"
                            className="p-3 border border-black rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            placeholder="Tell me your city"
                        />
                    </div>

                    {/* Campo de selección para el país */}
                    <div className="flex flex-col mb-2">
                        <span>Country</span>
                        <select
                            className="p-3 border border-black rounded-md bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        >
                            <option value="">[ Select ]</option>
                            <option value="USA">USA</option>
                            <option value="CAN">Canada</option>
                            <option value="BRA">Brazil</option>
                            <option value="VEN">Venezuela</option>
                            <option value="CHI">Chile</option>
                            <option value="COL">Colombia</option>
                            <option value="PER">Peru</option>
                            <option value="ITA">Italy</option>
                            <option value="ESP">Spain</option>
                            <option value="VAL">Valhalla</option>
                            <option value="JPN">Japan</option>
                            <option value="RUS">Russia</option>
                        </select>
                    </div>

                    {/* Campo para el teléfono con icono */}
                    <div className="flex flex-col mb-2">
                        <span>Phone Number</span>
                        <div className="flex items-center p-3 border border-black rounded-md bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition duration-200">
                            <BsTelephoneInboundFill className="h-5 w-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                className="bg-transparent outline-none w-full"
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>

                    {/* Botones de Continuar y Cancelar, centrados */}
                    <div className="flex justify-center items-center mt-6 w-full col-span-2">
                        <div className="flex space-x-4">
                            <Link
                                href='/'
                                className="bg-red-500 text-white font-semibold border border-black py-3 px-6 rounded-lg shadow-md hover:bg-red-600 hover:underline focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200 text-center"
                            >
                                Cancel
                            </Link>
                            <Link
                                href='/checkout'
                                className="bg-blue-600 text-white font-semibold border border-black py-3 px-6 rounded-lg shadow-md hover:underline hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 text-center"
                            >
                                Next
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
