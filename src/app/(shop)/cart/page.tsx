import { SelectQuantity, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { BiSolidArrowFromRight } from "react-icons/bi";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
];

export default function ShoppingCart() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Title title="Shopping Cart"
                className="text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <div className="flex justify-center items-center mb-6">
                            <span className="text-xl font-bold hover:underline">Items in your Cart</span>
                        </div>
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
                                    <p className="text-green-500 font-bold mb-2">${product.price.toFixed(2)}</p>
                                    <div className="flex items-center justify-between">
                                        <SelectQuantity quantity={1} />
                                        <button className="text-red-600 hover:text-red-800 hover:underline transition duration-300">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Checkout */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="flex justify-center items-center text-lg font-semibold mb-4">Order Checkout</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${productsInCart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span className="text-green-600">$10.00</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">
                                ${(productsInCart.reduce((acc, product) => acc + product.price, 0) + 10).toFixed(2)}
                            </span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mt-4">
                            <Link href="/checkout/address" className="block w-full text-center">Checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
                    <BiSolidArrowFromRight className="mr-2 size-[24px]" />
                    <span className="font-semibold">Continue Shopping</span>
                </Link>
            </div>
        </div>
    );
}
