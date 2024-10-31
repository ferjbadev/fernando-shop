import { SelectQuantity, SizeSelector, Slider } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { FaCartArrowDown } from "react-icons/fa";


interface Props {
    params: {
        slug: string
    }
}

// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default function ({ params }: Props) {

    const { slug } = params;
    const product = initialData.products.find(product => product.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="mt-10 mb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SlideShow */}
            <div className="col-span-1 md:col-span-2 bg-gray-100 p-4 rounded-lg shadow-md">
                <Slider
                    title={product.title}
                    images={product.images} />
            </div>

            {/* Nombre del producto */}
            <div className="col-span-1 px-5 md:col-span-1">
                <h1 className={`${titleFont.className} font-bold text-2xl mb-1`}>
                    {product.title}
                </h1>
                <p className="text-xl text-green-700">${product.price}</p>

                {/* Selector de Talla */}
                <SizeSelector
                    selectedSize={product.sizes[0]}
                    availableSizes={product.sizes}
                />

                {/* Selecionar Cantidad */}
                <SelectQuantity
                    quantity={1} />

                {/* Descripcion */}
                <h3 className="font-semibold text-sm mb-3 border-b-2 border-gray-200 pb-1">
                    Description
                </h3>
                <p className="font-light text-gray-700 leading-relaxed">
                    {product.description}
                </p>

                {/* boton */}
                <div className="flex justify-center mb-2 mt-5">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                        <FaCartArrowDown size={20} className="inline mr-2" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div >
    );
}