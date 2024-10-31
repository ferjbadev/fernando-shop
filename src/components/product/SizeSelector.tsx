import type { Size } from "@/interfaces"
import clsx from "clsx";

interface Props {
    selectedSize?: Size;
    availableSizes: Size[]; //'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
    return (
        <div className="my-5">
            <h3 className="font-bold">Tallas Disponibles</h3>

            <div className="flex">
                {
                    availableSizes.map(size => (
                        <button
                            key={size}
                            className={
                                clsx(
                                    "mx-2 rounded-full transition-all hover:underline",
                                    {
                                        "bg-gray-300 underline": size === selectedSize
                                    }
                                )
                            }>
                            {size}
                        </button>
                    )
                    )
                }
            </div>
        </div>
    )
}

