import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
];

interface Props {
    params: {
        id: string;
    }
}

export default function Order({ params }: Props) {
    const { id } = params;

    return (
        <div className="container mx-auto px-4 py-8">
            <Title title={`Order #${id}`} className="text-3xl font-bold text-center mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Carrito */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className={clsx(
                        "flex items-center justify-center py-3 px-4 text-sm font-bold text-white",
                        {
                            "bg-red-500": false,
                            "bg-green-600": true,
                        }
                    )}>
                        <IoCardOutline size={24} className="mr-2" />
                        <span>Paid Order</span>
                    </div>
                    <div className="p-6">
                        {productsInCart.map(product => (
                            <div key={product.slug} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                                <Image
                                    src={`/products/${product.images[0]}`}
                                    alt={product.title}
                                    width={80}
                                    height={80}
                                    className="rounded-md object-cover mr-4"
                                />
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold">{product.title}</h3>
                                    <p className="text-green-600 font-semibold">${product.price} x 3</p>
                                    <p className="text-gray-600">Subtotal: ${(product.price * 3).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Checkout */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-center mb-6">Order Summary</h2>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Delivery Address</h3>
                            <div className="bg-gray-100 p-4 rounded-md">
                                <p className="font-semibold text-lg">Homero Simpson</p>
                                <p>Springfield</p>
                                <p>Av. Siempre Viva 123</p>
                                <p>Phone: 154-545-4545</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                            </div>
                            <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between items-center">
                                <span className="text-lg font-semibold">Total</span>
                            </div>
                        </div>
                        <div className={clsx(
                            "mt-6 flex items-center justify-center py-3 px-4 rounded-md text-sm font-bold text-white",
                            {
                                "bg-red-500": false,
                                "bg-green-600": true,
                            }
                        )}>
                            <IoCardOutline size={24} className="mr-2" />
                            <span>Paid Order</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}