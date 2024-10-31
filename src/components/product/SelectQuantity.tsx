"use client"

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface Props {
    quantity: number
}

export const SelectQuantity = ({ quantity }: Props) => {

    const [count, setCount] = useState(quantity);
    const onQuantityChange = (value: number) => {
        if (count + value < 1) return; // Se puede cambiar a un minimo de 1
        if (count + value > 5) return; // Se puede cambiar a un maximo de 5
        setCount(count + value); // Se cambia la cantidad
    }

    return (
        <div className="flex">
            <button onClick={() => onQuantityChange(-1)}>
                <IoRemoveCircleOutline size={30} />
            </button>
            <span className="w-14 px-5 py-2 rounded bg-gray-200 border border-black">
                {count}
            </span>
            <button onClick={() => onQuantityChange(+1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
    )
}

