"use client"

import { Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
    // Estado para controlar la imagen
    const [displayImage, setDisplayImage] = useState(product.images[0]);

    return (
        // Contenedor principal del producto
        <div className='rounded-md overflow-hidden face-in'>
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={`/products/${displayImage}`} // Usar displayImage para reflejar el cambio
                    alt={product.title}
                    className='w-full object-cover' // Ajusta la imagen para que ocupe el ancho completo del contenedor
                    width={500}  // Ajusta el ancho de la imagen
                    height={500} // Ajusta el alto de la imagen
                    onMouseEnter={() => setDisplayImage(product.images[1])} // Cambia la imagen al pasar el mouse
                    onMouseLeave={() => setDisplayImage(product.images[0])} // Regresa a la imagen original al quitar el mouse
                />
            </Link>

            {/* Contenedor de la información del producto */}
            <div className='p-4 flex flex-col'>
                <Link
                    className='hover:text-blue-700 transition-all'
                    href={`/product/${product.slug}`}>
                    {/* Nombre del producto */}
                    <h3 className='text-lg font-bold'>{product.title}</h3> 
                </Link>
                {/* Precio del producto */}
                <span className='font-bold'>${product.price}</span>
            </div>
        </div>
    );
};
