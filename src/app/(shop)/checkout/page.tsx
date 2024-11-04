import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
];

export default function ShoppingCart() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Titulo */}
            <Title title="Verification Order"
                className="text-center" />
            {/* Contenedor principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">

                        {productsInCart.map(product => (
                            <div key={product.slug} className="flex flex-col sm:flex-row items-center border-b border-gray-200 py-4 last:border-b-0">
                                <Image
                                    src={`/products/${product.images[0]}`}
                                    alt={product.title}
                                    width={100}
                                    height={100}
                                    className="rounded-md mb-4 sm:mb-0 sm:mr-6"
                                />
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                    <p className="text-green-500 font-bold mb-2">${product.price} x 3</p>
                                    <p className="font-bold">Subtotal: ${product.price * 3}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Checkout */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="flex justify-center items-center text-lg font-semibold mb-4">Order Checkout</h2>
                        {/* Direccion de envio */}
                        <h2 className="text-lg font-semibold mb-2">Address to Deliver</h2>
                        <div className="mb-10">
                            <p className="font-bold text-xl">Homero Simpson</p>
                            <p>Springfield</p>
                            <p>Av. Siempre Viva 123</p>
                            <p>Number: 154.545.4545</p>
                        </div>
                        {/* Linea divisoria */}
                        <div className="w-full h-1 border-t border-black mb-5" />
                        {/* Detalles de orden */}
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${productsInCart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span className="text-green-600">$10.00</span>
                        </div>
                        {/* Segunda Linea divisoria */}
                        <hr className="w-full h-1 border-t border-black mb-5" />
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">
                                ${(productsInCart.reduce((acc, product) => acc + product.price, 0) + 10).toFixed(2)}
                            </span>
                        </div>
                        {/* Terminos y Condiciones */}
                        <span className="text-xs text-gray-600 hover:underline">
                            By clicking on Make Order you are accepting
                            <span className="text-black"> our terms and conditions of use</span>
                        </span>

                        <button className="w-full bg-blue-600 text-white py-2 border border-black px-4 rounded-md hover:bg-blue-700 transition duration-300 mt-4">
                            <Link href="/orders/123" className="block w-full text-center">Make Order</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-6">
                <Link
                    href='/cart'
                    className="bg-green-600 text-white font-semibold border border-black py-3 px-6 rounded-lg shadow-md hover:underline hover:bg-gueen-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 text-center"
                >
                    Edit
                </Link>
            </div>
        </div>
    );
}
